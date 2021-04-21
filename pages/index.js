import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>To Chanh Tinh CV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-gray-100">
        <header className="">
          <nav className="flex flex-wrap flex-row-reverse p-3">
            <div className="flex flex-wrap p-1 space-x-8 mr-8 rounded-lg text-gray-800 font-bold font-sans drop-shadow bg-red-100">
              <button className="hover:bg-red-300 rounded p-2 cursor-pointer active:bg-red-400 focus:outline-none">
                Home
              </button>
              <button className="hover:bg-red-300 rounded p-2 cursor-pointer active:bg-red-400 focus:outline-none">
                About Me
              </button>
              <button className="hover:bg-red-300 rounded p-2 cursor-pointer active:bg-red-400 focus:outline-none">
                Skill
              </button>
              <button className="hover:bg-red-300 rounded p-2 cursor-pointer active:bg-red-400 focus:outline-none">
                Projects
              </button>
            </div>
          </nav>

          <div className="flex justify-center mt-24">
            <div className="flex-grow-0 border-2 border-red-400 rounded-full">
              <img className="w-40" src="/img/avatar.jpg" />
            </div>
          </div>
          <div className="mt-8 text-center">
            <div className="font-bold text-2xl mt-2">To Chanh Tinh</div>
            <div className="flex text-lg mt-4 flex-col">
              <p>Software Engineer</p>
                <p>GNU/Linux & FOSS Enthusiast.</p>
            </div>
          </div>
          <div className="flex mt-8 flex-grow-0 text-center justify-center">
            <button className="m-2 p-3 w-16 h-16 rounded-full bg-white border-2 border-red-300 hover:bg-red-300 focus:outline-none active:bg-red-400">
              G
            </button>
            <button className="m-2 p-3 w-16 h-16 rounded-full bg-white border-2 border-red-300 hover:bg-red-300 focus:outline-none active:bg-red-400">
              F
            </button>
            <button className="m-2 p-3 w-16 h-16 rounded-full bg-white border-2 border-red-300 hover:bg-red-300 focus:outline-none active:bg-red-400">
              E
            </button>
          </div>
        </header>
        <div className="container mx-auto">
          <div className="flex m-24 p-12 bg-white shadow ring-2 ring-red-100">
            <div className="">
              <span className="font-bold text-xl">About me</span>
              <p>
                My name is To Chanh Tinh, i'm a software engineering student in
                Can Tho University. I'm specilize in{" "}
                <bold>Functional Programming</bold> and write{" "}
                <bold>POSIX scripts</bold>.
                <p>As a developer i'm very fond of
                DevOps culture and open-source software. Currently i'm learning
                DevOps automation tools and infrastructure as code, my plan is
                becoming a DevOps specialist by the end of my 2nd year working
                as developer.</p> 
              </p>
              <p>
                In my free time i likes to customize (or "RICE" if you famillar
                with the scene) Linux based OS and contribute code to FOSS
                community. I'm always up for learning new things, solving new
                problem. Looking forward to work with you.
              </p>
            </div>
            <div className="ml-20">
              <span className="font-bold text-xl">Contact information</span>
              <div className="flex p-2 space-x-24">
                <span className="font-bold text-md">Email:</span><p className="text-md">tchanhtinh@gmail.com</p>
              </div>
              <div className="flex p-2 space-x-24">
                <span className="font-bold text-md">Phone:</span><p className="text-md">(+84) 918 011 823</p>
              </div>
              <div className="flex p-2 space-x-24">
                <span className="font-bold text-md">Address:</span><p className="text-md">Bến Vân Đồn, Phường 14, Quận 6, TP. Hồ Chí Minh</p>
              </div>
              <div className="flex p-2 space-x-24">
                <span className="font-bold text-md">Language:</span><p className="text-md">Vietnamese, English</p>
              </div>
            </div>
          </div>
          <span className="flex font-bold text-3xl justify-center text-center uppercase">My skills</span>
          <div className="flex m-24 mt-8 p-12 bg-white shadow ring-2 ring-red-100">
            <div className="">
            <p className="font-bold">On web development</p>
            <ul>
              <li>- I'm most famillar with web development using MERN Stack.</li>
              <li>- I know how to make REST API application and microservices application.</li>
            </ul>
            <p className="font-bold">DevOps relate skills</p>
            <ul>
              <li>- I know how to containerized application using Docker and deployment application to production enviroment.</li>
              <li>- I'm comformable working with CLI (hence it's even more comforable for me than UI) and writing POSIX scripting to automation stuff.</li>
              <li>- I have a fair share knowledge in how Linux based system worked and basic networking.</li>
              <li>- I can setup simple CI pipeline with Github Actions and CI/CD on cloud platform service (Azure, Heroku, Gigalixir).</li>
            </ul>
<p className="font-bold">Other skills</p>
            <ul>
              <li>- Most of the time i don't have anyone tutor me so i can do self-learning pretty efficient. </li>
              <li>- I'm knowing a little in graphic design and visual effect, can use Adobe Illustrator and Adobe After Effect.</li>
              <li>- I have experience in troubleshooting computer problem and rescue computer system, i also know how to build a desktop case.</li>
              <li>- I can speak, read, write english pretty well, my pronunciation skill still need to improve.</li>
            </ul>
<p className="font-bold">Learning</p>
            <ul>
              <li>- I'm learing Elixir to bring the power of Erlang VM to make concurrency based application.</li>
              <li>- I'm looking to learn automation tools like Chef, Kubertenes, TravisCI.</li>
              </ul>  
              </div>
          </div>

          <span className="flex font-bold text-3xl justify-center text-center uppercase">My projects</span>
          <div className="flex m-24 mt-8 p-12 bg-white shadow ring-2 ring-red-100">
            <div className="">
            <p className="font-bold">Timeline</p>
              <ul>
                <li>- Jun 14 2019: Canopus-Showcase, work with a team as a intern in FSoft on a project that visualization OCR JSON data to web application.</li>
                <li>- Jul 14 2020: Catpaws, a simple demo how proof of work technique in blockchain work. Technology used: NodeJS as back-end, React for front-end, PostgreSQL for database and Go as REST API service for mining.</li>
                <li>- Sep 21 2020: Veternary Husbandy, a web and mobile application dictionary for veter. Technology used: NodeJS as back-end, React for front-end, PostgreSQL for database and React Native, SqLite for mobile platform.</li>
                <li>- Jan 27 2021 (Maintaining): Secit, working with a team to build website for a University Department. Technology used: NodeJS as back-end, VueJS for front-end, PostgreSQL for database.</li>
                <li>- Feb 19 2021 (Maintaining): Dotfiles-that-suckless, a personal dotfiles and scripts setup with customized version DWM window manager for Arch Linux.</li>
                <li>- Mar 24 2021 (Contribute): ytfzf, work as a contributor for ytfzf project, POSIX script that helps you find Youtube video on CLI.</li>
              </ul>
            </div>
          </div>
        </div>
        <footer>
          <div className="flex flex-col justify-center text-center text-gray-600 font-serif p-4">
            <p>Made by: TChanhTinh</p>
            <p>Powered by NextJS</p>
          </div>
        </footer>
      </body>
    </div>
  );
}
