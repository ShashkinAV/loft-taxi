import React from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Header } from './components/Header/Header';
import { AppRouter } from './components/AppRouter/AppRouter';
import { getAuth } from './modules/auth';


function App() {
	const auth = useSelector(getAuth, shallowEqual);

	return (
		<div className="App">
			{(auth && auth.success && JSON.parse(auth.success) === true) ?
				<Header id={'header'} /> : null
			}
			<section className="App__content">
				<AppRouter />
			</section>
		</div>
	);
}

export default App;