export default function About() {
    return (
        <section id="about" className="dark-bg container">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="UX/UI Design"
                        icon="/src/assets/images/icons/design.svg"
                        description="I create design  products with unique ideas."
                        projects={7} />
                    <AboutCard
                        title="Website Development"
                        icon="/src/assets/images/icons/code.svg"
                        description="I develop website using wordpress."
                        projects={50} />
                    <AboutCard
                        title="Web-App Programming"
                        icon="/src/assets/images/icons/code.svg"
                        description="I develop cross-platform Web applications."
                        projects={18} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Introduce</h5>
                    <h1 className="white">Hello, I&#39;m Jonathan</h1>
                    <p className="gray">I am Senior Software Engineer with over ten years of experience in web and application programming, web/graphic design, and development. Also have experience in managing a technical team providing strategic solutions, product scoping, and project implementation management.</p><br />
                    <p className="gray">Proficient in the latest web technologies such as PHP, Codeigniter, Laravel, Lumen, ReactJS, Redux-Saga, VueJS, Bootstrap, JQuery, Amazon Web Services (AWS), API integrations, Docker and Continuous Integration / Continuous Delivery (CICD).</p>
                </div>
            </div>
        </section>
    )
}

type Props = {
    title: string,
    icon: string,
    description: string,
    projects: number
}

function AboutCard ({title, icon, description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="green">{title}</h3>
                <img src={icon} width={28} height={28} alt={title} />
            </div>
            <p className="white">{description}</p>
            <span className="gray">{projects.toString()} projects</span>
        </div>
    )
}