import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-12">
                        <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                            <div className="col-md-12">
                                <div className="about-desc">
                                    <span className="heading-meta">About Me</span>
                                    <h2 className="colorlib-heading">Who Am I?</h2>
                                    <p>Hello, my name is Paulo i came from a small town in Portugal but now my <i class="fas fa-home" /> in Zurich and i am a self thought Developer more specialized in the Front-end but with a bit of understanding of the Back-end.</p>
                                    <p>I have an Adminitration background but my motivation and love are with programing.</p>
                                    <p>Learned the basics of <i class="fab fa-html5" /> and <i class="fab fa-css3-alt"/> bootstrap and flexbox, got the basics of <i class="fab fa-js-square" />, i studied <i class="fab fa-react"/> with Redux,</p> 
                                    <p>If you are interested in hiring someone that works 200% to make your <i class="far fa-lightbulb"/> true, someone with the hunger to grow and learn,</p> 
                                    <p>then i am happy to be part of the <i class="fas fa-users"/> and make the diference. </p>
                                    <p>I willing to work my <i class="fab fa-sass"/> off to see your need attended{/*  and my ambition fulfilled */}.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="colorlib-about">
            <div className="colorlib-narrow-content">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                        <span className="heading-meta">What can I do?</span>
                        <h2 className="colorlib-heading">Combat skills</h2>
                    </div>
                </div>
                <div className="row row-pt-md">
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-1">
                            <span className="icon">
                                <i className="fas fa-desktop" />
                            </span>
                            <div className="desc">
                                <h3>Front-end</h3>
                                <p>HTML, CSS with Sass and Bootstrap, JavaScript with React.js and Redux.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-3">
                            <span className="icon">
                                <i className="fas fa-server" />
                            </span>
                            <div className="desc">
                                <h3>Back-end</h3>
                                <p>Node.js and Express, Python and Django</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-5">
                            <span className="icon">
                                <i className="fas fa-tablet-alt" />
                            </span>
                            <div className="desc">
                                <h3>Other Skills</h3>
                                <p>Fluent in english writen and spoken, B1 of German, team player and well self organized.</p>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
      </div>
    )
  }
}