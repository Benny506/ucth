import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import old_lady from '../../../assets/about/old_lady.png'


function AboutAuxiliaryScreen() {
  return (
    <div>
        <h2>
          <div className='container-sm bg-primary'>
            <div className='row'>
              <div className='col-lg-6'>
                
              </div>
              <div className='col-lg-6'>
                <img src={old_lady} className='img-fluid' />
              </div>
            </div>
          </div>
        </h2>
    </div>
  )
}

export default AboutAuxiliaryScreen