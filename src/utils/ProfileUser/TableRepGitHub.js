import { useEffect, useState } from 'react';
import { ConvertDate } from '../ConvertDate';

function TableRepGitHub(list) {
    const { itens } = list;

    return <>
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
                    <tr>
                        <td colSpan="5">Carregando...</td>
                    </tr>
                ) : (
                    itens.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.language === null ? "Null" : item.language}</td>
                            <td>
                                <a href={item.html_url}>Repositório</a>
                            </td>
                            <td>{ConvertDate(item.created_at)}</td>
                            <td>{ConvertDate(item.updated_at)}</td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    </>
}

export default TableRepGitHub;