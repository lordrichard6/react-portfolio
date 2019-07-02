import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://reizinho-face-detect-app.herokuapp.com">Face Detection API</a></h3>
											<span>React App</span>	
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://reizinho-robofriends.herokuapp.com">RoboFriends</a></h3>
											<span>React App</span>
											<p className="icon">
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://pauloreizinho-netflix.netlify.com/">Copy NETFLIX Landing Page</a></h3>
											<span>Website</span>
											<p className="icon">
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://pauloreizinho-flappybird.netlify.com">Flappy Bird</a></h3>
											<span>JavaScript Game</span>
											<p className="icon">
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://pauloreizinho-calculator.netlify.com">calculator</a></h3>
											<span>JavaScript App</span>
											<p className="icon">
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="https://pauloreizinho-portfolio2.netlify.com">Last Portfolio</a></h3>
											<span>Website</span>
											<p className="icon">
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Fly up <i className="fas fa-dove" /></a></p>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}