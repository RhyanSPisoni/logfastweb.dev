import './HeaderMain.css'

function HeaderMain() {
    const imgLogin = 'https://via.placeholder.com/40';
    return (
        <div>
            <div class='container'>
                <header>
                    <div className='container-left'>
                        <span>HOME</span>
                        <span onClick={() => TestLinkUrl(2)}>PROJETOS</span>
                        <span onClick={() => TestLinkUrl(1)} >CONTATO</span>
                    </div>
                    <div className='container-right'>
                        <span>LOGFAST DEV</span>
                        <img src={imgLogin} alt={imgLogin} />
                    </div>
                </header >
            </div>
        </div>
    );

    function TestLinkUrl(number) {
        switch (number) {
            case 1:
                window.location.href = "https://www.linkedin.com/in/rhyan-de-souza-pisoni";
                break;
            case 2:
                window.location.href = "https://github.com/rhyanspisoni";
                break;
            default:
                break;
        }

    }
}


export default HeaderMain;