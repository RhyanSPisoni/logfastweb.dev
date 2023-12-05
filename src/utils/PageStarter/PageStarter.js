import React from 'react';
import './PageStarter.css';
import { Link } from 'react-router-dom';

function PageStarter() {
    return (
        <div className='page-starter-page-starter'>
            <h1>SEJA BEM VINDO!</h1>
            <Link className='cont-div-test btn-default' to={"home"}>
                <h3>
                    Acessar
                </h3>
            </Link>
            <h5>Desenvolvido em ReactJS com integração ao GitHub - versão: 1.0</h5>
        </div >
    );
}

export default PageStarter;
