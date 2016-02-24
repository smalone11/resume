// Biography and Header Info
var bio = {
  "name": "Stephen Malone",
  "role": " Web Developer",
  "contacts": {
    "mobile": "805-390-1491",
    "github": "smalone11",
    "linkedin": "smalone11",
    "location": "Thousand Oaks, CA"
  },
  "picture": "images/me.jpg",
  "welcome": "Welcome to my page!",
  "skills": ["Python", " HTML5", " CSS3", " JavaScript", "jQuery", "KnockoutJS", "Jasmine"]
}

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  var formattedLinkedin = HTMLlinkedin.replace("%data%", bio.contacts.linkedin);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  var formattedPic = HTMLbioPic.replace("%data%", bio.picture);
  var formattedWelcome = HTMLWelcomeMsg.replace("%data%", bio.welcome);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);

  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#header").append(formattedPic);
  $("#header").append(formattedWelcome);
  $("#topContacts").append(formattedMobile);
  $("#topContacts").append(formattedGithub);
  $("#topContacts").append(formattedLinkedin);
  $("#topContacts").append(formattedLocation);

  if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    for (var i = 0; i < bio.skills.length; i++) {
      formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
      $("#skills").append(formattedSkills);
    }
  }

  //Displays contanct info in footer
  $("#footerContacts").append(formattedMobile);
  $("#footerContacts").append(formattedGithub);
  $("#footerContacts").append(formattedLinkedin);
  $("#footerContacts").append(formattedLocation);
}


// Work Experience
var work = {
  "jobs": [
    {
      "employer": "Bank of America",
      "title": "Teller",
      "dates": "September 2014 - April 2015",
      "location": "Thousand Oaks, CA",
      "description": "In charge of processing deposits, withdrawals, money orders, and payments for both personal and business accounts. Also sold to customers a variety of products."
    },
    {
      "employer": "Tactical Marketing Concepts",
      "title": "Account Representative Leader",
      "dates": "June 2014 - July 2014",
      "location": "Tacoma, WA",
      "description": "My job was to go door-to-door and sell Century Link's services. I also was promoted to a Leader after 2 weeks on the job and helped to train new employees."
    },
    {
      "employer": "Club Z! In-Home Tutoring Services",
      "title": "Tutor",
      "dates": "August 2012 - December 2012",
      "location": "University Place, WA",
      "description": "Tutored one student in Calculus and helped to raise their grade from a D to a B."
    },
    {
      "employer": "Wells Fargo Bank",
      "title": "Teller",
      "dates": "August 2011 - May 2012",
      "location": "Burien, WA",
      "description": "In charge of processing deposits, withdrawals, money orders, and payments for both personal and business accounts. Also sold to customers a variety of products and was second in the district for the last quarter."
    },
    {
      "employer": "Whitworth University Mathematics Department",
      "title": "Grader",
      "dates": "2009 - 2011",
      "location": "Spokane, WA",
      "description": "Graded homework assignments for Calculus 1 & 2 and Discrete Math and gave feedback to the students on problems missed."
    },
    {
      "employer": "Whitworth University Summer Conferences",
      "title": "Summer Conferences Assistant",
      "dates": "May 2009 - August 2009",
      "location": "Spokane, WA",
      "description": "Worked with heads of specific conferences to plan and set up rooms and dorms needed for their event. In charge of filing and replacing any broken keys and keycards for campus dorms."
    },
    {
      "employer": "Whitworth University Mathematics Department",
      "title": "Tutor",
      "dates": "2008 - 2009",
      "location": "Spokane, WA",
      "description": "Tutored for mainly Calculus 1 & 2 students."
    },
    {
      "employer": "Best Buy",
      "title": "Media Specialist",
      "dates": "2005 - 2007",
      "location": "Thousand Oaks, CA",
      "description": "In charge of organizing and stocking shelves and customer service related tasks, such as helping customers find products and answering phone. Also was promoted to the head of the video game section and recognized for sales numbers in department."
    }
  ]
}

