import React from 'react';

const Header = ({routes, setRoute}) => {
  return (
    <nav>
      {routes.map((route, index) => (
        <button 
          key={index}
          onClick={() => setRoute(route)}>
			  {route}
		</button>
      ))}
    </nav>
  );
}

export default Header;