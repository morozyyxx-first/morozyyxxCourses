import { Link } from 'react-router-dom'

function KindOfCourses() {
    return (
        <main>
            <h1>Kind of Courses</h1><br/>
            <h2>
                Python - Begin<br/>
                Python - Middle<br/>
                Python - Advanced<br/>
                FastAPI - Begin<br/>
            </h2>
            <a href="" id="go-menu-btn"><Link to="/">Return to main page</Link></a>
        </main>
    );
}

export default KindOfCourses