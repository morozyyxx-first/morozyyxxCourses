import Header from './Header.jsx'

function KindOfCourses() {
    let avalilableCourses = [
        "Python - Begin",
        "Python - Middle",
        "Python - Advanced",
        "FastAPI - Begin"
    ]
    return (
        <>
        <Header/>
        <main>
            <h1>Kind of Courses</h1><br/>
            <h2>
                Python - Begin<br/>
                Python - Middle<br/>
                Python - Advanced<br/>
                FastAPI - Begin<br/>
            </h2>
            <Link to="/"><a href="" id="go-menu-btn">Return to main page</a></Link>
        </main>
        </>
    );
}

export default KindOfCourses