work.display = function() {
  for (job in work.jobs) {
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

    $("#workExperience").append(HTMLworkStart);
    $(".work-entry:last").append(formattedEmployerTitle);
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  }
}

//Projects
var project = {
  "finished": [
    {
      "title": "Portfolio",
      "dates": "June 2015",
      "image": "images/portfolio.jpg",
      "description": "A portfolio page using HTML and CSS that is responsive.",
      "url": "https://github.com/smalone11/project-1"
    },
    {
      "title": "Arcade Game",
      "dates": "August 2015",
      "image": "images/arcade-game.jpg",
      "description": "A clone of the popular arcade game Frogger."
    },
    {
      "title": "Neighborhood Map",
      "dates": "January 2016",
      "image": "images/neighborhood-map.jpg",
      "description": "A map that displays some of my favorite places around Seattle, WA."
    },
    {
      "title": "Feed Reader Testing",
      "dates": "January 2016",
      "image": "images/feed-reader.png",
      "description": "A premade application that had tests added to it for its features."
    },
    {
      "title": "Website Optimization",
      "dates": "February 2016",
      "image": "images/web-optimization.jpg",
      "description": "Optimized two websites to both load and run faster."
    }
  ]
}

project.display = function() {
  for (proj in project.finished) {
    var formattedURL = HTMLprojectURL.replace("%data%", project.finished[proj].url);
    var formattedTitle = HTMLprojectTitle.replace("%data%", project.finished[proj].title);
    var formattedDates = HTMLprojectDates.replace("%data%", project.finished[proj].dates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", project.finished[proj].description);
    var formattedImage = HTMLprojectImage.replace("%data%", project.finished[proj].image);
    var formattedURLTitle = formattedURL + formattedTitle;

    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(formattedURLTitle);
    $(".project-entry:last").append(formattedDates);
    $(".project-entry:last").append(formattedDescription);
    $(".project-entry:last").append(formattedImage);
  }
}

//Education
var education = {
  "schools": [
    {
      "name": "Whitworth University",
      "degree": "Bachelors of Science, cum laude",
      "dates": 2011,
      "location": "Spokane, WA",
      "major": "Mathematics"
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
    },
    {
      "title": "Intro to jQuery",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/ud245-nd"
    },
    {
      "title": "Object-Oriented JavaScript",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/ud015-nd"
    },
    {
      "title": "HTML5 Canvas",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/ud292-nd"
    },
    {
      "title": "Website Performance Optimization",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/ud884-nd"
    },
    {
      "title": "Browser Rendering Optimization",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/ud860-nd"
    },
    {
      "title": "Intro to AJAX",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/ud110-nd"
    },
    {
      "title": "JavaScript Design Patterns",
      "school": "Udacity",
      "dates": 2015,
      "url": "https://www.udacity.com/course/ud989-nd"
    },
    {
      "title": "JavaScript Testing",
      "school": "Udacity",
      "dates": 2016,
      "url": "https://www.udacity.com/course/ud549-nd"
    }
  ]
}

education.display = function() {
  for (college in education.schools) {
    var formattedName = HTMLschoolName.replace("%data%", education.schools[college].name);
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[college].degree);
    var formattedNameDegree = formattedName + formattedDegree;
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[college].dates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[college].location);
    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[college].major);

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedNameDegree);
    $(".education-entry:last").append(formattedDates);
    $(".education-entry:last").append(formattedLocation);
    $(".education-entry:last").append(formattedMajor);
  }

  $("#education").append(HTMLonlineClasses);

  for (course in education.onlineCourses) {
    var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
    var formattedTitleSchool = formattedURL + formattedTitle + formattedSchool;
    var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);

    $("#education").append(HTMLschoolStart);
    $(".education-entry:last").append(formattedTitleSchool);
    $(".education-entry:last").append(formattedDates);
  }
}

//Display Everything
bio.display();
work.display();
project.display();
education.display();

//Location of Clicks
$(document).click(function(loc) {
  logClicks(loc.pageX, loc.pageY);
});

//Add in Google Map
$("#mapDiv").append(googleMap);
