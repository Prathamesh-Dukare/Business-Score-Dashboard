import React from 'react'
import BalanceCard from './BalanceCard'

export default function BDetails() {
    return (
        <section className="b-details mx-auto max-w-[550px] my-5">
            <div className="business-info border m-mobile:rounded-xl max-w-full mx-auto border-bg-light">
                <table className='font-light'>
                    <tr>
                        <td className='text-light-text'>Type of Business</td>
                        <td>Private Limited</td>
                    </tr>
                    <tr>
                        <td className='text-light-text'>Total Filings Done</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td className='text-light-text'>GST No.</td>
                        <td>XXXXXXXXXXXXXXXX</td>
                    </tr>
                    <tr>
                        <td className='text-light-text'>GST Registered</td>
                        <td>Mar 5th 2019 </td>
                    </tr>
                    <tr>
                        <td className='text-light-text'>Joined B-score</td>
                        <td>Feb 12th 2022 </td>
                    </tr>
                    <tr>
                        <td className='text-light-text'>E-mail</td>
                        <td>johnsmith@redmail.in</td>
                    </tr>
                </table>
            </div>

            <div className="balance-cards flex flex-wrap justify-center gap-5 mx-auto my-5 max-w-full">
                <BalanceCard amount="2.75L" info="Avg Balance" condition="Monthly in INR" />
                <BalanceCard amount="8.38L" info="Avg Balance" condition="Quaterly in INR" />
                <BalanceCard amount="18/month" info="Transsactions" condition="worth 50K+" />
            </div>

            <div className="pnl-stats flex flex-wrap justify-between bg-bg-dark px-3 py-3 rounded-sm">
                <div className='text-center flex flex-col gap-2'>
                    <h2 className='font-semibold text-lg'>22.7L</h2>
                    <p className='text-light-text text-xs'>Gross Income</p>
                </div>
                <div className='text-center flex flex-col gap-2'>
                    <h2 className='font-semibold text-lg'>19.3L</h2>
                    <p className='text-light-text text-xs'>Gross Income</p>
                </div>
                <div className='text-center flex flex-col gap-2'>
                    <h2 className='font-semibold text-lg text-[#f9595b]'>3.5L</h2>
                    <p className='text-light-text text-xs'>Expenditures</p>
                </div>
                <div className='text-center flex flex-col gap-2'>
                    <h2 className='font-semibold text-lg text-[#439B6A]'>19.2L</h2>
                    <p className='text-light-text text-xs'>Gross Profit</p>
                </div>
            </div>

            <div className="customer-stats"></div>

            <div className="taxes-stats"></div>
        </section>
    )
}
