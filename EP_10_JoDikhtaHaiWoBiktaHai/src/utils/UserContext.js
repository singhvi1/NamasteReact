import { createContext } from "react";

const UserContext = createContext({
  loogedInUser: "Default user",
});

export default UserContext;
