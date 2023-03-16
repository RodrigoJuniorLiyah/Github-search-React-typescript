import React, { useEffect, useState } from "react";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { CloseButton, Spinner, Stack } from "@chakra-ui/react";
import { toast } from "react-toastify";

import { urlUser, User } from "../../../interfaces/models-api";

import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";

import api from "../../../services/api";

import { Container, Modal } from "./styles";

export const HomeComponents = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<string>("Rodrigo");
  const [modal, setModal] = useState<string>("");
  const [user, setUser] = useState<urlUser>();
  const [url, setUrl] = useState<string>("");

  let delayTimer: NodeJS.Timeout;

  const getUsers = async () => {
    if (search === "") {
      setUsers([]);
      return;
    }

    setLoading(true);

    try {
      const { data } = await api.get(`/search/users?q=${search}`);

      setUsers(data.items);

      if (data.items.length === 0) {
        toast.error("Nenhum usuário encontrado");
      }
    } catch (error) {
      console.log(error);
      toast.error("Excedeu o limite de requisições, aguarde 1 minuto");
    }

    setLoading(false);
  };

  const getUrlUser = async (url: string) => {
    if (url === "") {
      setUser(undefined);
      return;
    }

    try {
      const { data } = await api.get(`/users/${url}`);

      setUser(data);
    } catch (error) {
      toast.error("Você excedeu o limite de requisições");
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    clearTimeout(delayTimer);

    delayTimer = setTimeout(() => {
      setSearch(value);
    }, 700);
  };

  const formatDate = (date: any) => {
    const newDate = new Date(date).toLocaleString("pt-BR", {
      timeZone: "America/Sao_Paulo",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    return newDate;
  };

  useEffect(() => {
    getUsers();
  }, [search]);

  useEffect(() => {
    getUrlUser(url);
  }, [url]);

  return (
    <>
      <Container>
        <div className="logo">
          <Logo />

          <h2>Github Search</h2>
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Pesquisar"
            onChange={(e) => handleSearch(e)}
            defaultValue={search}
          />
          <div className="containerSpinner">
            {loading && search !== "" && (
              <Spinner
                className="spinner"
                color="#9F7BE1"
                width={20}
                height={20}
              />
            )}
          </div>
        </div>

        <div className="content">
          <div className="results">
            {users &&
              users.map((item) => {
                const { login, id, html_url, avatar_url } = item;

                return (
                  <div
                    onClick={(e) => {
                      if (e.target !== e.currentTarget) {
                        setModal("true");
                      }
                      setUrl(login);
                    }}
                    key={id}
                    className="result"
                  >
                    <div className="avatar">
                      <img src={avatar_url} alt="" />
                    </div>

                    <div className="containerInfo">
                      <div className="info">
                        <h3>Nome</h3>
                        <p>{login}</p>
                      </div>

                      <div className="repos">
                        <div className="repo">
                          <h3>URL perfil</h3>
                          <a onClick={(e) => e.stopPropagation()} target={"_blank"} href={html_url} rel="noreferrer">
                            Clique aqui
                          </a>
                        </div>
                      </div>

                      <div className="buttons">
                        <button type="button">
                          <AiOutlineUser />
                        </button>
                        <button
                          onClick={(e) => {
                            window.open(`${html_url}?tab=repositories`);
                            e.stopPropagation();
                          }}
                          type="button"
                        >
                          <RiGitRepositoryCommitsLine />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>

      {modal && (
        <Modal
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setModal("");
            }
          }}
        >
          <div className="modal">
            <div className="header">
              <div className="title">
                <h2>Informações sobre:</h2>
                <span>{user?.login}</span>
              </div>

              <CloseButton size="sm" onClick={() => setModal("")} />
            </div>

            <div className="content">
              <div className="username">
                <strong>User name</strong>
                <span>{user?.login}</span>
              </div>
              <div className="name">
                <strong>Nome</strong>
                <span>{user?.name}</span>
              </div>
              <div className="location">
                <strong>Location</strong>
                <span>{user?.location}</span>
              </div>
              <div className="email">
                <strong>E-mail</strong>
                {user?.email === null && <span>Não informado</span>}
              </div>
              <div className="repos">
                <strong>N de repositórios</strong>
                <span>{user?.public_repos}</span>
              </div>
              <div className="followers">
                <strong>Seguidores</strong>
                <span>{user?.followers}</span>
              </div>
              <div className="following">
                <strong>Seguindo</strong>
                <span>{user?.following}</span>
              </div>
              <div className="bio">
                <strong>Bio</strong>
                <span>{user?.bio}</span>
              </div>
              <div className="url">
                <strong>URL</strong>
                <span>{user?.url}</span>
              </div>
              <div className="created">
                <strong>Criado em</strong>
                <span>{formatDate(user?.created_at)}</span>
              </div>
              <div className="updated">
                <strong>Última atualização</strong>
                <span>{formatDate(user?.updated_at)}</span>
              </div>
              <div className="enterprise">
                <strong>Empresa</strong>
                {<span>{user?.company ? user?.company : "Não possui"}</span>}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};
