import React, {useState} from 'react';

import './scss/main.scss';

import Map from './components/Map/Map';
import Header from './shared/Header/Header';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

const ROUTES = {
	login: (setRoute) => <Login setRoute={setRoute}/>,
	map: () => <Map/>,
	profile: () => <Profile/>,
	signup: (setRoute) => <Signup setRoute={setRoute}/>
  };
  
  function App() {
	const [route, setRoute] = useState("login");
  
	return (
	  <div className="wrapper">
		<header className="header">
		  <Header 
			routes={Object.keys(ROUTES)}
			setRoute={setRoute}
		  />
		</header>
		<section className="content">
		  {ROUTES[route](setRoute)}
		</section>
	  </div>
	);
  }
  

export default App;
