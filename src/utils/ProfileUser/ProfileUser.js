import './ProfileUser.css';
import './PersonUser.css';
import './ExpPro.css';
import dbJson from '../../db-json-temp/dbExp.json';
import axios from 'axios';
// import moment from 'moment';
import HeaderMain from '../HeaderMain/HeaderMain';
import TableRepGitHub from './TableRepGitHub';
import { useEffect, useState } from 'react';
import CardRepGitHub from './CardRepGitHub';

function ProfileUser() {
    const [useItensGitHub, setItensGitHub] = useState([]);
    const [usePersonGitHub, setPersonGitHub] = useState([]);

    const [useBuscaItensGitHub, setBuscaItensGitHub] = useState('');
    const [useModeloExibidoGitHubEscolhido, setModeloExibidoGitHubEscolhido] = useState('');

    const lowerBuscaGitHub = useBuscaItensGitHub.toLowerCase();
    const itensGitHubFiltrados = useItensGitHub.filter(item => item.name.toLowerCase().includes(lowerBuscaGitHub));

    const UpdateLocalStorageModeloGitHub = async (string) => {
        setModeloExibidoGitHubEscolhido(string);
        localStorage.setItem('modeloExibidoGitHubEscolhido', string);
    }

    const getitensGitHub = async () => {
        axios.get("https://api.github.com/users/RhyanSPisoni/repos")
            .then((res) => setItensGitHub(res.data))
            .catch(error => {

            });
    }

    const getPersonGitHub = async () => {
        axios.get("https://api.github.com/users/RhyanSPisoni")
            .then((res) => setPersonGitHub(res.data))
            .catch(error => {

            });
    }

    useEffect(() => {
        getitensGitHub();
        getPersonGitHub();

        const modeloExibidoGitHubEscolhido = localStorage.getItem('modeloExibidoGitHubEscolhido')
        if (modeloExibidoGitHubEscolhido)
            setModeloExibidoGitHubEscolhido(modeloExibidoGitHubEscolhido);
        else
            setModeloExibidoGitHubEscolhido("table");
    }, []);

    return (
        <div className='profile-user-container'>
            <HeaderMain />
            <div className='cont-profile main'>

                <div className='person-info'>
                    <div className='about-profile'>
                        <img className='img-profile' src={usePersonGitHub.avatar_url} alt={usePersonGitHub.avatar_url} />
                        <div>
                            <h2>{dbJson.nome}</h2>
                            <h3>Bio: -{usePersonGitHub.bio}-</h3>
                        </div>
                    </div>
                    <div className='about-me'>
                        <h2>Sobre mim: <h5>{dbJson.bio}</h5></h2>
                    </div>
                </div>

                <div className='db-exp'>
                    <h1>Experiência Profissional</h1>
                    <div>
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
                                            <h5 className='date_start'>Inicio: {item.date_start}</h5>
                                            <h5 className='date_end'>Fim: {item.date_end}</h5>
                                        </footer>
                                    </div>
                                ))
                            )
                        }

                    </div>
                </div>

                <div className='GitHub-Container-Master'>
                    <h1>Meus Projetos do Github</h1>
                    <div className='category-filter'>
                        <h3 id='BuscaNomeG'>Busque pelo Nome em Baixo</h3>
                        <h3 id='BuscaNomeP'>Busque pelo Nome:</h3>
                        <input className='input-procura-nome'
                            type='text'
                            onChange={(env) => setBuscaItensGitHub(env.target.value)}
                        />
                    </div>
                    <div className='category-model'>
                        <h3>Escolha um meio de exibição:</h3>
                        <select id='models' name='models' value={useModeloExibidoGitHubEscolhido} onChange={(env) => UpdateLocalStorageModeloGitHub(env.target.value)}>
                            <option value="table">Tabela</option>
                            <option value="card">Cartão</option>
                        </select>
                    </div>
                    {useModeloExibidoGitHubEscolhido === "table" ? <TableRepGitHub itens={itensGitHubFiltrados} /> : <CardRepGitHub itens={itensGitHubFiltrados} />}
                </div>
            </div>
        </div >

    )
}


export default ProfileUser