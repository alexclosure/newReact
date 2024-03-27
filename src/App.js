import React from "react";
import logo from "./logo.svg";
import "./App.css";
// Реализация из мана в задании
export const App = () => {
	const header = () => {
		return React.createElement("header", { className: "App-header" }, logoImg(), p(), a(), newDate);
	};
	const logoImg = () => {
		return React.createElement("img", { src: logo, className: "App-logo", alt: "logo" });
	};
	const p = () => {
		return React.createElement("p", { className: "App-intro" }, "Edit src/App.js and save to reload.");
	};
	const a = () => {
		return React.createElement(
			"a",
			{
				className: "App-link",
				href: "https://reactjs.org",
				target: "_blank",
				rel: "noopener noreferrer",
			},
			"Learn React",
		);
	};

	const newDate = new Date().getFullYear();
	return React.createElement("div", { className: "App" }, header());

	//Реализация из моих познаний чистого HTML

	/* 	const headDiv = document.createElement("div");
	headDiv.className = "App";

	const header = document.createElement("header");
	header.className.add("App-header");
	const logoImg = document.createElement("img");
	logoImg.src = logo;
	logoImg.alt = "logo";
	logoImg.className = "App-logo";

	const p = document.createElement("p");
	p.textContent = "Edit src/App.js and save to reload.";

	const a = document.createElement("a");
	a.className.add("App-link");
  a.href = "https://reactjs.org";
	a.target = "_blank";
	a.rel = "noopener noreferrer";
	a.textContent = "Learn React";
	const newDate = new Date().getFullYear();

	header.append(logoImg, p, a);
	headDiv.append(header, new Date().getFullYear());
	document.body.append(headDiv); */

	// оригинальный код из задания

	//всё, что ниже - Декларативный стиль, т.к. тут мы указываем конкретные теги HTML, которые нам нужны
	//или же вызываем функции React, которые под капотом императивно за нас написаны, что бы мы декларативно их использовали

	/* return App(); */
	/* 		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				{new Date().getFullYear()}
			</header>
		</div> */
};
