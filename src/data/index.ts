// Data for the portfolio
import { PersonalInfo, Experience, Education, Skill, Language, Service, Article, Statistics } from '../types';

export const personalInfo: PersonalInfo = {
  name: "SaQiB",
  title: "Front End & Software Quality Assurance Engineer",
  email: "saqibmehar41@gmail.com",
  phone: "+ (92) 341-6796766",
  address: "Daska, Sialkot, Pakistan",
  socialLinks: [
    { platform: "github", url: "https://github.com/saqi21", icon: "ti-github", title: "github" },
    { platform: "linkedin", url: "https://www.linkedin.com/in/saqib-zafar-6966a7225/", icon: "ti-linkedin", title: "linkedin" },
    { platform: "facebook", url: "https://web.facebook.com/saqib.zafar.21", icon: "ti-facebook", title: "facebook" },
    { platform: "instagram", url: "https://www.instagram.com/saaqi_zafar/", icon: "ti-instagram", title: "instagram" }
  ]
};

export const experiences: Experience[] = [
  {
    title: "Software Quality Assurance Engineer",
    company: "Devsloop",
    period: "2022 - Present",
    location: "Gujranwala, Punjab, Pakistan",
    description: "As an SQA at Devsloop, I've successfully executed comprehensive test plans for projects such as EasyLalma, Beambox, and DoubleList.Notable achievements include efficient defect management,rigorous regression testing, and the implementation of automation frameworks. I bring a collaborative approach, process optimization skills, and accurate documentation practices to ensure software quality and project success."
  },
  {
    title: "Ruby on Rails Internship",
    company: "Devsloop",
    period: "07/2022 - 11/2022",
    location: "Gujranwala, Punjab, Pakistan",
    description: "My achievements align with the Ruby on Rails internship. I've developed and maintained RESTful APIs, contributed to Agile projects, and resolved critical issues for enhanced system stability. Excited to apply and grow these skills in the internship at Devsloop."
  },
  {
    title: "Front End Developer",
    company: "Shoretec Solutions",
    period: "06/2020 - 05/2022",
    location: "Remote Work",
    description: "My achievements align with the Shoretec Solutions Front-End Developer role on PHP projects. I bring expertise in crafting responsive interfaces and enhancing user experiences. Excited to contribute to Shoretec's software development goals."
  }
];

export const education: Education[] = [
  {
    degree: "BS Computer Science",
    institution: "GIFT University Gujranwala, Pakistan",
    period: "10/2018 - 11/2022",
    location: "Gujranwala",
    description: "I possess strong mathematical and programming skills, with a particular focus on UI development. My projects include a Complaint Management System developed in CodeIgniter3 and HTML4 and several semester projects in various programming languages.I am eager to leverage my expertise to contribute to a dynamic team and achieve success."
  },
  {
    degree: "Intermediate (Pre-Engineering)",
    institution: "Punjab Group of Collages",
    period: "09/2016 - 03/2018",
    location: "Daska",
    description: "I completed my Intermediate in 2018 in pre-engineering. I focused on studying Math and Chemistry, and I'm proud to say that I was really good at both subjects.It was a great feeling to be able to use my skills in problem-solving and critical thinking to excel in this field of study."
  },
  {
    degree: "Matriculation (Bio)",
    institution: "GOVT High School Mundeke Goraya",
    period: "09/2014 - 03/2016",
    location: "Daska",
    description: "I completed my Matric in 2016 in science bio.I was really good at math. In fact, it was one of my strongest subjects! I worked really hard to maintain good grades."
  }
];

export const skills: Skill[] = [
  { name: "UI/UX Design", icon: "ti-widget", level: 90 },
  { name: "Web Development", icon: "ti-paint-bucket", level: 95 },
  { name: "Ruby", icon: "ruby.svg", level: 85 },
  { name: "Java", icon: "java.svg", level: 80 },
  { name: "JavaScript", icon: "java-script.svg", level: 90 },
  { name: "Selenium Webdriver", icon: "selenium.png", level: 85 },
  { name: "Cypress", icon: "cypress.svg", level: 80 },
  { name: "Manual Testing", icon: "manual-testing.png", level: 95 },
  { name: "Ruby on Rails", icon: "rails.svg", level: 75 }
];

