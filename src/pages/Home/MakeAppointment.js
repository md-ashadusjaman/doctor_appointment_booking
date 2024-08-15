import React from 'react';
import doctor from '../../assets/doctor.png';
import appointment from '../../assets/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
       <section style={{ background: `url(${appointment})`}}
       className='flex justify-center items-center'>
        <div className='flex-1 hidden lg:block'>
            <img className='mt-[-100px]'src={doctor} alt=""/>    
        </div>
        <div className='flex-1'>
            <h3 className='text-xl text-primary'>Appointment</h3>
            <h2 className= 'text-3xl'>Make an Appointment Today</h2>
            <p>ljhflkajflkafklahflkahfkhalkfjal</p>
            <PrimaryButton>Start</PrimaryButton>
        </div>
       </section>
    );
};

export default MakeAppointment;