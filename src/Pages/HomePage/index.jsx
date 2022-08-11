import {
  Footer,
  FooterLeft,
  FooterMiddle,
  FooterRight,
  HomeContainer,
  HeaderHome,
  LogoHome,
  Main,
  ClothesCategories,
  Teste,
  Lamuerte,
  ClothesContainer,
} from "./style";

import { FaInstagram, FaCopyright } from "react-icons/fa";

import Typewritter from "typewriter-effect";
import { useContext } from "react";
import { PeitasContext } from "../../contexts/Peitas";

function HomePage() {
  const { peitas } = useContext(PeitasContext);

  const containerShirt = peitas.length <= 3 ? "0vh" : peitas.length - 1 + "0vh";

  return (
    <Teste>
      <Lamuerte></Lamuerte>
      <HomeContainer>
        <HeaderHome>
          <LogoHome></LogoHome>
        </HeaderHome>
        <Main>
          <ClothesCategories>
            <ul>
              <li>Produtos</li>
              <li>Galeria</li>
            </ul>
          </ClothesCategories>
          {peitas && (
            <ClothesContainer containerShirt={containerShirt}>
              {peitas.map((peita, index) => {
                return (
                  <img key={index} src={peita.img} alt="foto da camiseta"></img>
                );
              })}
            </ClothesContainer>
          )}
        </Main>
        <Footer>
          <FooterLeft>
            <Typewritter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Wish you could see...")
                  .pauseFor(600)
                  .deleteAll()
                  .typeString("...what i see.")
                  .pauseFor(1500)
                  .start();
              }}
            />
          </FooterLeft>
          <FooterMiddle>
            <FaCopyright></FaCopyright>
            <p>Shitsuren 2022</p>
          </FooterMiddle>
          <FooterRight>
            <a
              target="_blank"
              href="https://www.instagram.com/shitsurenwrld/"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </FooterRight>
        </Footer>
      </HomeContainer>
    </Teste>
  );
}

export default HomePage;
