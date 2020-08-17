import React from 'react'

const Total = ({totalExpences, totalIncome, balance}) => {
    return (
        <section className="total">
                <header className="total__header">
                    <h3>Balance</h3>
                    <p className="total__balance">{balance} ₽</p>
                </header>
                <div className="total__main">
                    <div className="total__main-item total__income">
                        <h4>Incomes</h4>
                        <p className="total__money total__money-income">
                            {totalIncome}₽
                        </p>
                    </div>
                    <div className="total__main-item total__expenses">
                        <h4>Expences</h4>
                        <p className="total__money total__money-expenses">
                            {totalExpences} ₽
                        </p>
                    </div>
                </div>
            </section>

    )
}
export default Total;