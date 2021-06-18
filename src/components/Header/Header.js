import './Header.css';

function Header (){
    return(
        <div className='header'>
            <div className='title'>Conversion Page</div>
            <div className='dropDown'>
                <div>Learn More </div>
                <div className='burgerList'>
                    <div className='burger burger-1'></div>
                    <div className='burger burger-2'></div>
                    <div className='burger burger-3'></div>
                </div>
            </div>
        </div>
    );
}

export default Header;