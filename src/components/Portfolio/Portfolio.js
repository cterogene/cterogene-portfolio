import './Portfolio.scss'
import React from 'react'
import Card from '../Portfolio/Card'
import Portfolio_data from './Portfolio_data'

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
                        {Portfolio_data.map((value, index) => {
                             return <Card key ={index} category={value.category} title={value.title} image={value.image} />
                        })}

                        
                    </div>
                </div>
            
            </section>
        </>
    )
}
export default Portfolio