// Change website animations
const animation = {
    // make it false to switch off fade-up animation
    animate: true,
    // animation playing duration
    duration: 150,
    // if false, animation plays everytime element comes on screen
    once: true
}
// Change your display name on tha landing display
const header = {
    name: "Gokul Giri",
}
const background = {
    // Options: Snow or Particle
    type: "Particle"
}
// Write a para about yourself here
// To update your image, go to './styles/images.css'
const section2title = "About Me"
const about = {
    paragraph: "I'm an Electrical and Electronics Engineer with good knowledge in the area of web development,Machine learning.Passionate about implementing and launching new projects.Looking to start the career in a reputed firm driven by technology."
}
// Edit your skill and the percentage you know about it
// To Add a skill, copy any one below and paste it after the last comma
const skillsBar = [
    {
        name: "HTML5",
        faClass: "fab fa-html5"
    },{
        name: "CSS3",
        faClass: "fab fa-css3"
    },{
        name: "Javascript",
        faClass: "fab fa-js"
    },{
        name: "SASS",
        faClass: "fab fa-sass"
    },{
        name: "Node",
        faClass: "fab fa-node"
    },{
        name: "Python",
        faClass: "fab fa-python"
    },{
        name: "MongodB",
        faClass: "fas fa-database"
    },{
        name: "AWS",
        faClass: "fab fa-aws"
    },{
        name: "NPM",
        faClass: "fab fa-npm"
    },{
        name: "Linux",
        faClass: "fab fa-linux"
    },{
        name:"ExpressJs",
        faClass:"fab fa-etsy"
    },{
        name:"ReactJs",
        faClass:"fab fa-react"
    }
]
const skill = [
    {type: "HTML5", level: 85},
    {type: "CSS", level: 75},
    {type: "Javascript", level: 85},
    {type: "SASS", level: 65},
    {type: "Node.Js", level: 75},
    {type: "React.Js", level: 75},
    {type: "Python", level: 75},
    {type: "MongoDb", level: 75},
    {type: "AWS", level: 55},
    {type: "NPM", level: 95},
    {type: "Linux", level: 75},
    {type: "ExpressJs", level: 75},
  ];
const section3Title = "Past Projects"
const projects = [
    {
        // Add image in './styles/images.css' in #project1
        id: "project1",
        name: "Url Shortner",
        skills: ["HTML, CSS, JS, Nodejs"],
        url: "https://github.com/Gokul-Cloud/URL-Shortner"
    },
    {
        // Add image in './styles/images.css' in #project2
        id: "project2",
        name: "Simple Blog",
        skills: ["React"],
        url: "https://github.com/Gokul-Cloud/Simple-Blog"
    },
    {
        // Add image in './styles/images.css' in #project3
        id: "project3",
        name: "Zoom clone ",
        skills: ["HTML, CSS, NodeJS"],
        url: "https://github.com/Gokul-Cloud/zoom-clone"
    },
    {
        // Add image in './styles/images.css' in #project4
        id: "project4",
        name: "Excercise Logger",
        skills: ["MERN"],
        url: "https://github.com/Gokul-Cloud/Excercise-logger"
    },
    {
        // Add image in './styles/images.css' in #project5
        id: "project5",
        name: "E-Commerce",
        skills: ["MERN"],
        url: "https://github.com/Gokul-Cloud/e-commerce"
    },
    {
        // Add image in './styles/images.css' in #project6
        id: "project6",
        name: "Social Media",
        skills: ["MERN"],
        url: "https://github.com/Gokul-Cloud/Social-media"
    },
]
// Edit your Education Activities, its name and the url. 
// You can omit freely anything if you dont have it
// To Add a Activity, copy any one below and paste it after the last comma and increment the id's Education number
const section4Title = "Education"
const items = [{
    title: "2014",
    cardTitle: "Secondary school",
    cardSubtitle:"Sri Sitaram Vidyalaya", 
    cardDetailedText:" Completed my SSLC with the percentage of 88% "
},
{
          
    title: "2016",
    cardTitle: "HighSchool",
    cardSubtitle:"Sri Sitaram Vidyalaya",
    cardDetailedText:"Completed my HSC with 75%"
},{
    
    title: "2016-2020",
    cardTitle: "College",
    cardSubtitle:"Chennai Institute of Technology", 
    cardDetailedText: "Started my bachelor in electrical and elctronics enginnering and graduated with the cgpa of 7.7"
},{
    
    title: "2019",
    cardTitle: "Nexi Labs, Hyderbad",
    cardSubtitle:"May 2019 - June 2019", 
    cardDetailedText: " I did my internship as a data science intern . I assisted the team with data wrangliing and predicting the models accuracy "
},
{
    
    title: "2020",
    cardTitle: "Guvi",
    cardSubtitle:"nov 2020 - Present", 
    cardDetailedText: "I started my adventure in the area of web develpoment MERN ."
}
];

const section5Title = "Get in Touch"
const contact = {
    pitch: "Hit me up!",
    contactUrl: ''
}

const social = {
    github: 'https://github.com/Gokul-Cloud',
    linkedin: 'https://www.linkedin.com/in/gokul-giri-658403174/',
    resume: 'https://drive.google.com/file/d/1Y9kHXyL_G0znHM8sLyvt-S3Q-ltpOBWk/view?usp=sharing'
}
// Dont change anything here
export { animation, header, background, about, skillsBar, projects, items, contact, skill, social, section2title, section3Title, section4Title, section5Title }