import React from 'react'
import Meter from './Meter'
import verifiedIcon from '../assets/Verified.svg'
import likeIcon from '../assets/Heart.svg'
import scoreChart from '../assets/score-chart.svg'
import "../Bscore.css"

export default function BScore() {
    return (
        <section className="b-score-sec md:max-w-[340px] m-mobile:rounded-xl">

            <div className="score-meter-main">
                <div className="meter-container centered-text"><Meter /></div>

                <div className="meter-info centered-text">
                    <p className='text-xs' style={{ color: "#439B6A" }}>+4.2%</p>
                    <p className='text-4xl' style={{ color: "#26458C", fontWeight: 600 }}>850</p>
                    <p className='text-xs font-light' style={{ color: "#808080", marginTop: "0.5rem" }}>B-Score</p>
                </div>
            </div>

            <div className="merchant centered-text">
                <div className="merchant-name">
                    <p className='tracking-wide'>Johnathan Enterprises</p>
                    <img className='verified-icon pointer' title='Verified Business' src={verifiedIcon} alt="Verified" />
                </div>
                <p className='merchant-owner text-light'>John Smith</p>
                <p className='merchant-contact text-light'>+91 XXXX XX XXXX</p>

                <div className="support space-x-1">
                    <img className='like-icon' src={likeIcon} alt="Like" />
                    <p className='support-count'>53 Businesses support them</p>
                </div>
            </div>

            <div className="bscore-chart centered-text">
                <p className='chart-heading text-light'>B-score growth chart</p>
                <img className='score-chart pointer' src={scoreChart} alt="BScore Chart" />
            </div>

        </section>
    )
}
