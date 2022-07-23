import React from 'react'

export default function BalanceCard(props) {
    const { amount, info, condition } = props
    return (
        <div className='balance-card md:p-3 md:w-30 space-y-3'>
            <h2 className='amount'>{amount}</h2>
            <div className='card-info'>
                <p>{info}</p>
                <p>({condition})</p>
            </div>
        </div>
    )
}
