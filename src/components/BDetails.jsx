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

            <div className="pnl-stats flex flex-wrap justify-between m-mobile:rounded-xl bg-bg-dark px-3 py-3 rounded-sm">
                <div className='text-center flex flex-col gap-2'>
                    <h2 className='font-semibold text-xl'>22.7L</h2>
                    <p className='text-light-text text-[14px]'>Gross Income</p>
                </div>
                <div className='text-center flex flex-col gap-2'>
                    <h2 className='font-semibold text-xl'>19.3L</h2>
                    <p className='text-light-text text-[14px]'>Gross Income</p>
                </div>
                <div className='text-center flex flex-col gap-2'>
                    <h2 className='font-semibold text-xl text-[#f9595b]'>3.5L</h2>
                    <p className='text-light-text text-[14px]'>Expenditures</p>
                </div>
                <div className='text-center flex flex-col gap-2'>
                    <h2 className='font-semibold text-xl text-[#439B6A]'>19.2L</h2>
                    <p className='text-light-text text-[14px]'>Gross Profit</p>
                </div>
            </div>

            <div className="customer-stats flex text-center flex-col items-center my-3 m-mobile:flex-row m-mobile:space-y-0 gap-3">
                <div className="stat-card border border-bg-light flex flex-1 justify-center text-[14px] text-light-text px-5 py-3 gap-8 rounded-lg">
                    <div>
                        <h2 className='font-semibold text-xl text-white mb-1'>1352</h2>
                        <span>Customers</span> <br />
                        <span>Served</span>
                    </div>
                    <div>
                        <h2 className='font-semibold text-xl text-white mb-1'>12</h2>
                        <span>Recurring</span><br />
                        <span>Transactions</span>
                    </div>
                </div>
                <div className="stat-card border border-bg-light flex flex-1 justify-center text-[14px] text-light-text px-5 py-3 gap-8 rounded-lg">
                    <div>
                        <h2 className='font-semibold text-xl text-white mb-1'>2</h2>
                        <span>People</span> <br />
                        <span>Employed</span>
                    </div>
                    <div>
                        <h2 className='font-semibold text-xl text-white mb-1'>2.4L/yr</h2>
                        <span>Recurring</span><br />
                        <span>Transactions</span>
                    </div>
                </div>

            </div>

            <div className="taxes-stats bg-bg-dark m-mobile:rounded-xl">
                <table className='py-5'>
                    <tr>
                        <td className=''>Disciplinary Filing of TDS</td>
                        <td>6</td>
                    </tr>
                    <tr>
                        <td className=''>Total Value of Tax Filing</td>
                        <td>9</td>
                    </tr>
                    <tr>
                        <td className=''>Total TDS Deducted</td>
                        <td>₹ 75,692/-</td>
                    </tr>

                </table>

                <div className="credit-score text-center bg-[#00000026] space-y-3 px-3 py-5">
                    <h2 className='text-[#FFDD65] font-semibold text-xl'>822</h2>
                    <p className='text-light-text text-[14px]'>Credit Score (Of Business Owner)</p>
                </div>
            </div>
        </section>
    )
}
