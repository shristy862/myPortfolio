export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Shristy</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Building seamless and scalable web applications
            <br />  with React, Mongodb, and Node.js
          </p>
        </div>
        <button 
          className="btn btn-primary" 
          onClick={() => window.location.href = 'mailto:shristyv301@gmail.com'}
        >
          Get In Touch
        </button>
        </div>
      <div className="hero--section--img">
        <img src="./img/logo.png" alt="Hero Section" />
      </div>
    </section>
  );
}
