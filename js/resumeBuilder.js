// Biography and Header Info
var bio = {
  "name": "Stephen Malone",
  "role": "Web Developer",
  "contact": ["805-390-1491", "smalone11@my.whitworth.edu", "https://github.com/smalone11",
              "Thousand Oaks, CA"],
  "picture": "images/me.jpg",
  "welcome": "Welcome to my page!",
  "skills": ["awesome", " Python", " HTML", " CSS", " JS"]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact[0]);
var formattedEmail = HTMLemail.replace("%data%", bio.contact[1]);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact[2]);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact[3]);
var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedGithub);
$("#header").append(formattedLocation);
$("#header").append(formattedSkills);
$("#header").append(formattedWelcome);

// Work Experience
var work = {
  "present": [
    {
      "employer": "",
      "title": "",
      "dates": "",
      "location": "",
      "description": ""
    }
  ],
  "past": [
    {
      "employer": "Bank of America",
      "title": "Teller",
      "dates": "September 2014 - April 2015",
      "location": "Thousand Oaks, CA",
      "description": "I was in charge of helping out customers with monetary related transactions and informing customers about products and services that we offered."
    },
    {
      "employer": "",
      "title": "",
      "dates": "",
      "location": "",
      "description": ""
    },
    {
      "employer": "",
      "title": "",
      "dates": "",
      "location": "",
      "description": ""
    },
    {
      "employer": "",
      "title": "",
      "dates": "",
      "location": "",
      "description": ""
    }
  ]

}

var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.past[0].title);

$("#main").append(formattedWorkTitle);

//Projects
var project = {
  "current": [
    {
      "title": "",
      "dates": "",
      "image": "",
      "description": ""
    }
  ],
  "finished": [
    {
      "title": "",
      "dates": "",
      "image": "",
      "description": ""
    },
    {
      "title": "",
      "dates": "",
      "image": "",
      "description": ""
    },
    {
      "title": "",
      "dates": "",
      "image": "",
      "description": ""
    },
    {
      "title": "",
      "dates": "",
      "image": "",
      "description": ""
    },
    {
      "title": "",
      "dates": "",
      "image": "",
      "description": ""
    }
  ]
}

//Education
var education = {
  "schools": [
    {
      "name": "Whitworth University",
      "degree": "BS",
      "dates": 2011,
      "location": "Spokane, WA",
      "major": "Mathematics"
    },
    {
      "name": "Udacity",
      "degree": "Nanodegree",
      "dates": 2015,
      "location": "Online",
      "major": "Front-End Web Developer"
    }
  ],
  "onlineCourses": [
    {
      "title": "Intro to Computer Science",
      "school": "Udacity",
      "dates": 2013,
      "url": "https://www.udacity.com/course/cs101"
    },
    {
      "title": "Intro to Algorithms",
      "school": "Udacity",
      "dates": 2013,
      "url": "https://www.udacity.com/course/cs215"
    },
    {
      "title": "Intro to HTML/CSS",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/ud304-nd"
    },
    {
      "title": "How to Use Git and GitHub",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/ud775-nd"
    },
    {
      "title": "Responsive Web Design Fundamentals",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/ud893-nd"
    },
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/ud804-nd"
    }
  ]
}

var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[0].name);

$("#main").append(formattedSchoolName);

//Contecting