export const languages: Language[] = [
  { name: "Urdu", level: 100 },
  { name: "English", level: 90 }
];

export const services: Service[] = [
  {
    title: "Front-End Development",
    description: "I specialize in crafting responsive and intuitive user interfaces using HTML5, CSS3, JavaScript, and frameworks like Bootstrap and Tailwind CSS. With experience in projects, I ensure seamless and engaging user experiences.",
    icon: "ti-paint-bucket"
  },
  {
    title: "Software Quality Assurance",
    description: "With extensive experience in manual and automated testing, I provide comprehensive test planning, execution, and defect management. My work on projects like Beambox and DoubleList showcases my ability to deliver high-quality, bug-free software.",
    icon: "ti-write"
  },
  {
    title: "Ruby on Rails Development",
    description: "I develop and maintain robust web applications using Ruby on Rails. My internship at Devsloop allowed me to work on critical projects, improving system stability and enhancing functionality through RESTful APIs and agile methodologies.",
    icon: "ti-package"
  },
  {
    title: "Responsive Web Design",
    description: "I create visually appealing and user-friendly web designs that adapt seamlessly to different devices and screen sizes. My work at Shoretec Solutions and Devsloop highlights my ability to enhance user engagement and accessibility.",
    icon: "ti-desktop"
  },
  {
    title: "Test Automation",
    description: "I implement and maintain test automation frameworks to improve testing efficiency and coverage. My expertise ensures reliable software releases and faster time-to-market, as demonstrated in projects like Beambox.",
    icon: "ti-settings"
  },
  {
    title: "Project Collaboration",
    description: "I excel in collaborative environments, working closely with cross-functional teams to deliver successful projects. My strong communication and problem-solving skills contribute to the overall project success and client satisfaction.",
    icon: "ti-support"
  }
];

