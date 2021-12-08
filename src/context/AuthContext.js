import React, {  useState } from "react";

const AuthContext = React.createContext({ //for auto-completion
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem('token');  //look out for any token 
  const [token, setToken] = useState(initialToken);  //set to token if found
  const [email, setEmail] = useState("");

  const userIsLoggedIn = !!token; //true for token not empty or else false

  const logInHandler = (token, email) => {
    setToken(token);
    //setEmail(email);
    localStorage.setItem('token', token);
    localStorage.setItem('email', email);
  }

  const logOutHandler = () => {
    setToken(null);
    //setEmail("");
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logOutHandler,
    email: email
  }

  return <AuthContext.Provider value={contextValue} >{props.children}</AuthContext.Provider>
};

export default AuthContext;

