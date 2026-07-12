const About = () => {
    return (
        <section className="about-section">
            <div className="about-hero">
                <div className="about-hero-content">
                    <p className="about-tag">About DailyEATS</p>
                    <h1>Enjoy your favorite meals from the comfort of home.</h1>
                    <p>
                        DailyEATS brings together the best local restaurants, quick delivery,
                        and delicious choices for every mood, craving, and schedule.
                    </p>
                    <div className="about-actions">
                        <button className="about-btn primary">Order Now</button>
                        <button className="about-btn secondary">Explore Menu</button>
                    </div>
                </div>

                <div className="about-showcase">
                    <div className="showcase-card">
                        <h3>Why people love us</h3>
                        <ul>
                            <li>Fast delivery in minutes</li>
                            <li>Wide variety of cuisines</li>
                            <li>Fresh ingredients and trusted restaurants</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="about-details">
                <div className="detail-card">
                    <h3>Our Mission</h3>
                    <p>To make delicious food accessible, convenient, and enjoyable for everyone.</p>
                </div>
                <div className="detail-card">
                    <h3>Our Promise</h3>
                    <p>Reliable service, mouthwatering meals, and a seamless ordering experience.</p>
                </div>
                <div className="detail-card">
                    <h3>Our Community</h3>
                    <p>We support local kitchens and bring happy meals to neighborhoods every day.</p>
                </div>
            </div>
        </section>
    );
};

export default About;