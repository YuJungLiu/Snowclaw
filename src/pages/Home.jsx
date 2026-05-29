import React from 'react';
import Smile from '../components/Smile';
import Display from '../components/Display';
import './Home.css';

const Home = () => {
    return (
        <main className="home-container">
            <Smile />
            <Display />
        </main>
    );
};

export default Home;