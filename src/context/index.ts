import { createContext } from "react";

const Context = createContext({
  user: {},
  setUser: (u: object) => {},
});

export default Context;
