import Header from './Header.jsx'

function ForWho() {
    return (
        <>
            <Header/>
            <main>
                <h1>For who are this courses?</h1>
                <div id="forwhoresponses">
                    - For kids who want to build their own websites, not just scroll them.<br/><br/>
                    - For young creators curious about tech, computers, and solving cool puzzles.<br/><br/>
                    - For parents looking to turn screen time into a productive, future-proof hobby.<br/><br/>
                </div>
                <Link to="/kind-of-courses"><a href="" id="go-to-ava-courses">
                    Look up for available courses {"=>"}
                </a></Link>
            </main>
        </>
    );
}

export default ForWho