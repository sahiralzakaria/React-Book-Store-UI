import './about.css'
const About = () => {
    return (
        <section className="about">

            <div className="about-container">

                {/* Image Placeholder */}
                <div className="about-image">
                    <img src="/myProfPic.jpg" alt="Sahir ALZAKARIA" />
                </div>

                {/* Content */}
                <div className="about-content">
                    <h3>Sahir Zakaria</h3>
                    <p>Web Developer</p>

                    <p>
                        <strong>Bachelor’s Degree in Computer Engineering</strong>
                    </p>

                    <p>
                        2021 – 2025 <br />
                        Inonu University (İnönü Üniversitesi)
                    </p>

                    <p>
                        Syrian | Based in Turkey
                    </p>

                    <div className="about-links">
                        <p>
                            📧 <a href="mailto:sahir.alzakaria@gmail.com">
                                sahir.alzakaria@gmail.com
                            </a>
                        </p>

                        <p>
                            🔗 <a
                                href="https://linkedin.com/in/sahir-zakaria-39873531b"
                                target="_blank"
                                rel="noreferrer"
                            >
                                linkedin.com/in/sahir-zakaria
                            </a>
                        </p>

                        <p>
                            💻 <a
                                href="https://github.com/sahiralzakaria"
                                target="_blank"
                                rel="noreferrer"
                            >
                                github.com/sahiralzakaria
                            </a>
                        </p>
                    </div>
                </div>


            </div>
        </section>
    )
}

export default About
