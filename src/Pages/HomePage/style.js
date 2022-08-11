import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import LamuerteDance from "../../assets/lamuerte.png";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;

  box-sizing: border-box;
  background-color: #fafafa;

  max-width: 100vw;
  min-height: 100vh;
`;

export const Teste = styled.div`
  max-width: 100vw;
  height: 100%;
`;

export const Lamuerte = styled.div`
  background: url(${LamuerteDance}) no-repeat;
  background-size: contain;

  width: 350px;
  height: 350px;

  position: absolute;
  right: 5rem;
  top: 5rem;
`;

export const HeaderHome = styled.div`
  box-sizing: border-box;

  padding: 10px;

  display: flex;
  justify-content: center;
  width: 50vw;
  max-width: 100vw;
  height: 10rem;
`;

export const LogoHome = styled.div`
  width: 10vw;
  height: 10rem;

  background: url(${Logo}) no-repeat;
  background-size: contain;
`;

export const Main = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;

  width: 75vw;
  min-height: 50vh;

  img {
    box-sizing: border-box;
    cursor: pointer;
    height: 325px;
    width: 325px;

    transition: 0.6s ease-in-out;

    &:hover {
      height: 350px;
      width: 350px;

      transition: 0.6s ease-in-out, border 0s;
    }
  }
`;

export const ClothesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 3.5rem;

  padding: 1rem;

  min-width: 75vw;
  max-width: 85vw;
  min-height: calc(40vh + ${(props) => props.containerShirt});
`;

export const ClothesCategories = styled.nav`
  display: flex;

  width: 75%;
  height: 5rem;

  margin-bottom: 2rem;

  font-size: 4rem;

  font-family: "Keytin", sans-serif;
  font-weight: bold;

  ul {
    display: flex;
    justify-content: space-around;

    width: 100%;
    height: 4.5rem;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      height: 5rem;
      width: 15rem;

      border-radius: 15px;

      color: black;

      transition: 0.3s ease;

      &:hover {
        box-shadow: 0px 0px 5px 1px purple;
        text-shadow: 2px 2px 5px gray;

        transition: 0.3s ease;
      }
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;

  min-width: 99.1vw;
  max-width: 100vw;
  min-height: 2.25rem;
  max-height: 2.25rem;

  background-color: #fafafa;
`;

export const FooterLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: black;

  font-family: "TTVTechPrecomput", sans-serif;
  font-weight: bold;
  font-size: 2rem;

  width: 33.3%;
`;

export const FooterMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  font-family: "Keytin", sans-serif;

  width: 33.3%;

  svg {
    height: 1rem;
    width: 1rem;

    color: purple;
  }

  p {
    font-size: 1.5rem;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.3%;

  svg {
    width: 1.5rem;
    height: 1.5rem;

    color: purple;

    transition: 0.5s ease;

    &:hover {
      cursor: pointer;

      width: 2rem;
      height: 2rem;

      transition: 0.5s ease;
    }
  }
`;
