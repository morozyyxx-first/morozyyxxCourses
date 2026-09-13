import python_image from './assets/pythonImg.png'

function Content() {
    return (
        <main>
            <img src={python_image} alt="PythonImage" />
            <h1>Learn Python standard-free! Engaging, fun, and 100% free coding for kids.</h1><br/>
            <h2>Give your child a head start in tech without spending a dime. We make learning the world's most popular programming language fun, logical, and practical.</h2><br/>
            <a href="https://t.me/bobokaji" id="apply-btn">Enroll (Telegram)</a>
            <h1 id="wiif-h1">Why Are We Teaching for Free?</h1>
            <h2>Our mission is to make quality tech education accessible to every child. We believe talent is everywhere, and coding is quickly becoming as fundamental as reading and writing.</h2><br/>
            <h1 id="kb-h1">Key Benefits</h1>
            <div id="key-benefits-div">
                <div className="key-benefits-parent">
                    <div className="key-benefits-child">
                        <b>100% Free Forever</b><br/>
                        No hidden fees, no credit cards required, and no surprise paywalls.
                    </div>
                    <div className="key-benefits-child">
                        <b>Backend Learning</b><br/>
                        Zero boring lectures — kids learn by building websites, interactive stories, and Telegram bots.
                    </div>
                </div>
                <div className="key-benefits-parent">
                    <div className="key-benefits-child">
                        <b>Kid-Friendly Explanations</b><br/>
                        We break down complex Python concepts using simple, everyday analogies.
                    </div>
                    <div className="key-benefits-child">
                        <b>Real Projects Built</b><br/>
                        Your child will publish their very first working API within just two weeks.
                    </div>
                </div>
            </div>
            <h1 id="reserv-lbl">Reserve a Free Spot for Your Child Today <br/>||<br/>\/</h1>
            <a href="https://t.me/bobokaji" id="apply-btn">Enroll (Telegram)</a>
        </main>
    );
}

export default Content