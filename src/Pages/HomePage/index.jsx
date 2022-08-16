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
  ClothesContainer,
  HellGateImg,
  HellGateContainer,
  ChainsLine,
} from "./style";

import { FaInstagram, FaCopyright } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import Typewritter from "typewriter-effect";
import { useContext } from "react";
import { PeitasContext } from "../../contexts/Peitas";
import { Link } from "react-router-dom";
import OrderBy from "../../components/OrderBy";

function HomePage() {
  const { peitas } = useContext(PeitasContext);

  return (
    <HomeContainer>
      <HeaderHome>
        <LogoHome></LogoHome>
        <ClothesCategories>
          <li>Produtos</li>
          <li>Galeria</li>
          <li>Politica/Contato</li>
        </ClothesCategories>
        <FiShoppingCart />
      </HeaderHome>
      <HellGateContainer>
        <HellGateImg></HellGateImg>
      </HellGateContainer>
      <ChainsLine />
      <Main>
        <h2>
          Ordenar por: <OrderBy />
        </h2>
        {peitas && (
          <ClothesContainer>
            {peitas.map((peita, index) => {
              return (
                <Link to={`/shirt/${peita.id}`} key={index}>
                  <img src={peita.img} alt="foto da camiseta"></img>
                </Link>
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
  );
}

export default HomePage;
