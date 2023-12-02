import './ProfileUser.css'
import './PersonUser.css'
import dbJson from '../../db-json-temp/dbExp.json'
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
        <div className='profile-user-container'>
            <HeaderMain />
            <div className='cont-profile'>
                <div className='person-info'>
                    <img src={usePersonGitHub.avatar_url} alt={usePersonGitHub.avatar_url} />
                    <div>
                        <h2>{dbJson.nome} - {usePersonGitHub.name}</h2>
                        <h3>-{usePersonGitHub.bio}-</h3>
                        <h4>Sobre mim: {dbJson.bio}</h4>
                    </div>
                </div>
                <h1>Experiências Profissional</h1>
                <div className='db-exp'>
                    {
                        dbJson === null ? <p>Carregando...</p> : (
                            dbJson.exp.map((item, index) => (
                                <div key={index} className='profile-user-db-exp-content'>
                                    <top>
                                        <h3>Empresa: {item.empresa}</h3>
                                    </top>
                                    <h3>Vaga: {item.vaga}</h3>
                                    <h3>Competências: {item.competencias.join(", ")}</h3>
                                    <footer>
                                        <h3>Inicio: {item.date_start}</h3>
                                        <h3>Fim: {item.date_end}</h3>
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
        </div>

    )
}


export default ProfileUser