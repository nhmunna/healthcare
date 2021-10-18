import React from 'react';
import doctor1 from '../../images/doctors/doctor1.jpg';
import doctor2 from '../../images/doctors/doctor2.jpg';

const Doctor = () => {

    return (
        <div id="doctor" class="container my-4">
            <h2 className="text-primary">Our Doctors</h2>
            <div class="row g-5">
                <div class="col-lg-6 p-2">
                    <img className="img-fluid" src={doctor1} alt="" />
                    <h2>PROF. DR. MD. ISMAIL HOSSAIN</h2>
                    <p>MBBS(Dhaka),  FCPS (Medicine)</p>
                </div>
                <div class="col-lg-6 p-2">
                    <img className="img-fluid" src={doctor2} alt="" />
                    <h2>PROF. MD. MUJIBUR RAHMAN</h2>
                    <p>MBBS, MD, FACP (USA), FCPS</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;