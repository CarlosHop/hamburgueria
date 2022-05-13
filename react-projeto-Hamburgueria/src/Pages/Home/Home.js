import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import MainHome from '../../Components/MainHome/MainHome';
import Footer from '../../Components/Footer/Footer';
import "./Home.scss";

const Home = () => {
    return (
        <div>
            <Navbar />
            <MainHome />
            <Footer />
        </div>
    );
}

export default Home;
