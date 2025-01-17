document.getElementById('jobForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    const formData = new FormData();
    formData.append('title', document.getElementById('title').value);
    formData.append('description', document.getElementById('description').value);
    formData.append('requirements', document.getElementById('requirements').value);
    formData.append('location', document.getElementById('location').value);
    formData.append('company_image', document.getElementById('company_image').files[0]);
    formData.append('categories', document.getElementById('categories').value);
    
    fetch('https://job-buop.onrender.com/Job_Listings/list/', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      alert('Job posted successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
  