import './ProfileUser.css'
import axios from 'axios';
import moment from 'moment'

import { useEffect, useState } from 'react';

function ProfileUser() {
    const [useItensGitHub, setItensGitHub] = useState([]);
    // const [useCorCardGit, setCorCardGit] = useState

    const colorTest = { color: '#be460e' }

    const setCorCardGit = (l) => {
        if (l == "HTML") {
            return colorTest
        }
    }

    const getitensGitHub = async () => {
        axios.get("https://api.github.com/users/RhyanSPisoni/repos")
            .then((res) => setItensGitHub(res.data));
    }

    function ConveterData(string) {
        const date = new Date();
        const formattedDate = moment(date).format('DD/MM/YYYY');
        return formattedDate;
    }

    useEffect(() => {
        getitensGitHub();
    }, []);

    return (
        <div className='git-all'>
            <h1>Meus Projetos do Github</h1>
            <div className='gitHub-container'>
                {
                    useItensGitHub.length === 0 ? <p>Carregando...</p> : (
                        useItensGitHub.map((item, index) => (
                            <div className='itemGitHub' key={index}>
                                <h2 id='id-name-git'>Nome: {item.name}</h2>
                                <h4 onLoad={setCorCardGit(item.language)} id='id-language-git'>Linguagen(s): {item.language}</h4>
                                <a href={item.html_url}>Repositório</a>
                                <h4>Criado: {ConveterData(item.created_at)}</h4>
                                <h4>Atualizado: {ConveterData(item.updated_at)}</h4>
                            </div>
                        ))
                    )
                }
            </div>
        </div>

    )
}


export default ProfileUser