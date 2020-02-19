import React from 'react';
import { Header } from './shared/Header/Header';
import { AppRouter } from './components/AppRouter/AppRouter';
import { getAuth } from './modules/auth';
import { getRegister } from './modules/register';
import { shallowEqual, useSelector } from 'react-redux';

function App() {
	const auth = useSelector(getAuth, shallowEqual);
	// eslint-disable-next-line no-unused-vars
	const register = useSelector(getRegister, shallowEqual);

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
