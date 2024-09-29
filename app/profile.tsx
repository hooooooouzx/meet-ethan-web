"use client";

const Profile = () => {
    return (
        <div className="flex flex-col items-center p-8 bg-gradient-to-b from-blue-500 to-purple-500 text-white">
          <section className="mb-8 flex items-center">
            <img 
                src="/ethan.jpg" 
                alt="Ethan's Profile" 
                className="w-32 h-32 rounded-full border-4 border-white animate-bounce mr-4"
            />
            <div className="text-left">
                <h1 className="text-5xl font-bold">Who Am I?</h1>
                <p className="mt-2 text-xl">My name is Ethan, I am a freelancer.</p>
            </div>
            </section>

            <section className="mb-8 text-center">
                <h2 className="text-4xl font-semibold border-b-2 border-white inline-block mb-4">Contact Information</h2>
                <div className="mt-4 space-x-4">
                    <a 
                    href="https://github.com/hooooooouzx" 
                    className="text-lg hover:underline transition-all duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    GitHub
                    </a>
                    <a 
                    href="https://stackoverflow.com/users/18513405/ethan-hou" 
                    className="text-lg hover:underline transition-all duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    Stack Overflow
                    </a>
                    <a 
                    href="https://www.linkedin.com/in/ethan-hou-freelancer" 
                    className="text-lg hover:underline transition-all duration-300"
                    target="_blank" 
                    rel="noopener noreferrer"
                    >
                    LinkedIn
                    </a>
                </div>
                </section>
    
                <section className="mb-8">
            <h2 className="text-4xl font-semibold border-b-2 border-white inline-block mb-4">Recent Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                { 
                    name: 'chng.com', 
                    link: 'https://www.chng.com.cn/en/index.html', 
                    description: 'China Huaneng Group Co., Ltd. is a key state-owned company established with the approval of the State Council.' 
                },
                { 
                    name: 'Talkkia', 
                    link: 'https://talkkia.com', 
                    description: 'Talkkia is a multipurpose communication app that lets people call, chat, and share moments completely free.It is not just a variety of calling and messaging features we have, but our endless options that you will love.High quality voice and video calls' 
                },
                { 
                    name: 'Goofball', 
                    alert: true, 
                    description: 'A fun and engaging app for sharing jokes and funny content with friends.' 
                },
                { 
                    name: 'WeatherApp', 
                    alert: true, 
                    description: 'An application providing real-time weather updates and forecasts.' 
                },
                { 
                    name: 'Leetcode Log', 
                    alert: true, 
                    description: 'A tool for tracking and managing your Leetcode coding problems and progress.' 
                },
                { 
                    name: 'Blockchain', 
                    alert: true, 
                    description: 'A project exploring blockchain technology and its applications in various industries.' 
                },
                ].map((project) => (
                <div key={project.name} className="p-6 bg-white text-gray-800 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    {project.link ? (
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-4 inline-block text-blue-500 hover:underline"
                    >
                        View Project
                    </a>
                    ) : (
                    <button 
                        onClick={() => alert('Stay tuned...')} 
                        className="mt-4 inline-block text-blue-500 hover:underline"
                    >
                        View Project
                    </button>
                    )}
                </div>
                ))}
            </div>
            </section>

          <section className="mt-8 mb-8 text-center">
            <h2 className="text-4xl font-semibold border-b-2 border-white inline-block mb-4">Skills</h2>
            <ul className="mt-4 space-y-2 text-left max-w-xl mx-auto">
              {[
                'React | Next.js | Vue.js | Angular 8 | JavaScript | TypeScript',
                'Kotlin | Swift | Flutter | React Native',
                'UI/UX | Tailwind CSS | Styled Components | Sass',
                'JAVA | NodeJS | NestJS | TypeORM',
                'MySQL | MongoDB | PostgreSQL',
                'AWS Associate Solution Architect',
                'Blockchain Developer',
              ].map((skill) => (
                <li key={skill} className="transition-transform transform hover:scale-105">
                  ✅ {skill}
                </li>
              ))}
            </ul>
          </section>
    
          <footer className="text-center mt-8">
            <p>© {new Date().getFullYear()} Ethan. All rights reserved.</p>
          </footer>
        </div>
      );
  };
  
  export default Profile;
  