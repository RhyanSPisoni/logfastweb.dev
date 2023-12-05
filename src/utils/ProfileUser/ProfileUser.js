import './ProfileUser.css';
import './PersonUser.css';
import './ExpPro.css';
import dbJson from '../../db-json-temp/dbExp.json';
import axios from 'axios';
import moment from 'moment';
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
        <div className='profile-user-container'>
            <HeaderMain />
            <div className='cont-profile'>

                <div className='person-info'>
                    <div className='about'>
                        <img src={usePersonGitHub.avatar_url} alt={usePersonGitHub.avatar_url} />
                        <div>
                            <h2>{dbJson.nome}</h2>
                            <h3>Bio: -{usePersonGitHub.bio}-</h3>
                        </div>
                    </div>
                    <div className='about-me'>
                        <h2>Sobre mim: <h5>{dbJson.bio}</h5></h2>
                    </div>
                </div>


                <h1>Experiência Profissional</h1>
                <div className='db-exp'>
                    {
                        dbJson === null ? <p>Carregando...</p> : (
                            dbJson.exp.map((item, index) => (
                                <div key={index} className='profile-user-db-exp-content'>
                                    <top>
                                        <h3>{item.empresa}</h3>
                                        <h3>-{item.vaga}-</h3>
                                    </top>
                                    <h3>{item.competencias.join("| ")}</h3>
                                    <footer>
                                        <h5>Inicio: {item.date_start}</h5>
                                        <h5>Fim: {item.date_end}</h5>
                                    </footer>
                                </div>
                            ))
                        )
                    }
                </div>
                <h1>Meus Projetos do Github</h1>
                <div className='gitHub-container'>
                    {
                        useItensGitHub.length === 0 ? <p>Carregando...</p> : (
                            useItensGitHub.map((item, index) => (
                                <div key={index} className={`itemGitHub ${ENUM_COLORS_BORDA[item.language] || "default"}`} >
                                    <section className='profile-user-container-top'>
                                        <section className='profile-user-order-item'>
                                            <h2 id='id-name-git'>{item.name}</h2>
                                            <section className={`cicle ${ENUM_COLORS[item.language] || "default"}`}></section>
                                        </section>
                                        <section className='git-hub-middle'>
                                            <h2 id='h2-ling'>Linguagem: {item.language}</h2>
                                            <a href={item.html_url}>Repositório</a>
                                        </section>
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
        </div>

    )
}


export default ProfileUser