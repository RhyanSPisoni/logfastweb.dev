import React from 'react';
import axios from 'axios';
import './HomePage.css'
import { Link } from 'react-router-dom';
import cv from '../../Docs/cvrhyan.pdf';

import { useEffect, useState } from 'react';

function HomePage() {
    const [usePersonGitHub, setPersonGitHub] = useState([]);

    const getPersonGitHub = async () => {
        axios.get("https://api.github.com/users/RhyanSPisoni")
            .then((res) => setPersonGitHub(res.data));
    }

    const handleDownload = () => {

        // Criar um link para iniciar o download
        const a = document.createElement('a');
        a.href = cv;
        a.download = 'cvrdhyan.pdf'; // Nome do arquivo a ser baixado

        // Adicionar o link ao corpo do documento e clicar nele
        document.body.appendChild(a);
        a.click();

        // Remover o link depois que o download for iniciado
        document.body.removeChild(a);
    };

    useEffect(() => {
        getPersonGitHub();
    }, []);

    return (
        <div className='home-page-container'>
            <div className='cont-textos'>
                <h2>Portfólio disponivel:</h2>

            </div>
            <div className='home-page-person-info'>
                <div className='home-page-person-info-div'>
                    <img src={usePersonGitHub.avatar_url} alt={usePersonGitHub.avatar_url} />
                    <div>
                        <h2>{usePersonGitHub.name}</h2>
                        <Link id='link-port' to={"portfolio"}>
                            <div className='cont-port'>
                                <h3>Acessar Portfólio</h3>
                            </div>
                        </Link>
                        <div onClick={handleDownload} className='download-cv'>
                            <h3>Baixar Currículo</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage