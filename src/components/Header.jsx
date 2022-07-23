import React from 'react'
import arrowImg from '../assets/arrow.png'
import tataLogo from '../assets/tata.svg'
import searchIcon from '../assets/search.svg'

export default function Header() {
    return (
        <section className='header sm:px-0'>
            <div className='header-nav'>
                <div className="navigate space-x-3">
                    <img src={arrowImg} alt="Back" />
                    <p className='search-results s-mobile:block'>Search Results</p>
                </div>

                <div className="company space-x-3 pointer">
                    <p>TATA Capital Limited</p>
                    <img src={tataLogo} alt="Tata logo" />
                </div>
            </div>

            <div className="search space-x-3 md:my-4">
                <img src={searchIcon} alt="Search icon" />
                <input type="text" placeholder='8824030' />
            </div>
        </section>
    )
}