export const articles: Article[] = [
  {
    id: "1",
    title: "Unleashing Your Potential: The Power of Skill Enhancement and Stack Diversification in Software Engineering",
    description: "In this insightful article, Saqib Zafar explores the importance of continuously enhancing your skill set and diversifying your technical stack in the field of software engineering. By adapting to new technologies and methodologies, professionals can unlock their full potential and stay ahead in an ever-evolving industry.",
    image: "/assets/imgs/article01.png",
    readTime: "4 minute read",
    likes: 209,
    comments: 123,
    url: "https://www.linkedin.com/pulse/unleashing-your-potential-power-skill-enhancement-stack-saqib-zafar-5hknf/?trackingId=SnOG3Q%2F0SgaBtFwhAHYhqw%3D%3D"
  },
  {
    id: "2",
    title: "The Power of Perseverance: Never Give Up on Your Dreams",
    description: "In this motivational article, Saqib Zafar delves into the significance of perseverance and the unwavering determination required to achieve one's dreams. He shares inspiring stories and practical advice on how to stay focused and overcome obstacles, regardless of the challenges faced along the way.",
    image: "/assets/imgs/article02.jpeg",
    readTime: "3 minute read",
    likes: 158,
    comments: 72,
    url: "https://www.linkedin.com/pulse/power-perseverance-never-give-up-your-dreams-saqib-zafar-07f6f/?trackingId=SnOG3Q%2F0SgaBtFwhAHYhqw%3D%3D"
  },
  {
    id: "3",
    title: "Achieving Work-Life Balance: Prioritizing Family and Your Career",
    description: "In this insightful article, Saqib Zafar discusses the challenges and strategies of achieving a healthy work-life balance. He emphasizes the importance of prioritizing family while still excelling in your career, offering practical tips and personal anecdotes to help readers find harmony between their professional and personal lives.",
    image: "/assets/imgs/article03.png",
    readTime: "3 minute read",
    likes: 355,
    comments: 112,
    url: "https://www.linkedin.com/pulse/achieving-work-life-balance-prioritizing-family-your-career-zafar-3xepf/?trackingId=SnOG3Q%2F0SgaBtFwhAHYhqw%3D%3D"
  },
  {
    id: "4",
    title: "Embracing Change: The Key to Personal and Professional Growth",
    description: "In this insightful article, Saqib Zafar explores the transformative power of embracing change in both personal and professional spheres. He shares valuable insights on how adapting to change can foster growth, innovation, and resilience, offering practical advice and inspiring anecdotes to motivate readers.",
    image: "/assets/imgs/article04.png",
    readTime: "5 minute read",
    likes: 476,
    comments: 201,
    url: "https://www.linkedin.com/pulse/embracing-change-key-personal-professional-growth-saqib-zafar-1vx2f/?trackingId=SnOG3Q%2F0SgaBtFwhAHYhqw%3D%3D"
  },
  {
    id: "5",
    title: "The Future of Front-End Development: Emerging Trends and Technologies",
    description: "In this insightful article, Saqib Zafar explores the future of front-end development, highlighting emerging trends and technologies that are shaping the industry. From new frameworks and libraries to advancements in user experience design, this article provides a comprehensive overview of what developers can expect in the coming years.",
    image: "/assets/imgs/article05.png",
    readTime: "6 minute read",
    likes: 478,
    comments: 45,
    url: "https://www.linkedin.com/pulse/future-front-end-development-emerging-trends-saqib-zafar-eqy3f/?trackingId=ZTMuik9GS3SKPhvR6ni4yA%3D%3D"
  },
  {
    id: "6",
    title: "From Code to Perfection: How Quality Assurance Shapes the Future",
    description: "In this article, Saqib Zafar delves into the critical role of Quality Assurance in the software development lifecycle. He explains how meticulous QA processes ensure the delivery of robust and flawless software products.",
    image: "/assets/imgs/article06.png",
    readTime: "5 minute read",
    likes: 254,
    comments: 10,
    url: "https://www.linkedin.com/pulse/from-code-perfection-how-quality-assurance-shapes-future-saqib-zafar-75x4f/?trackingId=P5vGMqe%2FRzy4Mu3vgktgXw%3D%3D"
  },
  {
    id: "7",
    title: "Revolutionizing Quality Assurance: Emerging Tools and Best Practices",
    description: "Discover how cutting-edge tools and smart strategies are revolutionizing Quality Assurance in my latest article. I dive into AI-powered testing, modern automation frameworks, and proven practices like shift-left testing and BDD. Whether you're in QA or development, this read will help you level up your testing game and stay ahead in a fast-changing tech world.",
    image: "/assets/imgs/article07.png",
    readTime: "5 minute read",
    likes: 478,
    comments: 45,
    url: "https://www.linkedin.com/pulse/revolutionizing-quality-assurance-emerging-tools-best-saqib-zafar-fpflf"
  },
  {
    id: "8",
    title: "Bridging the Gap: Manual vs. Automation Testing – When and Why to Use Each",
    description: "In this article, I delve into the strategic balance between manual and automated testing in modern QA practices. I outline when to leverage manual testing for exploratory and usability assessments, and when automation is optimal for regression and CI/CD pipelines. By combining both approaches, I demonstrate how to enhance software quality, efficiency, and user satisfaction.",
    image: "/assets/imgs/article08.png",
    readTime: "3 minute read",
    likes: 254,
    comments: 10,
    url: "https://www.linkedin.com/pulse/bridging-gap-manual-vs-automation-testing-when-why-use-saqib-zafar-xuutf"
  }
];

export const statistics: Statistics = {
  hoursPerDay: 8,
  projectsFinished: 5,
  happyClients: 7,
  coffeeDrinked: 0
};
