import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import HellGate from "../../assets/HellGate.jpg";
import Background from "../../assets/background.jpg";
import Chains from "../../assets/chains.png";

export const HomeContainer = styled.div`
  box-sizing: border-box;

  background: url(${Background});
  background-size: contain;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 5rem;

  max-width: 100vw;
  min-height: 100vh;

  background-color: #fafafa;
`;

export const HeaderHome = styled.div`
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 100vw;
  height: 9rem;

  padding: 1rem;

  svg {
    cursor: pointer;

    width: 7vw;
    height: 1.5rem;

    margin-top: 25px;

    &:hover {
      opacity: 0.6;
    }
  }
`;

export const LogoHome = styled.div`
  width: 6vw;
  height: 6rem;

  background: url(${Logo}) no-repeat;
  background-size: contain;
`;

export const ClothesCategories = styled.nav`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 3rem;

  width: 68vw;
  height: 100%;

  font-size: 1.5rem;
  font-family: "Exo 2", sans-serif;

  li {
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 4rem;
    width: 10rem;

    color: black;

    transition: 0.3s ease;

    &:hover {
      text-shadow: 2px 2px 5px gray;

      color: purple;

      transition: 0.3s ease;
    }
  }
`;

export const HellGateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  font-family: "EB Garamond", serif;

  font-size: 0.7rem;

  width: 60vw;
  height: 70vh;
`;

export const HellGateImg = styled.img`
  background: url(${HellGate}) no-repeat;
  background-size: cover;
  width: 60vw;
  height: 70vh;
`;

export const ChainsLine = styled.div`
  display: flex;
  justify-content: center;

  background: url(${Chains}) no-repeat;
  background-size: cover;

  width: 100%;
  height: 5.5rem;
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

  h2 {
    display: flex;
    align-items: center;

    width: 80%;
    height: 2rem;

    font-family: "Exo 2", sans-serif;
    font-weight: bolder;
    font-size: 1.2rem;
  }
`;

export const ClothesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  gap: 3rem;

  width: 65vw;

  padding: 2rem;

  a {
    height: 340px;
    width: 340px;
  }

  img {
    cursor: pointer;

    box-sizing: border-box;

    height: 340px;
    width: 340px;

    transition: 0.5s ease;

    &:hover {
      height: 350px;
      width: 350px;

      transition: 0.5s ease;
    }
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;

  min-width: 99.1vw;
  max-width: 100vw;
  height: 2.25rem;
`;

export const FooterLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: black;

  font-family: "TTVTechPrecomput", sans-serif;
  font-weight: bold;
  font-size: 1.5rem;

  width: 33.3%;
`;

export const FooterMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  width: 33.3%;

  font-family: "Keytin", sans-serif;

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
