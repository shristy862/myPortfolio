export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/me.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          I am a Full Stack Developer with 1+ years of experience in designing and building modern web applications. Skilled in React.js, Next.js, Node.js, and Express.js, I specialize in creating scalable, high-performance applications with seamless front-end and back-end integration.
          </p>
          <p className="hero--section-description">
          I have hands-on experience with MongoDB, Firebase, and AWS services (S3, EC2, Elastic Beanstalk, Route 53, SES, SNS) for cloud-based deployments and database management. Passionate about problem-solving, API development, authentication (JWT, OAuth, RBAC), and real-time communication, I thrive in fast-paced, innovative environments.
          </p>
        </div>
      </div>
    </section>
  );
}
