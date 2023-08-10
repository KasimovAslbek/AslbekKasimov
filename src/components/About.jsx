import React from 'react'
import { Link } from 'react-scroll';
import './styles/about.css'
import chess from '../images/chess.svg'
import traveling from '../images/traveling.svg'
import running from '../images/running.svg'
import generals from '../images/generals.svg'
import chessVideo from '../images/TheChess.mp4'
import travelVideo from '../images/traveling.mp4'
import runningVideo from '../images/running.mp4'
import generalsVideo from '../images/generals.mp4'




function About() {
  return (
    <div id='about' className='max-w-main  mx-4  sm:mx-11  lg:mx-24 2xl:mx-auto pt-40'>
        <div>
           <h2  className='text-center text-3xl sm:text-4xl 2xl:text-5xl  min-[2500px]:text-6xl  font-bold'>About me</h2>
            <div className='h-3 w-16 bg-[#7843e9] rounded-full mx-auto mt-4 mb-10 md:mb-20'></div>
            <div className='text-xl sm:text-2xl 2xl:text-3xl min-[2500px]:text-4xl  text-[#666] space-y-7 lg:w-2/3 mx-auto mb-20'>
                <p>You got acquainted with my skills in the section <Link className='text-blue-500 cursor-pointer' to="skills"  smooth={true}  duration={800} >above</Link>. You can get to know my personality in this section.</p>
                <p>I enjoy listening to <Link className='text-blue-500 font-bold cursor-pointer' to='hobby' smooth={true}  duration={800}>traveling, going for long walks, playing chess and computer games</Link>.</p>
                <p>I worked in public administration bodies for more than 6 years. So I think my <span className='text-[#7843e9] font-bold'>communication skills</span> are very good.</p>
                <p>Initially, I earned a <span className='text-red-500 font-bold'>bachelor's degree in law</span>. I changed my field because of my strong interest in computer programming.</p>
                <p>I am currently freelancing on <a className='text-green-500 cursor-pointer font-bold' href="https://www.upwork.com/freelancers/~0150385c1c881151ea"  >Upwork</a>. In addition, I am the founder of a start-up in the field of legal services.</p> 
            </div>


        </div> 
        <div className='hidden sm:block'>
        <h2 id='hobby' className='text-center text-3xl sm:text-4xl 2xl:text-5xl  min-[2500px]:text-6xl  font-bold mt-20'>My hobbies</h2>
        <div className='h-3 w-16 bg-[#7843e9] rounded-full mx-auto mt-4 mb-20'></div>
        <main className="main">
        <section className="card-area grid grid-cols-1 lg:grid-cols-2 2xl:flex gap-8 2xl:gap-20 mb-44">
        {/* Card: City */}
        <section className="card-section">
            <div className="card">
                <div className="flip-card">
                    <div className="flip-card__container">
                        <div className="card-front">
                            <div className="card-front__tp card-front__tp--city">
                                <img className='w-12 h-12' src={chess} alt="" />
                                <h2 className="card-front__heading">Playing chess</h2>
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
                                    className="video__media w-fit"
                                    src={chessVideo}
                                    type="video/mp4"
                                />
                            </video>
                        </div>
                    </div>
                </div>
                <div className="inside-page">
                    <div className="inside-page__container">
                        <h3 className="inside-page__heading inside-page__heading--city">
                            CHESS
                        </h3>
                        <p className="inside-page__text">
                            Playing chess requires strategic thinking and foresight.
                        </p>
                        <a href="https://www.youtube.com/watch?v=0mvwoxMdFkM" className="inside-page__btn inside-page__btn--city">
                            View video
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section class="card-section">
                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card__container">
                            <div class="card-front">
                                <div class="card-front__tp card-front__tp--ski">
                                <img className='w-20 h-20' src={traveling} alt="" />
                                               <h2 class="card-front__heading">
                                                    Traveling
                                               </h2>

                                </div>

                                <div class="card-front__bt">
                                    <p class="card-front__text-view card-front__text-view--ski">
                                        View me
                                    </p>
                                </div>
                            </div>

                            <div class="card-back">
                                <video className="video__container" autoPlay muted loop>
                                    <source
                                        className="video__media"
                                        src={travelVideo}
                                        type="video/mp4"
                                    />
                                </video>
                               
                            </div>
                        </div>
                    </div>

                    <div class="inside-page">
                        <div class="inside-page__container">
                            <h3 class="inside-page__heading inside-page__heading--ski">
                                TRAVELING
                            </h3>
                            <p class="inside-page__text">
                                Traveling opens doors to new experiences, cultures, and perspectives. 
                            </p>
                            <a href="https://player.vimeo.com/external/180185916.sd.mp4?s=c893e4770f87b00e0d6b5a1de138b01b02aaa085&profile_id=164&oauth2_token_id=57447761" class="inside-page__btn inside-page__btn--ski">View video</a>
                        </div>
                    </div>
                </div>
        </section>
        <section class="card-section">
                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card__container">
                            <div class="card-front">
                                <div class="card-front__tp card-front__tp--beach">
                                    <img className='w-20 h-20' src={running} alt="" />
                               
                                               <h2 class="card-front__heading">
                                                   Running
                                               </h2>

                                </div>

                                <div class="card-front__bt">
                                    <p class="card-front__text-view card-front__text-view--beach">
                                        View me
                                    </p>
                                </div>
                            </div>
                            <div class="card-back">
                                <video className="video__container" autoPlay muted loop>
                                    <source
                                        className="video__media"
                                        src={runningVideo}
                                        type="video/mp4"
                                    />
                                </video>
                               
                            </div>
                        </div>
                    </div>

                    <div class="inside-page">
                        <div class="inside-page__container">
                            <h3 class="inside-page__heading inside-page__heading--beach">
                                RUNNING
                            </h3>
                            <p class="inside-page__text">
                                Fostering a sense of freedom and accomplishment with every stride.
                            </p>
                            <a href="https://www.youtube.com/watch?v=kEksL2UaHfw" class="inside-page__btn inside-page__btn--beach">View video</a>
                        </div>
                    </div>
                </div>
        </section>
        <section class="card-section">
                <div class="card">
                    <div class="flip-card">
                        <div class="flip-card__container">
                            <div class="card-front">
                                <div class="card-front__tp card-front__tp--camping">
                                <img src={generals} alt="" />
                                               <h2 class="card-front__heading">
                                                    Computer games
                                               </h2>
                                </div>

                                <div class="card-front__bt">
                                    <p class="card-front__text-view card-front__text-view--camping">
                                        View me
                                    </p>
                                </div>
                            </div>
                            <div class="card-back">
                                <video className="video__container" autoPlay muted loop>
                                    <source
                                        className="video__media"
                                        src={generalsVideo}
                                        type="video/mp4"
                                    />
                                </video>
                               
                            </div>
                        </div>
                    </div>

                    <div class="inside-page">
                        <div class="inside-page__container">
                            <h3 class="inside-page__heading inside-page__heading--camping">
                                GENERALS
                            </h3>
                            <p class="inside-page__text">
                                It is a strategic computer game of virtual warfare and conquest.
                            </p>
                            <a href="https://www.youtube.com/watch?v=CNi7dNw6TW8" class="inside-page__btn inside-page__btn--camping">View video</a>
                        </div>
                    </div>
                </div>
        </section>

        </section>

        </main>
        </div>
    </div>
        
    
  )
}

export default About