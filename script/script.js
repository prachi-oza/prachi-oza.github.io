// add class navbarDark on navbar scroll
  // Your existing code

const header = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function highlightActiveSection() {
  const fromTop = window.scrollY + header.clientHeight;

  sections.forEach((section) => {
    const link = document.querySelector(`a[href="#${section.id}"]`);
    const sectionTop = section.offsetTop - header.clientHeight;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (fromTop >= sectionTop && fromTop <= sectionBottom) {
      navLinks.forEach((navLink) => navLink.classList.remove('active'));
      link.classList.add('active');
    }
  });

  // Add background color to navbar based on the scroll position
  if (window.scrollY > 100) {
    header.classList.add('navbarDark');
  } else {
    header.classList.remove('navbarDark');
  }
}

window.addEventListener('scroll', highlightActiveSection);

// Initial call to set the initial state
highlightActiveSection();



/*window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
       header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}*/

//for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//for smooth scrolling
//const navigation = document.querySelector(".navbar-collapse");

//const navigationHeight = navigation.offsetHeight;

//document.documentElement.style.setProperty(
  //"--scroll-padding",
  //navigationHeight + "px"
//);


// collapse navbar after click on small devices
//const navLinks = document.querySelectorAll('.nav-link')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

//for typewriter effect
const dynamicTextElement = document.getElementById('dynamic-text');
  const cursorElement = document.getElementById('cursor');
  const dynamicTexts = ["Cybersecurity Professional", "Problem Solver", "Code Reviewer"];
  let currentIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    const text = dynamicTexts[currentIndex];
    
    if (isDeleting) {
      dynamicTextElement.textContent = text.substring(0, charIndex - 1);
      charIndex--;
    } else {
      dynamicTextElement.textContent = text.substring(0, charIndex + 1);
      charIndex++;
    }

    if (charIndex === text.length + 1) {
      isDeleting = true;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      currentIndex = (currentIndex + 1) % dynamicTexts.length;
    }

    updateCursor();
  }

  function updateCursor() {
    cursorElement.style.display = isDeleting ? 'inline' : 'none';
  }

  // Call typeWriter function every 200 milliseconds (adjust the timing as needed)
  setInterval(typeWriter, 150);

//for scroll animations
function reveal() {
  var reveals = document.querySelectorAll(".reveal")
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
