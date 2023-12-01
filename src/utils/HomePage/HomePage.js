import React from 'react';
import axios from 'axios';
import './HomePage.css'
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

function HomePage() {
    const [usePersonGitHub, setPersonGitHub] = useState([]);

    const getPersonGitHub = async () => {
        axios.get("https://api.github.com/users/RhyanSPisoni")
            .then((res) => setPersonGitHub(res.data));
    }

    useEffect(() => {
        getPersonGitHub();
    }, []);

    return (
        <>
            <div className='cont-textos'>
                <h2>Portifólios disponiveis:</h2>

            </div>
            <div className='person-info'>
                <div className='person-info-div'>
                    <img src={usePersonGitHub.avatar_url} alt={usePersonGitHub.avatar_url} />
                    <div>
                        <h2>{usePersonGitHub.name}</h2>
                        <Link id='link-port' to={"portfolio"}>
                            <div className='cont-port'>
                                <h3>Acessar Portifólio</h3>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage