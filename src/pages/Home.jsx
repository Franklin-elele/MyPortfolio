import codeimg from "../assets/code.png";
import resume from "../assets/Ebuka-Resume.pdf";
import cards from "../assets/card.png";
import bib from "../assets/bibs.png";
import Student from "../assets/Student.png";
import { useState } from "react";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/xnnbaqyw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          alert("Failed to send message. Please try again later.");
        }
      })
      .catch(() => alert("Something went wrong!"));
  };

  const projects = [
    {
      href: "https://bib-s-bible-quote-app.vercel.app/",
      img: bib,
      title: "Bib's Bible Quote App",
      desc: "React app to search and view Bible quotes.",
    },
    {
      href: "https://whitespace-mu.vercel.app/",
      img: cards,
      title: "WhiteSpace",
      desc: "Generate business card from filling in form details.",
    },
    {
      href: "#",
      img: Student,
      title: "Student Card generator",
      desc: "Create student card from their data.",
    },
  ];
  return (
    <div className="Home-container">
      {/* Hero Section */}
      <motion.div
        className="hero-section"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <h2>Hi, my name is Ebuka Franklin Elele </h2>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: "normal",
              textAlign: "left",
              padding: "5px 0",
            }}
          >
            —I am a Frontend Developer based in Lagos, Nigeria | I build fast,
            clean, responsive and user-friendly website. Helping businesses and
            individuals create websites that look great and work smoothly.
          </p>
          I'm a
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span>Frontend Developer</span>
            <span>Prompt Engineer</span>
            <span>Designer</span>
            <span>Freelancer</span>
            <span>Tech Enthuist</span>
          </motion.span>
          <br />
          <a
            href="#contact"
            style={{ textDecoration: "none", fontSize: "1.2rem" }}
            className="btn"
          >
            Hire me
          </a>
        </div>
      </motion.div>

      {/* About Section */}
      <motion.div
        className="about-section"
        id="about"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3, duration: 0.8 },
          },
        }}
        viewport={{ once: true }}
      >
        <div className="about-content">
          <motion.div
            className="about-text"
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h2>About Me</h2>
            <p>
              I'm a passionate Frontend Developer with a knack for creating user
              friendly web applications. I love turning ideas into reality using
              code and design tools. When I'm coding, I enjoy solving problems,
              learning new technologies, designing great user experiences and
              user interfaces. I'm always excited to build something new and
              improve my skills. <br />
              <br />I have a strong foundation in
              <span>HTML</span>, <span>CSS</span>, <span>Javascript</span>,
              <span>Figma</span>, <span>Angular</span>, and <span>React</span>.
              I'm eager to contribute to innovative projects and collaborate
              with like-minded professionals.
            </p>
            <a href={resume} download="Ebuka-Resume.pdf" className="btn">
              Download Resume
            </a>
          </motion.div>
          <motion.div
            className="about-image"
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <img src={codeimg} alt="About Me" />
          </motion.div>
        </div>
      </motion.div>

      {/* Projects Section */}
      <motion.div
        className="project-section"
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>
        <div className="project-cards">
          {projects.map((proj, i) => (
            <motion.a
              key={i}
              href={proj.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
              style={{ backgroundImage: `url(${proj.img})` }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3>{proj.title}</h3>
              <p>{proj.desc}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Semi CTA */}
      <div className="CTA">
        <p className="cta-head">Have a project idea? Let’s bring it to life!</p>
        <p className="cta-sub">
          I’m open to discussing new projects and creative collaborations. Let’s
          connect and build something amazing together.
        </p>
        <a href="#contact" className="ctaLink">
          Let’s Work Together
        </a>
      </div>

      {/* Contact Me */}
      <motion.div
        className="contact-container"
        id="contact"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Contact Me</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </motion.div>

      {/* Footer Section */}
      <motion.footer
        className="footer-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>&copy; 2024 Ebuka Franklin Elele. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/ebuka-elele-77ab09305/">
            <SiLinkedin />
          </a>
          <a href="https://github.com/">
            <SiGithub />
          </a>
        </div>
      </motion.footer>
    </div>
  );
}
