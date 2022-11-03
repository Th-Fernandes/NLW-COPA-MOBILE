import { createContext } from "react";

interface UserProps {
  name: string;
  avatarUrl?: string;
}

export interface AuthContextDataProps {
  user: UserProps;
  signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({ children }) {
  async function signIn() {
    console.log("funcionou!!!!!");
  }

  return (
    <AuthContext.Provider
      value={{
        signIn,
        user: {
          name: "Thiago Fernandes",
          avatarUrl: "https://github.com/th-fernandes.png",
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
