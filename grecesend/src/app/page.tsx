"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// ✅ Section Wrapper with fade + slide
function Section({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
    else controls.start({ opacity: 0, y: 40 });
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-24 px-6 max-w-6xl mx-auto text-center relative"
    >
      {children}
    </motion.div>
  );
}

// ✅ Navbar
function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-md border-b border-indigo-200 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <span className="font-extrabold text-2xl text-indigo-600 drop-shadow-sm">
          Grace
        </span>
        <div className="space-x-6 text-gray-700 font-medium">
          <a href="#about" className="hover:text-indigo-600 transition">
            About
          </a>
          <a href="#skills" className="hover:text-indigo-600 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-indigo-600 transition">
            Projects
          </a>
          <a href="#testimonials" className="hover:text-indigo-600 transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-indigo-600 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

// ✅ Hero Section (with randomized but safe image)
// ✅ Hero Section (fixed aspect ratio image)
// ✅ Hero Section (fixed aspect ratio image)
function Hero() {
  const heroImages = ["/one.jpg", "/two.jpg", "/three.jpg"];
  const [heroImage, setHeroImage] = useState(heroImages[0]);

  useEffect(() => {
    // shuffle once on client
    const randomImg = heroImages[Math.floor(Math.random() * heroImages.length)];
    setHeroImage(randomImg);
  }, []);

  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 relative overflow-hidden bg-gradient-to-br from-sky-50 via-indigo-100 to-sky-200">
      {/* Gradient glows */}
      <motion.div
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
        className="absolute w-[600px] h-[600px] bg-indigo-300/40 rounded-full blur-3xl top-[-150px] left-[-150px] z-0"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute w-[500px] h-[500px] bg-sky-300/40 rounded-full blur-3xl bottom-[-150px] right-[-100px] z-0"
      />

      {/* Content */}
      <div className="relative z-10 max-w-xl">
        <p className="text-indigo-600 font-semibold uppercase tracking-widest mb-4">
          Frontend Developer & Designer
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-indigo-800 leading-tight drop-shadow-sm">
          Hi, I’m Grace 👋
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
          I craft <span className="font-semibold text-indigo-600">elegant</span>{" "}
          and <span className="font-semibold text-sky-600">performant</span> web
          experiences that blend{" "}
          <span className="font-semibold">creativity</span> with{" "}
          <span className="font-semibold">technology</span>.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-sky-500 text-white font-medium rounded-full shadow-lg hover:shadow-indigo-400/40 hover:scale-105 transition flex items-center gap-2"
          >
            🚀 View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white text-indigo-700 border border-indigo-200 font-medium rounded-full shadow-md hover:bg-indigo-50 hover:scale-105 transition flex items-center gap-2"
          >
            📬 Contact Me
          </a>
        </div>
      </div>

      {/* Hero Image with fixed aspect ratio */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 hidden md:block w-[350px] lg:w-[400px] xl:w-[450px]"
      >
        <img
          src={heroImage}
          alt="Grace Illustration"
          className="w-full aspect-[3/2] object-cover object-center rounded-2xl shadow-xl"
        />
      </motion.div>
    </section>
  );
}

// ✅ About
function About() {
  return (
    <Section>
      <h2
        id="about"
        className="text-5xl font-extrabold text-indigo-700 drop-shadow-md"
      >
        About Me
      </h2>
      <p className="mt-6 text-gray-700 max-w-2xl mx-auto leading-relaxed text-lg tracking-wide">
        I’m Grace, a frontend developer passionate about{" "}
        <span className="font-semibold">clean design</span> and{" "}
        <span className="font-semibold">user experiences</span>. I love merging{" "}
        <span className="text-indigo-600">creativity</span> with{" "}
        <span className="text-sky-600">technology</span> to build meaningful
        digital products.
      </p>
    </Section>
  );
}

