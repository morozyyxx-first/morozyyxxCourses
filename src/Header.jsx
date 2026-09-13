import { Link } from 'react-router-dom'
import python_image from './assets/pythonImg.png'

function Header() {
    return (
        <header>
            <img src={python_image} alt="Python image"/>
            <h3 id="main-name"><Link to="/"><a href="">morozyyxx courses</a></Link></h3>
            <div id="header-buttons">
                <button className="header-btn">
                    <Link to="/kind-of-courses"><a href="">Kind of courses</a></Link>
                </button>
                <button className="header-btn">
                    <a href="https://viktormorozcv.vercel.app">About author</a>
                </button>
                <button className="header-btn">
                    <Link to="/for-who"><a href="">For who?</a></Link>
                </button>
            </div>
            <button id="contact-btn">
                <a href="https://t.me/bobokaji"> Contact with author</a>
            </button>
        </header>
    );
}

export default Header