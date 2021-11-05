import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as AuthSession from "expo-auth-session";
import { api } from "../services/api";

const CLIENT_ID = `aa00917710b12a6e2ca4`;
const SCOPE = `read:user`;
const USER_STORAGE = `@nlwheat:user`;
const TOKEN_STORAGE = `@nlwheat:token`;
type User = {
  id: string;
  avatar_url: string;
  name: string;
  login: string;
};
type AuthContextData = {
  user: User | null;
  isSigning: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};
type AuthProvider = {
  children: React.ReactNode;
};

type AuthResponse = {
  token: string;
  user: User;
};
type AuthorizationResponse = {
  params: {
    code?: string;
    error?: string;
  };

  type?: string;
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProvider) {
  const [isSigning, setisSigning] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  async function signIn() {
    try {
      setisSigning(true);
      const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=${SCOPE}`;
      const authSessionResponse = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;
      //Verifica se retorno tem sucesso e não deu access denied,
      //>> ai o fluxo segue

      if (
        authSessionResponse.type === "success" &&
        authSessionResponse.params.error !== "access_denied"
      ) {
        const authResponse = await api.post("authenticate", {
          code: authSessionResponse.params.code,
        });
        const { user, token } = authResponse.data as AuthResponse;
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        await AsyncStorage.setItem(USER_STORAGE, JSON.stringify(user));
        await AsyncStorage.setItem(USER_STORAGE, token);

        console.log(authResponse.data);
        setUser(user);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisSigning(false);
    }
  }

  async function signOut() {
    setUser(null);
    await AsyncStorage.getItem(USER_STORAGE);
    await AsyncStorage.getItem(TOKEN_STORAGE);
    // if (tokenStorage && userStorage) {
    //   const userStorage = await AsyncStorage.removeItem(USER_STORAGE);
    //   const tokenStorage = await AsyncStorage.removeItem(TOKEN_STORAGE);
    // }
  }

  useEffect(() => {
    async function loadUserStorageData() {
      const userStorage = await AsyncStorage.getItem(USER_STORAGE);
      const tokenStorage = await AsyncStorage.getItem(TOKEN_STORAGE);
      if (userStorage && tokenStorage) {
        api.defaults.headers.common["Authorization"] = `Bearer ${tokenStorage}`;
        setUser(JSON.parse(userStorage));
        setisSigning(true);
      }

      loadUserStorageData();
    }
  });
  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user,
        isSigning,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
export { AuthProvider, useAuth };
