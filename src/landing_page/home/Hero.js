import React from 'react'

function Hero() {
  return (
   <div className='container p-5 mb-5'>
    <div className='row text-center'>
        <img className='mb-5' src='media/images/homeHero.png' alt='Hero Image' />
        
        <h1 className='mt-5'>Invest in everything</h1>
        <p> Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        <button className='btn btn-primary rounded-3 p-3 text-white fs-5 mb-5' style={{width:"25%",margin:"0 auto"}}>Signup Now</button>
        </div>
   </div>
  )
}

export default Hero