import React, { FC, useState } from "react";
import Me from "../function/domain/Me";
import MeRepositoryImpl from "../function/repository/MeRepository";
import MeUseCaseImpl from "../function/usecase/MeUseCase";
import MeUseCase from "../function/interface/useCase/MeUseCase";

const repository = new MeRepositoryImpl();
const useCase = new MeUseCaseImpl(repository);

type AuthContextType = {
  me: Me;
  setMe: React.Dispatch<Me>;
  useCase: MeUseCase;
};

const AuthContext = React.createContext<AuthContextType>({
  me: {
    arrowedRoles: [],
    avatar: "",
    email: "",
    emailValified: false,
    id: "",
    name: "",
  },
  setMe: () => {},
  useCase: useCase,
});

export const useAuthContext = () => React.useContext(AuthContext);

const AuthContextProvider: FC = ({ children }) => {
  const [me, setMe] = useState<Me>({
    arrowedRoles: [],
    avatar: "",
    email: "",
    emailValified: false,
    id: "",
    name: "",
  });

  return (
    <AuthContext.Provider value={{ me, setMe, useCase }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
