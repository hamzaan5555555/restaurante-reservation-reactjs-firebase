import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight  } from '@fortawesome/free-solid-svg-icons'
import online from './assets/tajin.jpeg'
import './pagee.css'
function Pagee() {
  return (
    <section className='services'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-12 col-md-12'>
                <h2 className='our'>our services</h2>
                <p>Un menu Ftour aux saveurs marocains et internationals au restaurant La Table du Marché. La Table du Marché vous propose un large buffet de gourmandises pour rompre le jeûne.
                                    Une table d'exception. Cadre raffiné et élégant.</p>

            </div>

        </div>
        {/* <div className='row'>
            {item}

        </div> */}
        <div className='row last'>
          <div className='col-md-6'>
            <h3>Un établissement à l’esprit familial, qui sert une cuisine inventive de saison à base de produits du terroir.</h3>
            <p>Il s’agit d’une table incontournable et d’une véritable institution gastronomique de Marrakech.</p>
            <ul>
              <li>restaurant classique .</li>
              <li>La qualité des services .</li>
              <li>livraison a tout le maroc .</li>
              <li>differents food .</li>
            </ul>
            <button href="/about">Reserver Une Table  <FontAwesomeIcon icon={faArrowRight}/></button>
          </div>
          <div className='col-md-6'>
            <img src={online} title='online world' />
          </div>
        </div>





    </div>

</section>
  )
}

export default Pagee
