import React from 'react';
import Header from '../components/Header';
import InptImage from '../components/InptImage';
import Sidebar from '../components/Sidebar';

const Home = () => {
    return (
        <div >
            <div >
                <div  style={{display:"right"}} ><Header /></div>
                <div ><div  > <InptImage /></div> </div>
            </div>
        </div>

    );
};

export default Home;