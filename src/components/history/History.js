import React from 'react'
import HistoryItem from './HistoryItem'

const History = ({transactions}) => {
    return (
        <section className="history">
                <h3>History of expences</h3>
                <ul className="history__list">
                    {transactions.map(item=>
                                <HistoryItem
                                    key={item.id}
                                    transaction={item}
                                    />
                    )}
                </ul>
        </section>
    )
}

export default History;