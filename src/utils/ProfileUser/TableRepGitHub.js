import { ConvertDate } from '../ConvertDate';
import './TableRepGitHub.css';

function TableRepGitHub(list) {
    function verificarPar(numero) {
        if (numero % 2 === 0)
            return true;
        else
            return false;
    }


    const { itens } = list;

    return <div className='Table-Rep-Container'>
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Linguagem</th>
                    <th>Repositório</th>
                    <th>Criado</th>
                    <th>Atualizado</th>
                </tr>
            </thead>

            <tbody>
                {itens.length === 0 ? (
                    <tr className='escuro'>
                        <td>Carregando</td>
                        <td>Carregando</td>
                        <td>Carregando</td>
                        <td>Carregando</td>
                        <td>Carregando</td>
                    </tr>
                ) : (
                    itens.map((item, index) => (
                        <tr key={index} className={verificarPar(index) ? "escuro" : "claro"}>
                            <td>{item.name}</td>
                            <td>{item.language === null ? "Null" : item.language}</td>
                            <td>
                                <a href={item.html_url}>Link</a>
                            </td>
                            <td>{ConvertDate(item.created_at)}</td>
                            <td>{ConvertDate(item.updated_at)}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    </div>
}

export default TableRepGitHub;