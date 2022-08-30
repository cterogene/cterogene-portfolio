import './Portfolio.scss'
import React from 'react'
import Card from '../Portfolio/Card'

const Portfolio = () =>{
    return(
        <>
            <section className='portfolio' id = 'portfolio'>
                <div className='container'>
                    <div className='heading text-center'>
                        <h4>VISIT MY PORTFOLIO</h4>
                        <h1> My Portfolio</h1>
                    </div>

                    <div className='content grid'>

                        <Card />
                    </div>
                </div>
            
            </section>
        </>
    )
}
export default Portfolio