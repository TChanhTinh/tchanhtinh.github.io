import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>TChanhTinh Profile</title>
        <link rel="icon" href="/img/avatar.jpg" />
      </Head>
      <body className="bg-gray-100">
        <header className="">
          <nav className="flex flex-wrap flex-row-reverse p-3">
            <div className="flex flex-wrap shadow p-1 space-x-8 mr-8 rounded-lg text-gray-800 font-bold font-sans bg-red-100 ring-1 ring-red-200">
              <button className="hover:bg-red-200 rounded p-2 cursor-pointer active:bg-red-300 focus:outline-none">
                Home
              </button>
              <a href="#about">
                <button className="hover:bg-red-200 rounded p-2 cursor-pointer active:bg-red-300 focus:outline-none">
                  About Me
                </button>
              </a>
              <a href="#skills">
                <button className="hover:bg-red-200 rounded p-2 cursor-pointer active:bg-red-300 focus:outline-none">
                  Skill
                </button>
              </a>
              <a href="#projects">
                <button className="hover:bg-red-200 rounded p-2 cursor-pointer active:bg-red-300 focus:outline-none">
                  Projects
                </button>
              </a>
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
            <a target="_blank" href="https://github.com/tchanhtinh">
              <button className="m-2 p-1 w-16 h-16 rounded-full bg-white border-2 border-red-300 hover:bg-red-300 focus:outline-none active:bg-red-400">
                <img src="/img/github.jpg" className="w-64" />
              </button>
            </a>
            <a target="_blank" href="https://facebook.com/titantwoshot">
              <button
                href="https://facebook.com/titantwoshot"
                className="m-2 p-1 w-16 h-16 rounded-full bg-white border-2 border-red-300 hover:bg-red-300 focus:outline-none active:bg-red-400"
              >
                <img src="/img/facebook.jpg" className="w-64" />
              </button>
            </a>
            <a id="about" target="_blank" href="mailto:tchanhtinh@gmail.com">
              <button className="m-2 p-1 w-16 h-16 rounded-full bg-white border-2 border-red-300 hover:bg-red-300 focus:outline-none active:bg-red-400">
                <img src="/img/gmail.webp" className="w-64" />
              </button>
            </a>
          </div>
        </header>
        <div className="container mx-auto">
          <div className="flex flex-wrap m-24 p-12 bg-white shadow ring-2 ring-red-100">
            <div className="">
              <span className="font-bold text-xl">About me</span>
              <p>
                My name is To Chanh Tinh, i'm a software engineering student in
                Can Tho University. I'm specilize in{" "}
                <bold>Functional Programming</bold> and write{" "}
                <bold>POSIX scripts</bold>.
                <p>
                  As a developer i'm very fond of DevOps culture and open-source
                  software. Currently i'm learning DevOps automation tools and
                  infrastructure as code, my plan is becoming a DevOps
                  specialist by the end of my 2nd year working as developer.
                </p>
              </p>
              <p>
                In my free time i likes to customize (or "RICE" if you famillar
                with the scene) Linux based OS and contribute code to FOSS
                community. I'm always up for learning new things, solving new
                problem. Looking forward to work with you.
              </p>
            </div>
            <div className="mt-5">
              <span className="font-bold text-xl">Contact information</span>
              <div className="flex mt-2">
                <span className="font-bold text-md">Email:</span>
                <div className="w-3"/>
                <p className="text-md">tchanhtinh@gmail.com</p>
              </div>
              <div className="flex mt-2 ">
                <span className="font-bold text-md">Phone:</span>
                <div className="w-3"/>
                <p className="text-md">(+84) 918 011 823</p>
              </div>
              <div className="flex mt-2 ">
                <span className="font-bold text-md">Address:</span>
                <div className="w-3"/>
                <p className="text-md">
                  Bến Vân Đồn, Phường 14, Quận 6, TP. Hồ Chí Minh
                </p>
              </div>
              <div id="skills" className="flex mt-2">
                <span className="font-bold text-md">Language:</span>
                <div className="w-3"/>
                <p className="text-md">Vietnamese, English</p>
              </div>
            </div>
          </div>
          <span className="flex font-bold text-3xl justify-center text-center uppercase">
            My skills
          </span>
          <div className="flex m-24 mt-8 p-12 bg-white shadow ring-2 ring-red-100">
            <div>
              <p className="font-bold">On web development</p>
              <ul>
                <li>
                  - I'm most famillar with web development using NodeJS,
                  ReactJS, PostgreSQL stack.
                </li>
                <li>
                  - I know how to make REST API and microservices application.
                </li>
              </ul>
              <p className="font-bold">DevOps relate skills</p>
              <ul>
                <li>
                  - I know how to containerized application using Docker and
                  deployment application to production enviroment.
                </li>
                <li>
                  - I'm comformable working with CLI (hence it's even more
                  comforable for me than UI) and writing POSIX scripting to
                  automation stuff.
                </li>
                <li>
                  - I have a fair share knowledge in how Linux based system
                  worked and basic networking.
                </li>
                <li>
                  - I can setup simple CI pipeline with Github Actions and CI/CD
                  on cloud platform service (Azure, Heroku, Gigalixir).
                </li>
              </ul>
              <p className="font-bold">Other skills</p>
              <ul>
                <li>
                  - Most of the time i don't have anyone tutor me so i can do
                  self-learning pretty efficient.{" "}
                </li>
                <li>
                  - I'm knowing a little in graphic design and visual effect,
                  can use Adobe Illustrator and Adobe After Effect.
                </li>
                <li>
                  - I have experience in troubleshooting computer problem and
                  rescue computer system, i also know how to build a desktop
                  case.
                </li>
                <li>
                  - I can speak, read, write english pretty well, my
                  pronunciation skill still need to improve.
                </li>
              </ul>
              <p className="font-bold">Learning</p>
              <ul>
                <li>
                  - I'm learing Elixir to bring the power of Erlang VM for
                  making scalable concurrency based application.
                </li>
                <li id="projects">
                  - I'm looking to learn automation tools like Chef, Kubertenes,
                  TravisCI.
                </li>
              </ul>
            </div>
          </div>

          <span className="flex font-bold text-3xl justify-center text-center uppercase">
            My projects
          </span>
          <div className="flex m-24 mt-8 p-12 bg-white shadow ring-2 ring-red-100">
            <div className="">
              <p className="font-bold">Timeline</p>
              <ul className="flex flex-col space-y-2">
                <li>
                  - Jun 14 2019: Canopus-Showcase, work with a team in FSoft as
                  a intern on a project that visualization OCR JSON data to web
                  application.
                </li>
                <a
                  target="_blank"
                  className="text-blue-600"
                  href="https://github.com/tchanhtinh/catpaws"
                >
                  <li>
                    - Jul 14 2020: Catpaws, a simple demo how proof of work
                    technique in blockchain work. Technology used: NodeJS as
                    back-end, React for front-end, PostgreSQL for database and
                    Go as REST API service for mining.
                  </li>
                </a>
                <a
                  target="_blank"
                  className="text-blue-600"
                  href="https://github.com/tchanhtinh/robot"
                >
                  <li>
                    - Sep 21 2020: Veternary Husbandy, a web and mobile
                    application dictionary for veter. Technology used: NodeJS as
                    back-end, React for front-end, PostgreSQL for database and
                    React Native, SqLite for mobile platform.
                  </li>
                </a>
                <li>
                  <a
                    target="_blank"
                    className="text-blue-600"
                    href="http://se.cit.ctu.edu.vn"
                  >
                    - Jan 27 2021 (Maintaining): Secit, working with a team to
                    build website for a University Department. Technology used:
                    NodeJS as back-end, VueJS for front-end, PostgreSQL for
                    database.
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="text-blue-600"
                    href="https://github.com/tchanhtinh/dotfiles-that-suckless"
                  >
                    - Feb 19 2021 (Maintaining): Dotfiles-that-suckless, a
                    personal dotfiles and scripts setup with customized version
                    DWM window manager for Arch Linux.
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    className="text-blue-600"
                    href="https://github.com/pystardust/ytfzf"
                  >
                    - Mar 24 2021 (Contribute): ytfzf, work as a contributor for
                    ytfzf project, POSIX script that helps you find Youtube
                    video on CLI.
                  </a>
                </li>
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
