import './Header.css';
import logo from './cv.png';

export default function Header()
{
    return (
        <header id="main-hdr">
            <img src={logo} alt="Logo" id="logo-hdr" />
            <h1>CV Creator</h1>
        </header>
    )
}