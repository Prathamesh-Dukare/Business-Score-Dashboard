import React from 'react'
import Meter from './Meter'
import verifiedIcon from '../assets/verified.svg'
import likeIcon from '../assets/Heart.svg'
import scoreChart from '../assets/score-chart.svg'

export default function BScore() {
    return (
        <section className="b-score-sec bg-bg-dark m-mobile:rounded-xl py-5">

            <div className="score-meter text-center items-center h-32">
                <div className="meter-container text-center m-auto"><Meter /></div>

                <div className="meter-info relative bottom-20 text-center ">
                    <p className='text-[#439B6A] text-xs'>+4.2%</p>
                    <p className='text-[#26458C] text-4xl font-semibold'>850</p>
                    <p className='text-[#808080] text-xs font-light'>B-Score</p>
                </div>

            </div>

            <div className="merchant text-center">
                <div className="merchant-name flex justify-center">
                    <p>Johnathan Enterprises</p>
                    <img className='w-6' src={verifiedIcon} alt="Verified" />
                </div>
                <p className='merchant-owner text-light-text'>John Smith</p>
                <p className='merchant-contact text-light-text'>+91 XXXX XX XXXX</p>

                <div className="support inline-block justify-center my-1 space-x-1 bg-[#ffffff0d] rounded-2xl px-2 py-1">
                    <img className='w-6 inline-block' src={likeIcon} alt="Like" />
                    <p className='inline-block font-normal'>53 Businesses support them</p>
                </div>
            </div>

            <div className="bscore-chart text-center my-5">
                <p className='text-light-text text-xl'>B-score growth chart</p>
                <img className='px-5 mx-auto' src={scoreChart} alt="BScore Chart"/>
            </div>

        </section>
    )
}
