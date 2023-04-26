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

//CAROUSEL 

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

//SEARCH RESULTS.