import './ProfileUser.css'
import './PersonUser.css'
import axios from 'axios';
import moment from 'moment'
import HeaderMain from '../HeaderMain/HeaderMain';

import { useEffect, useState } from 'react';

function ProfileUser() {
    const [useItensGitHub, setItensGitHub] = useState([]);
    const [usePersonGitHub, setPersonGitHub] = useState([]);

    const getitensGitHub = async () => {
        axios.get("https://api.github.com/users/RhyanSPisoni/repos")
            .then((res) => setItensGitHub(res.data));
    }

    const getPersonGitHub = async () => {
        axios.get("https://api.github.com/users/RhyanSPisoni")
            .then((res) => setPersonGitHub(res.data));
    }

    function ConveterData(string) {
        const formattedDate = moment(string).format('DD/MM/YYYY');
        return formattedDate;
    }

    useEffect(() => {
        getitensGitHub();
        getPersonGitHub();
    }, []);

    const ENUM_COLORS = {
        "C#": "roxo",
        "HTML": "laranja",
        "C++": "azul",
        "JavaScript": "amarelo",
        "Java": "vermelho"
    }

    const ENUM_COLORS_BORDA = {
        "C#": "roxoBorda",
        "HTML": "laranjaBorda",
        "C++": "azulBorda",
        "JavaScript": "amareloBorda",
        "Java": "vermelhoBorda"
    }

    return (
        <>
            <HeaderMain />
            <div className='cont-profile'>
                <div className='person-info'>
                    <img src={usePersonGitHub.avatar_url} alt={usePersonGitHub.avatar_url} />
                    <div>
                        <h2>Nome: {usePersonGitHub.name}</h2>
                        <h3>Bio: {usePersonGitHub.bio}</h3>
                    </div>
                </div>
                <h1>Meus Projetos do Github</h1>
                <div className='gitHub-container'>
                    {
                        useItensGitHub.length === 0 ? <p>Carregando...</p> : (
                            useItensGitHub.map((item, index) => (
                                <div key={index} className={`itemGitHub 
                            ${ENUM_COLORS_BORDA[item.language] || "default"}`} >
                                    <section className='profile-user-container-top'>
                                        <section className='profile-user-order-item'>
                                            <h2 id='id-name-git'>Nome: {item.name}</h2>
                                            <section className={`cicle ${ENUM_COLORS[item.language] || "default"}`}></section>
                                        </section>
                                        <h2 id='h2-ling'>Linguagem: {item.language}</h2>
                                        <a href={item.html_url}>Repositório</a>
                                    </section>

                                    <footer>
                                        <h5 className='date-created'>Criado: {ConveterData(item.created_at)}</h5>
                                        <h5 className='date-updated'>Atualizado: {ConveterData(item.updated_at)}</h5>
                                    </footer>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </ >

    )
}


export default ProfileUser