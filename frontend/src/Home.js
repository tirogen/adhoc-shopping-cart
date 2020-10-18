import React from 'react';
import logo from './logo.svg';
import scan from './scan.png';
import { useHistory } from 'react-router-dom';
import './App.css';

function Home() {
	const history = useHistory();

	return (
		<div className="App">
			<img src={logo} className="App-logo" alt="logo" />
			<img
				src={scan}
				className="scan-button"
				alt="scan"
				onClick={() => history.push('/scan')}
			/>
		</div>
	);
}

export default Home;
