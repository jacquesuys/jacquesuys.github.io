import { createContext } from "react";
import { productServices } from "./initial-state";

const Context = createContext({
  productService: productServices,
  setProductService: (ps) => {},
});

export default Context;
