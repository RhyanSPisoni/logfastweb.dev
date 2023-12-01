import React from 'react';
import './HeaderMain.css';
import imgLogin from '../../img/user.png';
import { Link } from 'react-router-dom';

function HeaderMain() {
    const imgLoginAlt = 'https://via.placeholder.com/40';

    return (
        <div>
            <div className='container'>
                <header>
                    <div className='container-left'>
                        <span id='HeaderHome'><Link id='LinkRoutes' to="/">HOME</Link></span>
                        <span><Link id='LinkRoutes' to="https://github.com/rhyanspisoni">PROJETOS</Link></span>
                        <span><Link id='LinkRoutes' to="https://www.linkedin.com/in/rhyan-de-souza-pisoni/">CONTATO</Link></span>
                    </div>
                    <div className='container-right'>
                        <span>
                            <Link id='LinkRoutes' to="/">LOGFAST DEV</Link>
                        </span>
                        <img src={imgLogin} alt={imgLoginAlt} />
                    </div>
                </header>
            </div>
        </div>
    );
}

export default HeaderMain;
