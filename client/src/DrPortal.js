import React from 'react';
import { Router } from 'react-router';
import Nav from './Menu';
import { fetchPts } from './store/creators/actionCreators';


function DrPortal() {
    return (
        <Nav>
            <h3>About</h3>
            <button type= 'buttondr'link= "rcopia.com">rcopia login </button>
            <button href="rcopia.com"></button>
                
                <h3>Patient Messages</h3>
                <ul>
                    {fetchPts}
                </ul>

        </Nav>
    )
}
export default DrPortal
