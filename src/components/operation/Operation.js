import React from 'react'

const Operation = ({addTransaction, addDescription, addAmount, description, amount}) => {
    return (
        <section className="operation">
                <h3>New operation</h3>
                <form id="form">
                    <label>
                        <input
                            type="text"
                            className="operation__fields operation__name" 
                            placeholder="Name of the operation"
                            onChange={addDescription}
                            value={description}/>
                    </label>
                    <label>
                        <input
                            type="number"
                            className="operation__fields operation__amount" 
                            placeholder="Enter the amount of money"
                            onChange={addAmount}
                            value={amount}/>
                    </label>
                    <div className="operation__btns">
                        <button
                            onClick={()=> addTransaction(false)}
                            type="button"
                            className="operation__btn operation__btn-subtract">
                            OUTCOME
                        </button>
                        <button
                            onClick={()=> addTransaction(true)}
                            type="button"
                            className="operation__btn operation__btn-add">
                            INCOME
                        </button>
                    </div>
                    </form>
            </section>
    )
}

export default Operation;
