import './Footer.css';
import linkedInLogo from '../../Images/linkedIn.png';
import personalLogo from '../../Images/logo-32x32.png';
import gitHubLogo from '../../Images/GitHub-Mark-Light-32px.png';

function Footer () {
    return(
        <div className='footer'>
            <div className='footerLinks'>
                <div className='footerLink'>
                    <a className='footerLinkStyle' href='#'>
                        <img className='icon' src={linkedInLogo} alt="linkedIn"/>
                    </a>
                </div>
                <div className='footerLink'>
                    <a className='footerLinkStyle' href='#'>
                        <img className='icon' src={personalLogo} alt="linkedIn"/>
                    </a>
                </div>
                <div className='footerLink'>
                    <a className='footerLinkStyle' href='#'>
                        <img className='icon' src={gitHubLogo} alt="linkedIn"/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;