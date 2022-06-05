import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import MainHome from '../../Components/MainHome/MainHome';
import Footer from '../../Components/Footer/Footer';
//import Load from '../../Components/Loading/loading';
//import { useState, useEffect } from 'react';
import "./Home.scss";

const Home = () => {

    //const [inLoad, setInLoad] = useState([]);

    //useEffect(() => {
        //setTimeout(() => {
         //   setInLoad(true);
    //}, 3000)
        //setInLoad(false);
    //}, []);

    return (
        <div>
            <Navbar />
            <MainHome />
            <Footer />
            
        </div>
    );
}

export default Home;
