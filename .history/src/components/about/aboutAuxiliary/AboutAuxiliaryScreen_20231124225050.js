import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import old_lady from '../../../assets/about/old_lady.png';
import './AboutAuxiliaryStyling.css';
import straightlinereadmore from '../../../assets/about/straightlinereadmore.png';
import clinical_image from '../../../assets/about/clinical_image.png';
import training_image from '../../../assets/about/training_image.png';
import research_image from '../../../assets/about/research_image.png';


function AboutAuxiliaryScreen() {
  return (
    <div>
      <div className='d-flex flex-wrap align-items-center justify-content-lg-between justify-content-center px-lg-5 px-4 mt-4' id='welcomecontainer'>
        <div className='col-lg-6 col-12'>
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
            <button className='btn d-flex' id='readmorebutton'>
              <span>
                <img src={straightlinereadmore} className='img-fluid d-none d-md-inline'/>
              </span>
              <span  className='ms-0 ms-md-5' id='readmoretext'>
                READ MORE
              </span>
            </button>
            <a href='#readmore' className='btn'>
              <div className='justify-content-center align-item-center'>
              </div>
            </a>
          </section>
        </div>
        <img src={old_lady} className='img-fluid col-lg-5 col-md-8 col-10' />
      </div>


                                {/* CLINICAL SERVICES DELIVERY */}

      <div id='clinicalServiceDelivery' className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between px-lg-5 px-4 py-5 mt-4'>
        <img src={clinical_image} className='img-fluid col-lg-5 col-md-8 col-10 mb-5 mb-lg-0'/>
        <section className='col-lg-6 col-12'>
          <h2 className='mb-4' id='clinicalservicestext'>Clinical Service Delivery</h2>
          <p>
            Clinical services are available in all specialized 
            Medical areas such as Surgery, Internal Medicine, Paediatrics, 
            Otorhinolaryngology, Anaesthesiology, Obstetrics and Gynaecology, Chemical Pathology, 
            Family Medicine, Orthopaedics/Traumatology, Dental and Maxillofacial Surgery, 
            Ophthalmology, Haematology, Accident and Emergency, Psychiatry, 
            Medical Social Works and Medical Health Records etc.
          </p>
          <p>
            Over the years, University of Calabar Teaching Hospital has 
            been in the vanguard of training and providing the much needed clinical, 
            health and human resources to our community and nation. 
            Several factors have worked together to create and sustain the present 
            atmosphere of contentment, dedication to duty and grim determination on the part of the 
            staff to carry out their services to humanity in the spirit of the founding fathers. 
            The hospital operates 24 hours service and runs out-patient clinics five (5) times a week (Mondays - Fridays). 
            Emergency services are available round the clock 24hrs a day, seven days a week.
          </p>
          <div id='clinicalreadmorebuttoncont'>
            <button className='btn' id='clinicalreadmorebutton'>
              <span>
                <img src={straightlinereadmore} className='img-fluid'/>
              </span>
              <span  className='ms-5' id='readmoretext'>
                READ MORE
              </span>
            </button>
          </div>
        </section>
      </div>


                                    {/* TRAINING AND TEACHING */}

      <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between px-5 mt-4 py-4'>
        <div className='col-12 col-lg-6 mb-4 mb-lg-0' id='welcomecontainer'>
          <h2 id='clinicalservicestext'>TRAINING AND TEACHING</h2>
          <p className='py-3'>
            The hospital offers training programmes such as training of Nurses, 
            Postgraduate Residency Training of Medical Doctors, 
            Medical Laboratory Scientists, Training of Medical students, 
            Training of Health Information Management Personnel, Post basic ORL 
            Nursing and training in other areas of Medicine and the Allied Sciences.
          </p>
          <a href='#traininglearnmore' className='btn py-2 px-3' id='traininglearnmorebutton'>Learn more</a>
        </div>
        <img src={training_image} className='img-fluid col-lg-5 col-md-8 col-10'/>
      </div>


                                      {/* RESEARCH */}
      <div className='d-flex flex-wrap align-items-center justify-content-center justify-content-lg-between'>
        <img src={research_image} className='img-fluid col-lg-5 col-md-8 col-10'/>
        <div className='col-lg-6 col-12' id='welcomecontainer'>
          <h2 id='clinicalservicestext'>
            Research
          </h2>
          <p className='py-3'>
            The hospital over the years has been involved in 
            various research endeavors with collaboration/partnership 
            with the College of Medical Sciences, University of Calabar, 
            other in-country health research institutions and international 
            organizations. We remain committed to furthering the Frontiers 
            of innovative Research and linkages, especially in Tropical diseases and Infections.
          </p>

        </div>
      </div>
    </div>

  )
}

export default AboutAuxiliaryScreen