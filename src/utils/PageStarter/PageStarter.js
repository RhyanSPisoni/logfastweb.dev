import React from 'react';
import '../../App.css';
import './PageStarter.css';
import { Link } from 'react-router-dom';

function PageStarter() {
    return (
        <div className='page-starter'>
            <div className='div-texto'>
                <h1>SEJA BEM VINDO</h1>
            </div>
            <Link id='link-text' to="/home">
                <div className='container-bottom'>
                    <h2>Acessar</h2>
                </div>
            </Link>
        </div>
    );
}

export default PageStarter;
