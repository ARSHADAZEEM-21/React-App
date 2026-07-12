const Contact = () => {
    return (
        <section className="contact-page">
            <div className="contact-overlay">
                <div className="contact-card">
                    <div className="contact-info">
                        <p className="contact-tag">Contact Us</p>
                        <h1>We’d love to hear from you</h1>
                        <p>
                            Whether you have a question, feedback, or a special request,
                            our team is ready to help.
                        </p>
                        <ul>
                            <li>📍 123 Flavor Street, New City</li>
                            <li>📞 +1 234 567 890</li>
                            <li>✉️ support@dailyeats.com</li>
                        </ul>
                    </div>

                    <form className="contact-form">
                        <input type="text" placeholder="Your Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea rows="4" placeholder="Your Message"></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
