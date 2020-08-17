import React, { Component } from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';




class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			transactions : JSON.parse(localStorage.getItem('calcMoney1')) || [],
			description : '',
			amount: '',
			totalIncome: 0,
			totalExpences: 0,
			balance: 0,
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
			description: '',
		}, () =>{
			this.getBalance();
			this.addStorage();
		});

	}

	addAmount = e => {
		this.setState({amount: parseFloat(e.target.value)})
	}

	addDescription = e => {
		this.setState({description: e.target.value})
	}

	getIncome () {
		return this.state.transactions
		.filter(item=>item.add)
		.reduce((acc,item)=>acc+item.amount, 0);
	}

	getExpences () {
		return this.state.transactions
		.filter(item=>!item.add)
		.reduce((acc,item)=>acc+item.amount, 0);
	}

	getBalance () {
		const totalIncome = this.getIncome();
		const totalExpences = this.getExpences();

		const balance = totalIncome - totalExpences;
		this.setState({
			totalIncome,
			totalExpences,
			balance,
		})

	}

	addStorage () {
		localStorage.setItem('calcMoney', JSON.stringify(this.state.transactions))
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
							<Total
								totalIncome={this.state.totalIncome}
								totalExpences={this.state.totalExpences}
								balance={this.state.balance}/>
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
