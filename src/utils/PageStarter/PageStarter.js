import React from 'react';
import './PageStarter.css';
import { Link } from 'react-router-dom';

function PageStarter() {
    return (
        <div>
            <div className='page-starter-page-starter'>
                <div className='page-starter-div-texto'>
                    <h1>SEJA BEM VINDO!</h1>
                </div>
                <Link id='page-starter-link-text' to="/home">
                    <div className='page-starter-container-bottom'>
                        Acessar
                    </div>
                </Link>
                <h5>Desenvolvido em ReactJS com integração ao GitHub</h5>
            </div>
        </div>
    );
}

export default PageStarter;
