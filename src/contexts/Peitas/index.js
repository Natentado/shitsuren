import { createContext, useState } from "react";
import PeitaFirst from "../../assets/camiseta1.png";
import PeitaSecond from "../../assets/camiseta2.png";
import PeitaThird from "../../assets/camiseta3.png";

export const PeitasContext = createContext();

export const PeitasProvider = ({ children }) => {
  const [peitas, setPeitas] = useState([
    { id: 1, name: "peita1", price: 1, img: PeitaFirst },
    { id: 2, name: "peita2", price: 2, img: PeitaSecond },
    { id: 3, name: "peita3", price: 3, img: PeitaThird },
  ]);

  return (
    <PeitasContext.Provider value={{ peitas }}>
      {children}
    </PeitasContext.Provider>
  );
};
