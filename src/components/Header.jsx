import React from 'react'
import arrowImg from '../assets/arrow.png'
import tataLogo from '../assets/tata.svg'
import searchIcon from '../assets/search.svg'

export default function Header() {
    return (
        <section className='header  '>

            <div className='header-nav flex justify-between items-center'>
                <div className="navigate flex items-center space-x-3">
                    <img className="back-arrow w-3 hover:cursor-pointer" src={arrowImg} alt="Back" />
                    <p className='text-lg hidden s-mobile:block'>Search Results</p>
                </div>

                <div className="company flex items-center space-x-3 hover:cursor-pointer">
                    <p>TATA Capital Limited</p>
                    <img className='rounded-full w-11' src={tataLogo} alt="Tata logo" />
                </div>
            </div>

            <div className="search flex bg-bg-light p-3 space-x-3 my-2 md:my-4 rounded-md">
                <img className='w-6' src={searchIcon} alt="Search icon" />
                <input className='bg-bg-light w-4/5 outline-none' type="text" placeholder='8824030' />
            </div>
        </section>
    )
}
