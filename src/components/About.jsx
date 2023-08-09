import React from 'react'

function About() {
  return (
    <main className="main">
    <section className="card-area">
        {/* Card: City */}
        <section className="card-section">
            <div className="card">
                <div className="flip-card">
                    <div className="flip-card__container">
                        <div className="card-front">
                            <div className="card-front__tp card-front__tp--city">
                                <svg
                                    version="1.1"
                                    id="Layer_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 60 60"
                                    style={{ enableBackground: 'new 0 0 60 60' }}
                                    xmlSpace="preserve"
                                    className="card-front__icon"
                                >
                                    {/* SVG Paths */}
                                </svg>
                                <h2 className="card-front__heading">City break</h2>
                                <p className="card-front__text-price">From £29</p>
                            </div>
                            <div className="card-front__bt">
                                <p className="card-front__text-view card-front__text-view--city">
                                    View me
                                </p>
                            </div>
                        </div>
                        <div className="card-back">
                            <video className="video__container" autoPlay muted loop>
                                <source
                                    className="video__media"
                                    src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                </div>
                <div className="inside-page">
                    <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--city">
                            For urban lovers
                        </h3>
                        <p className="inside-page__text">
                            As cities never sleep, there are always something going on, no
                            matter what time!
                        </p>
                        <a href="#" className="inside-page__btn inside-page__btn--city">
                            View deals
                        </a>
                    </div>
                </div>
            </div>
        </section>
        {/* Other Card Sections */}
        {/* ... */}
    </section>
    <footer className="footer">
        <p className="footer-text">&copy; 2021 Created by Maza designDev</p>
    </footer>
</main>
  )
}

export default About