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
            .then((res) => setPersonGitHub(res.data))
            .catch(error => {
                console.log("");
            });
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
            <div className='home-page-person-info-div'>
                <img className='img-profile' src={usePersonGitHub.avatar_url} alt={usePersonGitHub.avatar_url} />
                <h2>{usePersonGitHub.name}</h2>
            </div>

            <div>
                <Link className='btn-default' to={"portfolio"}>
                    Acessar Portfólio
                </Link>
                <div onClick={handleDownload} className='btn-default'>
                    Baixar Currículo
                </div>
            </div>
        </div>
    );
}

export default HomePage