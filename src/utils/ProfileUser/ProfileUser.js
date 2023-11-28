import './ProfileUser.css'
import axios from 'axios';
import { useEffect, useState } from 'react';

function ProfileUser() {
    const [useItensGitHub, setItensGitHub] = useState([]);

    const getitensGitHub = async () => {
        axios.get("https://api.github.com/users/RhyanSPisoni/repos")
            .then((res) => setItensGitHub(res.data));
    }

    useEffect(() => {
        getitensGitHub();
    }, []);

    return (
        <>
            <h1>Meus Projetos do Github</h1>
            <div className='gitHub-container'>
                {
                    useItensGitHub.length === 0 ? <p>Carregando...</p> : (
                        useItensGitHub.map((item, index) => (
                            <div className='itemGitHub' key={index}>
                                <h2>Nome: {item.name}</h2>
                                <h2>Linguagen(s): {item.language}</h2>
                                <a href={item.html_url}><h2>Repositório</h2></a>
                                <h4>Criado: {item.created_at}</h4>
                                <h4>Atualizado: {item.updated_at}</h4>
                            </div>
                        ))
                    )
                }
            </div>
        </>
    )
}

export default ProfileUser