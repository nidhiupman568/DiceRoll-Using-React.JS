// RollDice.js File 
import React, { Component } from 'react'
import './RollDice.css'
import Die from './Die'

class RollDice extends Component { 

	// Face numbers passes as default props 
	static defaultProps = { 
		sides: ['one', 'two', 'three', 
			'four', 'five', 'six'] 
	} 
	constructor(props) { 
		super(props) 

		// States 
		this.state = { 
			die1: 'one', 
			die2: 'one', 
			rolling: false
		} 
		this.roll = this.roll.bind(this) 
	} 
	roll() { 
		const { sides } = this.props 
		this.setState({ 

			// Changing state upon click 
			die1: sides[(Math.floor(Math.random() * sides.length))], 
			die2: sides[(Math.floor(Math.random() * sides.length))], 
			rolling: true
		}) 

		// Start timer of one sec when rolling start 
		setTimeout(() => { 

			// Set rolling to false again when time over 
			this.setState({ rolling: false }) 
		}, 1000) 
	} 

	render() { 
		const handleBtn = this.state.rolling ? 
			'RollDice-rolling' : ''
		const { die1, die2, rolling } = this.state 
		return ( 
			<div className='RollDice'> 
				<div className='RollDice-container'> 
					<Die face={die1} rolling={rolling} /> 
					<Die face={die2} rolling={rolling} /> 
				</div> 
				<button className={handleBtn} 
					disabled={this.state.rolling} 
					onClick={this.roll}> 
					{this.state.rolling ? 'Rolling' : 'Roll Dice!'} 
				</button> 
			</div> 
		) 
	} 
} 

export default RollDice
