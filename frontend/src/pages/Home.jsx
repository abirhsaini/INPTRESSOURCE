import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div><div style={{float:"left"}}>
            <Sidebar />
            </div>
            <div style={{float:"right"}}>
           <Header />
            </div>
        </div>
    );
};

export default Home;