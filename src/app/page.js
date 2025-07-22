"use client"

import Image from "next/image"
import Link from "next/link"
import { Code, Laptop, Rocket, Send, Moon, Sun } from "lucide-react"
import emailjs from "emailjs-com"
import { useRef, useState, useEffect } from "react"

// Data for projects
const projects = [
  {
    id: 1,
   title: "Investment AI",
    description:
      "An AI powered investment management and outlook tool. NextJS with a Postgres database using custom built LLMs, API calls and Typescript.",
    imageUrl: "/InvestmentAI.png?height=200&width=300",
    link: "https://www.investmentai.ai/"
  },
  {
    id: 2,
      title: "Topher's Maintenance and Repair",
    description:
      "Topher's Maintenance and Repair is a React SSR landing page using Google Cloud and Ads in order to optimize SEO and increase traffic.",
    imageUrl: "/Tophers.png?height=200&width=300",
    link: "https://www.tophersmandr.com/"
  },
  {
    id: 3,
    title: "Colorado Films",
    description:
      "A Full Stack web application for a film company in Colorado. Technologies include GraphQL, Node, Express, React and API calls.",
    imageUrl: "/ColoradoFilms.png?height=200&width=300",
    link: "https://github.com/CDarts48/cofilms"
  }
]

function ProjectCard({ project }) {
  const titleLink =
    project.id === 2
      ? "https://www.tophersmandr.com/"
      : project.id === 3
      ? "https://coloradofilms.com"
      : project.link

  return (
    <div className="flex flex-col space-y-4 project-card">
      <Link href={project.id === 2 ? "https://www.tophersmandr.com/" : project.link}>
        <Image
          src={project.imageUrl}
          width={300}
          height={200}
          alt={project.title}
          className="rounded-lg object-cover"
        />
      </Link>
      <div className="content">
<h3 className="text-2xl font-bold text-black dark:text-white">
  {project.id === 1 || project.id === 2 || project.id === 3 ? (
    <Link
      href={titleLink}
      className="text-xl text-white dark:text-white hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
    >
      {project.title}
    </Link>
  ) : (
    project.title
  )}
        </h3>
        <p className="text-lg text-gray-800 dark:text-white bg-stone-100 dark:bg-black bg-opacity-80 dark:bg-opacity-30 p-4 rounded-lg">
          {project.description}
        </p>
      </div>
      <Link
        href={project.link}
        className="inline-flex h-9 items-center justify-center rounded-md border border-gray-300 dark:border-gray-200 bg-stone-100 dark:bg-stone-50 px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-stone-200 dark:hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 text-black dark:text-black"
      >
        View Website
      </Link>
    </div>
  )
}
export default function Home() {
  const form = useRef();
  const [clickCount, setClickCount] = useState(0);
  const [emailSent, setEmailSent] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
  }, []);

  // Toggle dark mode and save to localStorage
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const email = form.current.reply_to.value;
    const message = form.current.message.value;

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (message.trim() === "") {
      alert("Please enter a message.");
      return;
    }

    if (clickCount === 1) {
      emailjs.sendForm(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_YOUR_USER_ID
      )
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          setEmailSent(true);
      }, (error) => {
          console.error('Failed to send email:', error.text);
          setClickCount(0);
      });
    } else {
      setClickCount(1);
    }
  };

  return (
    <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''}`}>
 <header className="px-4 lg:px-6 h-14 flex items-center bg-stone-50 dark:bg-black border-b border-stone-200 dark:border-gray-800">
  <Link className="flex items-center justify-center" href="#">
    <Code className="h-6 w-6 mr-2 text-black dark:text-white" />
    <span className="font-bold text-black dark:text-white">CDArtsWebDev</span>
  </Link>
  <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
    <Link className="text-sm font-medium hover:underline underline-offset-4 text-black dark:text-white" href="#about">
      About
    </Link>
    <Link className="text-sm font-medium hover:underline underline-offset-4 text-black dark:text-white" href="#projects">
      Projects
    </Link>
    <Link className="text-sm font-medium hover:underline underline-offset-4 text-black dark:text-white" href="#contact">
      Contact
    </Link>
    {/* Dark Mode Toggle */}
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-stone-100 dark:bg-gray-800 hover:bg-stone-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? (
        <Sun className="h-5 w-5 text-yellow-500" />
      ) : (
        <Moon className="h-5 w-5 text-gray-600" />
      )}
    </button>
  </nav>
</header>
      <main className="flex-1">
      <section
  className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48"
  style={{
    backgroundImage: "url('/HeroBackground3.avif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
  {/* Content */}
  <div className="relative z-10 container px-4 md:px-6">
    <div className="flex flex-col items-center space-y-4 text-center">
      <div className="space-y-2">
        <h1 className="fontSize: '3rem' font-bold tracking-tighter drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl text-white bg-black bg-opacity-15 p-4 rounded-lg">
          Corey Donahue
        </h1>
       <p className="mx-auto max-w-[700px] text-white md:text-2xl font-extrabold drop-shadow-2xl bg-black bg-opacity-10 p-4 rounded-lg">
  Software Engineer specializing in Web Development, SaaS products, AI Integrations and Cloud Solutions
</p>
      </div>
      <div className="space-x-4">
        <Link
          href="#contact"
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 drop-shadow"
        >
          Hire Me
        </Link>
        <Link
          href="#projects"
          className="inline-flex h-9 items-center justify-center rounded-md border border-stone-200 bg-stone-50 px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-stone-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 drop-shadow text-black dark:text-white"
        >
          View Projects
        </Link>
      </div>
    </div>
  </div>
</section>        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-stone-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white">About Me</h2>
             <p className="mt-4 max-w-[700px] text-black md:text-xl dark:text-white">
              Web developer with a background in software sales, agtech, and international relations, bringing unique user-focused insights.
              Skilled in the MERN stack, Postgres database management, AI-driven data analysis, and cloud deployment, specializing in building intelligent, industry-specific applications. Also a purple belt in Jiu Jitsu 🥋🟪
            </p>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
  <div className="flex flex-col items-center">
    <Laptop className="h-8 w-8 mardi-gras-purple" />
    <h3 className="mt-2 text-lg font-bold text-black dark:text-white">
      Full-Stack Development
    </h3>
    <p className="text-lg text-gray-600 dark:text-gray-400 text-center">
      Proficient in both front-end and back-end technologies
    </p>
  </div>
  <div className="flex flex-col items-center">
<Rocket className="h-8 w-8 mardi-gras-gold" />
    <h3 className="mt-2 text-lg font-bold text-black dark:text-white">
      Cloud Solutions
    </h3>
    <p className="text-lg text-gray-600 dark:text-gray-400 text-center">
      Experienced in deploying and managing cloud infrastructure
    </p>
  </div>
  <div className="flex flex-col items-center">
                <Code className="h-8 w-8 mardi-gras-green" />
                <h3 className="mt-2 text-lg font-bold text-black dark:text-white">
      Clean Code
    </h3>
    <p className="text-lg text-gray-600 dark:text-gray-400 text-center">
      Committed to writing maintainable and efficient code
    </p>
  </div>
</div>
          </div>
        </section>
        <section
  id="projects"
  className="relative w-full py-12 md:py-24 lg:py-32"
  style={{
    backgroundImage: "url('/HeroBackground3.avif')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
  {/* Content */}
  <div className="relative z-10 container px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
      Featured Projects
    </h2>
    <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </div>
</section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-stone-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black dark:text-white">Get in Touch</h2>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="contact-section flex-1">
                {emailSent ? (
                  <p className="text-xl font-bold text-black dark:text-white">
                    Thank you for your email! I look forward to speaking with you.
                  </p>
                ) : (
                  <form ref={form} onSubmit={sendEmail} className="mt-8 w-1/2 space-y-4 flex flex-col">
<input
  className="flex-grow h-5 rounded-md border border-stone-300 dark:border-input bg-stone-50 dark:bg-gray-800 text-black dark:text-white px-3 py-2 text-sm placeholder:text-gray-500 dark:placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  placeholder="Your Name"
  name="from_name"
/>
<input
  className="flex-grow h-5 rounded-md border border-stone-300 dark:border-input bg-stone-50 dark:bg-gray-800 text-black dark:text-white px-3 py-2 text-sm placeholder:text-gray-500 dark:placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  type="email"
  placeholder="Your Email"
  name="reply_to"
/>
<textarea
  className="flex-grow min-h-[80px] rounded-md border border-stone-300 dark:border-input bg-stone-50 dark:bg-gray-800 text-black dark:text-white px-3 py-2 text-sm placeholder:text-gray-500 dark:placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
  placeholder="Your Message"
  name="message"
/>                    <button
                      type="button"
                      onClick={sendEmail}
                      className="inline-flex items-center justify-center rounded-md text-xl font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-6 py-3 text-black dark:text-white"
                    >
                      <Send className="mr-5 h-5 w-5" />
                      {clickCount === 1 ? "Click again to confirm" : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
              <div className="contact-info flex-2 space-y-4 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-black dark:text-white">Contact Information</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-400">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:CDArtsWebDev@gmail.com" className="text-black dark:text-white hover:underline">
                    CDArtsWebDev@gmail.com
                  </a>
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+17203918819" className="text-black dark:text-white hover:underline">
                    (720) 391-8819
                  </a>
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  <strong>LinkedIn:</strong>{" "}
                  <Link href="https://www.linkedin.com/in/coreydonahue21010/" className="text-black dark:text-white hover:underline">
                    linkedin.com/in/corey
                  </Link>
                </p>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  <strong>GitHub:</strong>{" "}
                  <Link href="https://github.com/CDarts48" className="text-black dark:text-white hover:underline">
                    github.com/CDarts48
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-stone-50 dark:bg-black border-stone-200 dark:border-gray-800">
  <p className="text-xs text-gray-600 dark:text-gray-400">© 2025 CDArtsWebDev. All rights reserved.</p>
  <nav className="sm:ml-auto flex gap-4 sm:gap-6">
    <Link className="text-xs hover:underline underline-offset-4 text-black dark:text-white" href="https://github.com/CDarts48">
      GitHub
    </Link>
    <Link className="text-xs hover:underline underline-offset-4 text-black dark:text-white" href="https://www.linkedin.com/in/coreydonahue21010/">
      LinkedIn
    </Link>
  </nav>
</footer>
    </div>
  )
}