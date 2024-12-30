import { useState } from 'react';
import { BiSolidQuoteLeft, BiSolidQuoteRight } from 'react-icons/bi';
import phrases from './phrases.json';
import {
	bg1,
	bg2,
	bg3,
	bg4,
	bg5,
	bg6,
	bg7,
	bg8,
	bg9,
	bg10,
	bg11,
	bg12,
	bg13,
	bg14,
	bg15,
} from './assets/images';
import './App.css';

const images = [
	bg1,
	bg2,
	bg3,
	bg4,
	bg5,
	bg6,
	bg7,
	bg8,
	bg9,
	bg10,
	bg11,
	bg12,
	bg13,
	bg14,
	bg15,
];

function getRandomIndex(arr) {
	return Math.floor(Math.random() * arr.length);
}

function App() {
	const [phrase, setPhrase] = useState(phrases[getRandomIndex(phrases)].phrase);

	const [bgRandom, setBgRandom] = useState(images[getRandomIndex(images)]);

	const handleClick = () => {
		setPhrase(phrases[getRandomIndex(phrases)].phrase);
		setBgRandom(images[getRandomIndex(images)]);
	};

	const bgStyle = `url('${bgRandom}')`;
	return (
		<div className="wrapper" style={{ backgroundImage: bgStyle }}>
			<div className="container">
				<h1 className="title">Galletas de la Fortuna</h1>
				<blockquote className="card">
					<div className="card__body">
						<p className="card__text">
							<BiSolidQuoteLeft className="card__quote" /> {phrase}{' '}
							<BiSolidQuoteRight className="card__quote" />
						</p>
					</div>
				</blockquote>
				<button className="btn" onClick={handleClick}>
					ver otro
				</button>
			</div>
		</div>
	);
}

export default App;
