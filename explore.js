import React from 'react'
import Data from '../src/Data'
import './explor.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
function Explore() {
    const blogitem = Data.map((item)=>{
        return(
            <div className='col-md-4'>
                <div className='box'>
                <img src={item.img} />
                <h5>{item.title}</h5>
                <span>{item.time}</span>
                <h6>{item.price}</h6>

                </div>
                <button className='buttonorder'>order now</button>

            </div>
        )
    })
        
  return (
    <section>
        <div className='blogs'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 col-lg-12'>
                        <h2>Explore Our Foods <FontAwesomeIcon icon={faStar} /></h2>
                        <p>Les meilleures plats de la semaine de cette semaine</p>

                    </div>
                </div>
                <div className='row'>
                    {blogitem}

                </div>
                <div>
                    
                </div>

            </div>

        </div>
    </section>
  )
}

export default Explore
