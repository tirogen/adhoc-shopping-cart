import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import close from './close.png';
import { useHistory } from 'react-router-dom';
import './App.css';
import axios from 'axios';

function Scan() {
	const [shop, setShop] = useState(null);
	const history = useHistory();

	const handleScan = async (id) => {
		if (id) {
			const { data } = await axios(`http://172.20.1.3:3000/item/${id}`);
			console.log(data);
			setShop(data);
		}
	};

	const handleError = (err) => {
		console.error(err);
	};

	return (
		<div>
			{shop !== null ? (
				<div className="dialog">
					<h2>{shop.name}</h2>
					<p>Price: {shop.price} Baht</p>
					<p>
						Discount: {shop.discount}% ({shop.finalPrice} Baht)
					</p>
					<button className="ok-button" onClick={() => history.push('/')}>
						OK
					</button>
				</div>
			) : (
				''
			)}
			<img src={close} className="close" alt="close button" onClick={() => history.push('/')} />
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
