// Get the current year dynamically
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = `&copy; ${currentYear} | `;

// Get the last modified date of the document
const lastModified = document.lastModified;
document.getElementById("lastModified").innerHTML = `Last Modified: ${lastModified}`;

const navIcon = document.querySelector('#ham-btn');
const navMenu = document.querySelector('#nav-links');

const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]

// Display logic
const courseSection = document.getElementById('courses');
const totalCreditsSpan = document.getElementById('totalCredits');

document.getElementById('all').addEventListener('click', () => displayCourses(courses));
document.getElementById('wdd').addEventListener('click', () => displayCourses(courses.filter(c => c.subject === 'WDD')));
document.getElementById('cse').addEventListener('click', () => displayCourses(courses.filter(c => c.subject === 'CSE')));

function displayCourses(courseArray) {
  courseSection.innerHTML = '';
  let totalCredits = 0;

  courseArray.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('card');
    if (course.completed) card.classList.add('completed');
    else card.classList.add('pending');

    card.innerHTML = `
      <h3>${course.subject} ${course.number}: ${course.title}</h3>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Description:</strong> ${course.description}</p>
      <p><strong>Tech:</strong> ${course.technology.join(', ')}</p>
      <p><strong>Status:</strong> <span class="${course.completed ? 'done' : 'pending'}">${course.completed ? '✅ Completed' : '🕒 Not Completed'}</span></p>
    `;

    courseSection.appendChild(card);
    totalCredits += course.credits;
                
  });

  totalCreditsSpan.textContent = `The total credit for this certificate is ${totalCredits}`;
}

// On load show all
window.addEventListener('DOMContentLoaded', () => displayCourses(courses));


navIcon.addEventListener('click', () => {
	navIcon.classList.toggle('show');
    navMenu.classList.toggle('show');
});
