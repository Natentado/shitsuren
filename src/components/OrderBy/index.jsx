import { OrderSelect } from "./style";

function OrderBy() {
  return (
    <OrderSelect>
      <option>Mais populares</option>
      <option>Maior preço</option>
      <option>Menor preço</option>
    </OrderSelect>
  );
}

export default OrderBy;
