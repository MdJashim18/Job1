const formEl = document.querySelector('.form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const formData = new FormData(formEl); // Correct capitalization
  const data = Object.fromEntries(formData.entries()); // Fix data conversion
  console.log(data); // Log the form data
  fetch('https://job-buop.onrender.com/Job_Details/applications/',{
    method:'POST',
    headers:{
      'Content-Type':'application/json',
    },
    body : JSON.stringify(data),
  })
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
});
