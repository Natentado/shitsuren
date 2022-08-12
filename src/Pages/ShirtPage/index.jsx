import { useParams } from "react-router-dom";
import { ShirtContainer } from "./style";

function ShirtPage() {
  const params = useParams();
  console.log(params.id);

  return <ShirtContainer></ShirtContainer>;
}

export default ShirtPage;
