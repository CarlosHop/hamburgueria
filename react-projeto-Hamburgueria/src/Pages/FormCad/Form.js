import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import FormDoor from '../../Components/FormDoor/formdoor';
import Footer from '../../Components/Footer/Footer';
import './Form.scss';

const Form = () => {
    return(
        <div className='back'>
            <Navbar/>
            <FormDoor/>           
            <Footer />
        </div>
    );
}

export default Form;