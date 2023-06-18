import React from 'react'
import './number.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faHamburger } from '@fortawesome/free-solid-svg-icons'
import { faUserTie, faTable } from '@fortawesome/free-solid-svg-icons'
import CountUp from "react-countup"


function Numbers() {
  return (
    <section className='numbers'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'>
                <h2>12+</h2>
                    <h6>FOOD <FontAwesomeIcon icon={faHamburger} /></h6>
                </div>
                <div className='col-md-3'>
                    <h2>12+</h2>
                    <h6>CHEFS <FontAwesomeIcon icon={faUserTie} /></h6>
                </div>
                <div className='col-md-3'>
                    <h2>3+</h2>
                    <h6>RESTAURANTS <FontAwesomeIcon icon={faUtensils} /></h6>
                </div>
                <div className='col-md-3'>
                    <h2>90+</h2>
                    <h6>TABLES <FontAwesomeIcon icon={faTable} /> </h6>
                </div>

            </div>
        </div>
    </section>
    
  )
}

export default Numbers
