import React from 'react'

export default function BalanceCard(props) {
    const { amount, info, condition } = props
    return (
        <div className='balance-card bg-card-bg rounded-xl inline-block text-center p-4 space-y-3 w-36 '>
            <h2 className='font-semibold text-xl'>{amount}</h2>
            <div className='text-light-text text-sm'>
                <p>{info}</p>
                <p>({condition})</p>
            </div>
        </div>
    )
}
