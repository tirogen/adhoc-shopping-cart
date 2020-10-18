import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import close from './close.png';
import { useHistory } from 'react-router-dom';
import './App.css';

function Scan() {
	const [result, setResult] = useState('');
	const history = useHistory();

	const handleScan = (data) => {
		if (data) {
			setResult(data);
		}
	};

	const handleError = (err) => {
		console.error(err);
	};

	return (
		<div>
			{result !== '' ? (
				<div className="dialog">
					<h2>Heinz Ketchup</h2>
					<p>Price: 150 Baht</p>
					<p>Discount: 10% (135 Baht)</p>
					<button className="ok-button" onClick={() => history.push('/')}>
						OK
					</button>
				</div>
			) : (
				''
			)}
			<img
				src={close}
				className="close"
				alt="close button"
				onClick={() => history.push('/')}
			/>
			<QrReader
				delay={300}
				onError={handleError}
				onScan={handleScan}
				style={{ width: '100%' }}
				showViewFinder={false}
				className="qr-image-wrapper"
			/>
		</div>
	);
}

export default Scan;
