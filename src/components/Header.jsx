import logo from '../assets/logo.webp';
import '../styles/Header.css';

export default function Header()
{
    const brand = 'CV Maker';

    return (
        <header>
            <div className="brand">

                <img src={logo} alt="logo" />
                <h1>{brand}</h1>

            </div>

            <div className="intro">
                <p>
                    Welcome to CV Maker.
                    Enjoy the experience!
                </p>
            </div>
            
        </header>
    )
}