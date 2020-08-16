import React, { Component } from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';




class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			transactions : [],
			description : '',
			amount: ''
			}
		}

	addTransaction = add => {

		const transactions = [...this.state.transactions];

		const transaction = {
			// calculator money react; +new Date returns number, withought + - object
			id: `cmr${(+new Date).toString(16)}`,
			description : this.state.description,
			amount: this.state.amount,
			add
		}

		transactions.push(transaction);

		this.setState ({
			transactions,
			amount: '',
			description: ''
		});

		
	}

	addAmount = e => {
		this.setState({amount: e.target.value})
	}

	addDescription = e => {
		this.setState({description: e.target.value})
	}

  render () {
		return (
			<React.Fragment>
				<header>
					<h1>Wallet</h1>
					<h2>Expences</h2>
				</header>
				<main>
					<div className="container">
							<Total/>
							<History 
								transactions={this.state.transactions}
								/>
							<Operation 
								addTransaction = {this.addTransaction}
								addAmount = {this.addAmount}
								addDescription = {this.addDescription}
								description={this.state.description}
								amount={this.state.amount}
							 />

					</div>
				</main>
			</React.Fragment>
		);
	} 
}

export default App;
