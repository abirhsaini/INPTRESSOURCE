import React from 'react';
import {useSelector , useDispatch}  from "react-redux"
import axios from "axios";

const Header = () => {
    const data =localStorage.getItem("data")
    console.log(data)

    return (
        <div>
            <div class="input-group" >
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <button type="button" class="btn btn-outline-primary">search</button>
            </div> 

        </div>
    );
};

export default Header;