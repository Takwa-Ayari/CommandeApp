/* eslint-disable react/prop-types */
import { postLogin as login } from './../apis/user.api';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
function AuthProvider({ children }) {
  const initialUser = useLoaderData();

  const [user, setUser] = useState(initialUser);

  async function signin(credentials) {
    const newUser = await login(credentials);

    setUser(newUser);
  }
//   async function logout() {
//     await signout();
//     setUser(null);
//   }
  return (
    <AuthContext.Provider value={{
      user,
      signin,
    //  logout,
    }}
    >
      {children}
    </AuthContext.Provider>
  );

}

export default AuthProvider;