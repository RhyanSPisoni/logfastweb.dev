import { ConvertDate } from '../ConvertDate';
import { ENUM_COLORS, ENUM_COLORS_BORDA } from '../Enums';

function CardRepGitHub(list) {
    const { itens } = list;
    return <>
        <div className='gitHub-container'>
            {
                itens.length === 0 ? <p>Carregando...</p> : (
                    itens.map((item, index) => (
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
                                <h5 className='date-created'>Criado: {ConvertDate(item.created_at)}</h5>
                                <h5 className='date-updated'>Atualizado: {ConvertDate(item.updated_at)}</h5>
                            </footer>
                        </div>
                    ))
                )
            }
        </div>
    </>
}

export default CardRepGitHub;