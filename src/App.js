import React, { useState } from 'react';
import { Header } from './shared/Header/Header';
import { Map } from './components/Map';
import { Login } from './components/Login';
import { Signup } from './components/Signup';
import { Profile } from './components/Profile';

const ROUTES = {
  login: (setRoute) => <Login setRoute={setRoute}/>,
  Карта: () => <Map/>,
  Профиль: () => <Profile/>,
  Выйти: (setRoute) => <Login setRoute={setRoute}/>,
  регистрация: (setRoute) => <Signup setRoute={setRoute}/>
};

const Context = React.createContext();
export const AppProvider = Context.Provider;
export const AppConsumer = Context.Consumer;

function App() {
  const [route, setRoute] = useState("login");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    setIsLoggedIn(true);
    setRoute("Карта");
  }

  const logout = () => {
    setIsLoggedIn(false);
    setRoute("login");
  }

  return (
    <AppProvider value={{login, logout, isLoggedIn}}>
      <div className="App">
        {isLoggedIn ? <Header setRoute={setRoute}/>: <></>}
        <section className="App__content">
          {ROUTES[route](setRoute)}
        </section>
      </div>
    </AppProvider>
  );
}

export default App;
