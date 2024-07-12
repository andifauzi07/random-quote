import React from 'react';
import { useEffect, useState } from 'react';
import { FaQuoteLeft, FaTwitterSquare, FaTumblrSquare } from 'react-icons/fa';
import './App.css';

const App = () => {
	const [quotes, setQuotes] = useState([]);
	const [index, setIndex] = useState(0);
	const colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', '#472E32', '#BDBB99', '#77B1A9', '#73A857'];
	const randomColor = Math.round(Math.random() * colors.length);
	const styleComponent = {
		backgroundColor: colors[randomColor],
		color: colors[randomColor],
	};

	useEffect(() => {
		const getQuote = async () => {
			const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
			const data = await fetch(url);
			const response = await data.json();

			setQuotes(response.quotes);
		};

		getQuote();
	}, [index]);

	const handleClick = (e) => {
		e.preventDefault();

		const randomNumber = Math.round(Math.random() * 102);
		setIndex(randomNumber);
	};

	return (
		<main style={styleComponent}>
			<section id="quote-box">
				<div className="wrapper">
					<div id="text">
						<h1>
							<FaQuoteLeft />- {quotes[index]?.quote}
						</h1>
					</div>
					<div id="author">
						<h4>-{quotes[index]?.author}</h4>
					</div>
				</div>
				<div className="button-wrapper">
					<span className="icon-wrapper">
						<a
							href="twitter.com/intent/tweet"
							target="_blank"
							id="tweet-quote">
							<FaTwitterSquare
								size={30}
								color="2C3E50"
							/>
						</a>
						<a href="">
							<FaTumblrSquare
								size={30}
								color="2C3E50"
							/>
						</a>
					</span>
					<button
						id="new-quote"
						onClick={handleClick}>
						New Quote
					</button>
				</div>
			</section>
		</main>
	);
};

export default App;
