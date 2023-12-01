import React from 'react';
import './HeaderMain.css';
import imgLogin from '../../img/user.png';
import { Link } from 'react-router-dom';

function HeaderMain() {
    const imgLoginAlt = 'https://via.placeholder.com/40';

    return (
        <div className='header-main-container'>
            <header>
                <div className='header-main-container-left'>
                    <span id='header-main-HeaderHome'><Link id='header-main-LinkRoutes' to="/">HOME</Link></span>
                    <span><Link id='header-main-LinkRoutes' to="https://github.com/rhyanspisoni">PROJETOS</Link></span>
                    <span><Link id='header-main-LinkRoutes' to="https://www.linkedin.com/in/rhyan-de-souza-pisoni/">CONTATO</Link></span>
                </div>
                <div className='header-main-container-right'>
                    <span>
                        <Link id='header-main-LinkRoutes' to="/">LOGFAST DEV</Link>
                    </span>
                    <img src={imgLogin} alt={imgLoginAlt} />
                </div>
            </header>
        </div>
    );
}

export default HeaderMain;
