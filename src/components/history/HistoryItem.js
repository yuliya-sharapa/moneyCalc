import React from 'react'

export default function HistoryItem({transaction, delTransaction}) {
    return (
        <li
            className={`history__item ${transaction.add ? 'history__item-plus': 'history__item-minus'}`}>{transaction.description}
                <span className="history__money">{transaction.amount} ₽</span>
                <button 
                    className="history__delete"
                    onClick={()=>delTransaction(transaction.id)}>
                x
                </button>
        </li>
    )
}


/*

<li className="history__item  history__item-minus">Paid a loan
    <span className="history__money">-10000 ₽</span>
    <button className="history__delete">x</button>
</li>

*/