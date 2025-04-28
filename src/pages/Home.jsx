import React from 'react'

const Home = () => {
  return (
    <div>
        <div>
            <img src="src/assets/herobar1.svg"/>
        </div>
        <div className='box-box'>
          <div className="box-1"><p className='textBg1'>NEW!</p>
            <h2 className='textBg'>DAILY FRESHNESS</h2>
            <img className='menuPics' src='src/assets/souffle.png'/>
            <p className='textBg'>'Souffle Pancake' Mochi</p>
            <button className='treatbtn'>View Treat</button>
          </div>
          <div className="box-2">
            <h2 className='textBg'>MOCHI MUST-HAVES</h2>
            <div className='mustHaves'>
                <div className='item'>
                  <img className='menuPics' src='src/assets/clouds.png'/>
                  <p className='textBg'>'Floaty Bites'</p>
                  <h2 className='textBg1'>Icecream</h2>
                  <button className='treatbtn'>View Treat</button>
                </div>

                <div className='item'>
                  <img className='menuPics' src='src/assets/matchastrawbery.png'/>
                  <p className='textBg'>'Strawberry Bloom'</p>
                  <h2 className='textBg1'>Donuts</h2>
                  <button className='treatbtn'>View Treat</button>
                </div>

                <div className='item'>
                  <img className='menuPics' src='src/assets/lychee.png'/>
                  <p className='textBg'>'Lychee Lullaby'</p>
                  <h2 className='textBg1'>Bubble Tea</h2>
                  <button className='treatbtn'>View Treat</button>
                </div>
            </div>
          </div>
        </div>
       
    </div>
  )
}

export default Home