// Fetch Applications and Display Them
const fetchApplications = async () => {
    const parent = document.getElementById("applications_list");
  
    try {
      // Fetch data from the API
      const response = await fetch("https://job-buop.onrender.com/Job_Details/applications/");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const applications = await response.json();
  
      // Clear existing content in the parent
      parent.innerHTML = "";
  
      // Loop through the applications and render them
      applications.forEach((application) => {
        const div = document.createElement("div");
        div.classList.add("col-md-12", "application-card");
  
        div.innerHTML = `
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-3 d-flex align-items-center justify-content-center">
                <img src="${application.resume ? 'https://via.placeholder.com/100x100.png?text=Resume' : 'https://via.placeholder.com/100x100.png?text=No+Resume'}" 
                  class="img-fluid rounded" alt="Resume Placeholder" style="width: 100px;">
              </div>
              <div class="col-md-9">
                <div class="card-body">
                  <h5 class="card-title">${application.applicant_name}</h5>
                  <p class="card-text"><strong>Email:</strong> ${application.email}</p>
                  <p class="card-text"><strong>Phone:</strong> ${application.phone_number}</p>
                  <p class="card-text"><strong>Status:</strong> ${application.status}</p>
                  <p class="card-text"><strong>Submitted On:</strong> ${new Date(application.created_at).toLocaleString()}</p>
                  <a href="${application.resume}" target="_blank" class="btn btn-sm btn-primary">View Resume</a>
                </div>
              </div>
            </div>
          </div>
        `;
        parent.appendChild(div);
      });
    } catch (error) {
      console.error("Error fetching applications:", error);
      parent.innerHTML = "<p class='text-danger'>Failed to load applications. Please try again later.</p>";
    }
};
  
  // Call the function to fetch and display the applications
fetchApplications();
  