// ✅ Skills
function Skills() {
  const skills = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Figma",
    "Node.js",
  ];
  return (
    <Section>
      <h2
        id="skills"
        className="text-5xl font-extrabold text-sky-600 drop-shadow-md"
      >
        Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {skills.map((skill, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.15, rotate: 2 }}
            className="px-5 py-3 bg-white border border-indigo-200 shadow-md rounded-full text-gray-700 font-medium hover:bg-indigo-50 transition"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </Section>
  );
}

// ✅ Projects (safe random images)
function Projects() {
  const images = [
    "/one.jpg",
    "/two.jpg",
    "/three.jpg",
    "/four.jpg",
    "/five.jpg",
    "/six.jpg",
  ];

  const projects = [
    {
      title: "Portfolio Website",
      desc: "A modern portfolio showcasing design + development.",
    },
    { title: "E-Commerce UI", desc: "A sleek online shopping experience." },
    {
      title: "Blog Platform",
      desc: "A blog with comments, likes, and modern design.",
    },
    { title: "Chat App", desc: "A real-time chat built with WebSockets." },
  ];

  const [shuffled, setShuffled] = useState(images);

  useEffect(() => {
    const shuffledArr = [...images].sort(() => Math.random() - 0.5);
    setShuffled(shuffledArr);
  }, []);

  return (
    <Section>
      <h2
        id="projects"
        className="text-5xl font-extrabold text-indigo-700 drop-shadow-md"
      >
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-white border border-indigo-200 shadow-lg rounded-2xl overflow-hidden hover:shadow-indigo-400/30 transition text-left"
          >
            <img
              src={shuffled[i % shuffled.length]}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="font-bold text-xl text-indigo-600">
                {project.title}
              </h3>
              <p className="text-gray-700 mt-3">{project.desc}</p>
              <div className="mt-4 space-x-4">
                <a href="#" className="text-indigo-600 hover:underline">
                  Live Demo
                </a>
                <a href="#" className="text-sky-600 hover:underline">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ✅ Testimonials
function Testimonials() {
  const quotes = [
    {
      name: "Eugene Okaka",
      text: "Grace is an amazing developer with an eye for design. Her work always impresses me!",
    },
    {
      name: "Sarah Lee",
      text: "Working with Grace was a joy. She delivers quality work on time and with creativity.",
    },
  ];

  return (
    <Section>
      <h2
        id="testimonials"
        className="text-5xl font-extrabold text-sky-600 drop-shadow-md"
      >
        Testimonials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {quotes.map((q, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white border border-indigo-200 p-6 rounded-2xl shadow-md text-left hover:shadow-sky-300/30 transition"
          >
            <p className="font-semibold text-indigo-600">{q.name}</p>
            <p className="italic text-gray-700 mt-4">“{q.text}”</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ✅ Contact

function Contact() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const data = {
      name: (form.elements[0] as HTMLInputElement).value,
      email: (form.elements[1] as HTMLInputElement).value,
      message: (form.elements[2] as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("Message sent ✅");
        form.reset();
      } else {
        setStatus("Something went wrong ❌");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message ❌");
    }
  }

  return (
    <Section>
      <h2
        id="contact"
        className="text-5xl font-extrabold text-indigo-700 drop-shadow-md"
      >
        Let’s Work Together
      </h2>
      <p className="mt-4 text-gray-700 max-w-xl mx-auto text-lg">
        Want to build something amazing? Let’s connect and make it happen 🚀
      </p>
      <form
        onSubmit={handleSubmit}
        className="mt-8 max-w-md mx-auto space-y-4 text-left"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 border border-indigo-200 bg-white text-gray-700 rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 border border-indigo-200 bg-white text-gray-700 rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="w-full px-4 py-3 border border-indigo-200 bg-white text-gray-700 rounded-lg"
        ></textarea>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-sky-500 text-white rounded-xl shadow-md hover:scale-105 transition"
        >
          Send Message
        </button>
      </form>
      {status && (
        <p className="mt-4 text-center text-gray-600 font-medium">{status}</p>
      )}
    </Section>
  );
}

// ✅ Main Page
export default function Home() {
  return (
    <main className="bg-gradient-to-b from-sky-50 via-indigo-50 to-sky-100 text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  );
}
