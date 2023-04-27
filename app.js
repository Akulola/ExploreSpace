//THE PICK OF THE DAY FROM NAV BAR
// Get the pic-of-the-day link element from the navbar
const potdLink = document.querySelector('#pic-of-the-day a');

// Get the potd section element
const potdSection = document.querySelector('#potd');

// Add a click event listener to the pic-of-the-day link
potdLink.addEventListener('click', () => {
  // Scroll to the potd section
  potdSection.scrollIntoView({ behavior: 'smooth' });
});
//ACTIONS FROM THE SUBMIT BUTTON ON NAV BAR.

//PHOTO OF THE DAY.
// Fetch the photo of the day from NASA APOD API
fetch('https://api.nasa.gov/planetary/apod?api_key=1DF4WOFyAGA5G2hUd87vzhuyoEv9dGq7GiHBWKmW')
  .then(response => response.json())
  .then(data => {
    // Update the HTML with the photo of the day and its description
    const potdImage = document.getElementById('potd-image');
    const potdTitle = document.getElementById('potd-title');
    const potdDescription = document.getElementById('potd-description');
    potdImage.src = data.url;
    potdTitle.textContent = data.title;
    potdDescription.textContent = data.explanation;
  })
  .catch(error => {
    console.error(error);
  });
//CAROUSEL 
// Get references to DOM elements
const carousel = document.querySelector('#carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.btn-prev');
const nextBtn = document.querySelector('.btn-next');

// Set up index counter for tracking current slide
let currentIndex = 0;

// Set up function to move to next slide
function moveToNextSlide() {
  // Move current slide offscreen to the left
  slides[currentIndex].style.transform = 'translateX(-100%)';

  // Increment index counter
  currentIndex++;

  // If we've reached the end of the slides, wrap back around to the beginning
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }

  // Move next slide onto the screen from the right
  slides[currentIndex].style.transform = 'translateX(0)';
}

// Set up function to move to previous slide
function moveToPrevSlide() {
  // Move current slide offscreen to the right
  slides[currentIndex].style.transform = 'translateX(100%)';

  // Decrement index counter
  currentIndex--;

  // If we've reached the beginning of the slides, wrap back around to the end
  if (currentIndex < 0) {
    currentIndex = slides.length - 1;
  }

  // Move previous slide onto the screen from the left
  slides[currentIndex].style.transform = 'translateX(0)';
}

// Add event listeners to buttons
nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToPrevSlide);

// Move initial slide onto the screen
slides[currentIndex].style.transform = 'translateX(0)';


//CAROUSEL IMAGE DETAILS.
const carouselImages = document.querySelectorAll(".slide img");
const resultTitle = document.querySelector("#result-title");
const resultDescription = document.querySelector("#result-description");

carouselImages.forEach((img) => {
  img.addEventListener("click", async () => {
    const imageAlt = img.alt;
    const response = await fetch(`https://my-json-server.typicode.com/Akulola/ExploreSpace/images?alt=${imageAlt}`);
    const [data] = await response.json();
    resultTitle.textContent = data.title;
    resultDescription.textContent = data.description;
  });
});


