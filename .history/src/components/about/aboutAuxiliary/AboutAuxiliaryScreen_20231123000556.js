import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import old_lady from '../../../assets/about/old_lady.png';
import './AboutAuxiliaryStyling.css';
import straightlinereadmore from '../../../assets/about/straightlinereadmore.png'

function AboutAuxiliaryScreen() {
  return (
    <div className='mt-5' id='aboutcontainer'>
      <div>
        <div className='container-sm'>
          <div className='row g-xs-4'>
            <div className='col-lg-6'>
              <h2 className='mb-4 text-#000FB0' id='welcometoucth'>Welcome To UCTH</h2>
              <section>
                <p>
                The University of Calabar Teaching Hospital came into existence in 1979 following the need for a 
                Tertiary Health Institution that will render Clinical Services at a level that meets the requirements for the 
                training of medical students of the College of Medical Sciences of the University of Calabar, resident Doctors for the different 
                Post Graduates as well as other healthcare providers in different specialties of Medicine and it's Allied Professions.
                </p>
                <p className='my-4'>
                The Hospital took over the facilities of the then St. Margaret's Hospital, Calabar, 
                which was the first Public Hospital in Nigeria, established in 1897. 
                The facilities of the Maternity Annex of St. Margaret's Hospital were also taken over by the Hospital.
                </p>
                <p>
                The University of Calabar Teaching Hospital is built on the outstanding 
                reputation of the founding fathers of St. Margaret's Hospital, who came in from the London 
                School of Hygiene and Tropical Medicine. It is worthy of note that the filarial infection 
                (Loa-loa) was first described as "Calabar Swelling" in the then St. Margaret's Hospital.
                </p>
                <button className='btn' id='readmorebutton'>
                  <span>
                    <img src={straightlinereadmore} className='img-fluid'/>
                  </span>
                  <span  className='ms-5' id='readmoretext'>
                    READ MORE
                  </span>
                </button>
                <a href='#readmore' className='btn'>
                  <div className='justify-content-center align-item-center'>
                  </div>
                </a>
              </section>
            </div>
            <div className='col-lg-6'>
              <img src={old_lady} className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutAuxiliaryScreen