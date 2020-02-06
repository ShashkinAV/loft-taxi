import React, { useState } from 'react';

const AuthContext = React.createContext({});

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    setIsLoggedIn(true);
    console.log(isLoggedIn);
  }

  const logout = () => {
    setIsLoggedIn(false);
  }

  const getContext = () => {
    return {
      isLoggedIn, 
      login, 
      logout
    }
  }

return <AuthContext.Provider value={getContext()}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }