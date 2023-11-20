import './HeaderMain.css'

function HeaderMain() {
    const imgLogin = 'https://via.placeholder.com/40';
    return (
        <div>
            <div class='container'>
                <header>
                    <div>
                        <span>Home</span>
                        <span>Projetos</span>
                        <span>Contato</span>
                    </div>
                    <div>
                        <span>LOGFAST DEV</span>
                        <img src={imgLogin} />
                    </div>
                </header >
            </div>
        </div>
    );
}

export default HeaderMain;