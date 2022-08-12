import styled from "styled-components";
import Logo from "../../assets/Logo.png";

export const HomeContainer = styled.div`
  box-sizing: border-box;

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
  justify-content: center;

  width: 100vw;
  height: 10rem;

  padding: 10px;
`;

export const LogoHome = styled.div`
  width: 8vw;
  height: 8rem;

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
`;

export const ClothesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  gap: 3.5rem;

  width: 70vw;

  padding: 1rem;

  border-top: 1px solid black;

  a {
    height: 320px;
    width: 320px;
  }

  img {
    cursor: pointer;

    box-sizing: border-box;

    height: 325px;
    width: 325px;

    transition: 0.5s ease;

    &:hover {
      height: 350px;
      width: 350px;

      transition: 0.5s ease;
    }
  }
`;

export const ClothesCategories = styled.nav`
  display: flex;

  width: 75%;
  height: 5rem;

  margin-bottom: 1rem;

  font-size: 3.5rem;

  font-family: "Keytin", sans-serif;

  ul {
    display: flex;
    justify-content: space-around;

    width: 100%;
    height: 4rem;

    li {
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

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
  height: 2.25rem;

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
