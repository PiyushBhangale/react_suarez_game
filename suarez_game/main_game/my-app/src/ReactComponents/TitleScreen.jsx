import React, { Component } from 'react';
import '../App.css';

export default class TitleScreen extends React.Component {
	render() {
		return (
			<div>
				
				<span className="centerScreen title">Suarezbite</span>
				<span className="centerScreen pressSpace">Press Enter to start the game!</span>
			</div>
			);
	}
}