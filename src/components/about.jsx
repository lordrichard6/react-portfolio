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
                                    <p>I'm a self taught developer, i started in March this journey and since then i never stopped.</p>
                                    <p>I willing to work my #*& off to see your need attended.</p>
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
                        <h2 className="colorlib-heading">Here are some of my abilities</h2>
                    </div>
                </div>
                <div className="row row-pt-md">
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-1">
                            <span className="icon">
                                <i className="fas fa-desktop" />
                            </span>
                            <div className="desc">
                                <h3>Front-end Development </h3>
                                <p>I have build some projects using JavaScript,React,HTML,CSS</p>
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
                                <p>I also have fingers for Node.js and databases</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center animate-box">
                        <div className="services color-5">
                            <span className="icon">
                                <i className="icon-data" />
                            </span>
                            <div className="desc">
                                <h3>Dev Ops</h3>
                                <p>I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s</p>
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