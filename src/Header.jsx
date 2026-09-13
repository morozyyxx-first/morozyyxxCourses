import python_image from './assets/pythonImg.png'
import ForWho from './ForWho.jsx';

function Header() {
    return (
        <header>
            <img src={python_image} alt="Python image"/>
            <h3 id="main-name"><a href="index.html">morozyyxx courses</a></h3>
            <div id="header-buttons">
                <button className="header-btn">
                    <a href="kindofcourses.html">Kind of courses</a>
                </button>
                <button className="header-btn">
                    <a href="https://viktormorozcv.vercel.app">About author</a>
                </button>
                <button className="header-btn">
                    <a href="forwho.html">For who?</a>
                </button>
            </div>
            <button id="contact-btn">
                <a href="https://t.me/bobokaji"> Contact with author</a>
            </button>
        </header>
    );
}

export default Header