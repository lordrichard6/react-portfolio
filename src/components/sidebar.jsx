import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Paulo R Lopes<br/> Reizinho</a></h1>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li><a className="sep" href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a className="sep" href="#about" data-nav-section="about">About</a></li>
                  <li><a className="sep" href="#projects" data-nav-section="projects">Projects</a></li>
                  {/* <li><a href="#" data-nav-section="blog">Blog</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li> */}
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul className="">
                <li><a href="https://twitter.com/PauloReizinho1" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter" /></a></li>
                <li><a href="https://www.instagram.com/reizinho_pt/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/paulo-reizinho-a2648b182/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin" /></a></li>
                <li><a href="https://github.com/lordrichard6" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  This was created with <i className="fas fa-heart" aria-hidden="true" /> and <i className="fas fa-fist-raised" aria-hidden="true"></i><br></br>
                  {/* ... <a href="" target="_blank" rel="noopener noreferrer">...</a>... */}
              </small></p>
              <p><small>
                Feel free to contact me, even for a <i className="fas fa-beer" aria-hidden="true" />.
              </small></p>
              <span className="email"><i className="fas fa-at"></i> paulolopesreizinho@gmail.com</span>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}