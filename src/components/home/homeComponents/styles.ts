import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  .logo {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    top: 0;
    left: 0;

    margin: 3rem 0;
    gap: 5px;

    h2 {
      font-family: "Inter", sans-serif;
      font-weight: 900;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.text.fourth};
    }
  }

  .search {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0 2rem;

    input {
      height: 3rem;
      width: 640px;

      border-radius: 8px;
      border: 1px solid ${({ theme }) => theme.text.fourth};
      outline: none;

      padding: 0 1rem;

      font-family: "Inter", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      color: ${({ theme }) => theme.text.fourth};

      background: ${({ theme }) => theme.background.primary};
    }

    .containerSpinner {
      transform: translate(-35px, 3px);

      width: 0;
    }

    .spinner {
      /* position: absolute; */
    }

    input::placeholder {
      color: #808080;
    }
  }

  .content {
    flex: 1;
    width: 100%;

    display: flex;
    justify-content: center;

    /* padding-bottom: 10rem; */

    overflow: hidden;
  }

  .content .results {
    height: 100%;
    width: 750px;

    margin: 2rem 0;
    padding: 1rem 1rem 3rem 1rem;
    gap: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;

    overflow: auto;

    &::-webkit-scrollbar {
      width: 2.5px;
      height: 7px;

      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.text.fourth};
      border-radius: 10px;
    }
  }

  .results .result {
    height: 80px;
    width: 100%;
    max-width: 100%;

    display: flex;

    padding: 5px;

    border-radius: 4px;
    outline: 1px solid ${({ theme }) => theme.border.primary};

    background: ${({ theme }) => theme.background.primary};

    transition: all ease-in-out 0.2s;

    cursor: pointer;

    &:hover {
      outline: 1px solid ${({ theme }) => theme.text.fourth};
    }

    img {
      height: 100%;
      width: 80px;

      object-fit: cover;

      /* border: 2px solid ${({ theme }) => theme.text.fourth}; */

      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
      border-radius: 8px;

      margin-right: 5px;
    }

    .containerInfo {
      flex: 1;

      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;

      div {
        flex: 1;

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }

      h3 {
        font-family: "Inter", sans-serif;
        font-weight: 600;
        font-size: 1rem;
        color: ${({ theme }) => theme.text.primary};
      }

      p {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 0.8rem;
        color: ${({ theme }) => theme.text.fourth};

        width: 75px; /* largura máxima do elemento */
        white-space: nowrap; /* impede a quebra de linha */
        overflow: hidden; /* oculta o conteúdo que excede a largura máxima */
        text-overflow: ellipsis; /* exibe os três pontos */
      }

      a {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 0.8rem;
        color: ${({ theme }) => theme.text.fourth};

        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      .buttons {
        flex: 1;

        gap: 0 5px;

        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
      }

      .buttons button {
        height: 30px;
        width: 100%;
        min-width: 40px;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1px solid ${({ theme }) => theme.text.fourth};
        border-radius: 4px;

        color: ${({ theme }) => theme.text.fourth};

        background-color: transparent;
      }

      .buttons button:hover {
        background-color: ${({ theme }) => theme.text.fourth};
        color: ${({ theme }) => theme.background.primary};

        cursor: pointer;

        transition: 0.2s;

        svg {
          color: ${({ theme }) => theme.background.primary};

          transition: 0.2s;
        }
      }

      @media (max-width: 700px) {
        & h3 {
          font-size: 0.8rem;
        }
      }
    }
  }
`;

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(4, 23, 85, 0.07);
  backdrop-filter: blur(2px);

  z-index: 3;

  .modal {
    width: 700px;
    height: 70%;

    box-shadow: 0px 0px 6px 1px rgba(159, 123, 225, 10.3);
    border: 1px solid ${({ theme }) => theme.text.fourth};

    display: flex;
    flex-direction: column;

    animation-name: animation;
    animation-duration: 0.75s;

    position: relative;

    border-radius: 8px;
    padding: 1rem;

    background: ${({ theme }) => theme.background.secondary};

    .header {
      width: 100%;

      display: flex;
      justify-content: space-between;

      overflow: hidden;

      button {
        height: 30px;
        width: 30px;

        border: none;
        border-radius: 4px;

        cursor: pointer;
      }

      button:hover {
        background: ${({ theme }) => theme.text.fourth};
      }

      .title {
        display: flex;
        align-items: center;
      }

      .title h2 {
        font-family: "Inter", sans-serif;
        font-weight: 600;
        font-size: 1.3rem;
        color: ${({ theme }) => theme.background.primary};
      }

      .title span {
        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: ${({ theme }) => theme.text.fourth};
        text-decoration: underline;

        margin-left: 5px;
      }
    }

    .content {
      flex: 1;
      margin-top: 1rem;

      display: flex;
      justify-content: space-between;
      flex-direction: column;

      overflow: auto;

      & > div {
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      strong {
        font-family: "Inter", sans-serif;
        font-weight: 600;
        font-size: 1rem;
        color: ${({ theme }) => theme.background.primary};
      }

      span {
        flex: 1;

        font-family: "Inter", sans-serif;
        font-weight: 400;
        font-size: 0.8rem;
        color: ${({ theme }) => theme.text.fourth};
      }
    }

    @media (max-width: 700px) {
      width: 90%;
      height: 90%;

      .header {
        .title {
          h2 {
            font-size: 1rem;
            white-space: nowrap;
          }

          span {
            font-size: 0.8rem;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          @media (max-width: 375px) {
            h2 {
              font-size: 0.8rem;
            }

            span {
              font-size: 0.6rem;
              width: 60px;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }

      .content {
        strong {
          font-size: 0.9rem;
        }

        span {
          font-size: 0.7rem;
        }
      }
    }
  }
`;
