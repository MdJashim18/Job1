const getparams = () => {
  const param = new URLSearchParams(window.location.search).get("id");
  console.log("Job ID:", param); 
  if (param) {
    fetch(`https://job-buop.onrender.com/Job_Listings/list/${param}/`)
      .then((res) => res.json())
      .then((data) => displayDetails(data))
      .catch((err) => console.error("Error fetching job details:", err));
  } else {
    console.error("No jobId found in URL");
  }
};

const displayDetails = (job) => {
  const parent = document.getElementById("job_deatils");
  const div = document.createElement("div");
  div.classList.add("col-md-12", "doc-details-container");

  // Map the categories array to a string of category names
  const categories = job.categories && job.categories.length > 0
      ? job.categories.map(category => category.name).join(", ")
      : "No categories available for this job.";

  // Determine if the job is available
  const availability = job.empty && job.empty > 0 
      ? `Vacancies Available: ${job.empty}`
      : "Job is available";

  div.innerHTML = `
    <div class="card">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${job.company_image || 'placeholder.jpg'}" class="img-fluid rounded-start" alt="Job Image">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Title: ${job.title || "Job Title Not Available"}</h5>
            <p class="card-text"><strong>Description</strong>: ${job.description || "No description available for this job."}</p>
            <p class="card-text"><strong>Requirements</strong>: ${job.requirements || "No requirements available for this job."}</p>
            <p class="card-text"><strong>Location</strong>: ${job.location || "No location available for this job."}</p>
            <p class="card-text"><strong>Date Posted</strong>: ${job.date_posted || "No date posted available for this job."}</p>
            <p class="card-text"><strong>Availability</strong>: ${availability}</p>
            <p class="card-text"><strong>Categories</strong>: ${categories}</p>
            
            <a href="Apply.html?id=${job.id}" class="btn btn-primary">Apply Now</a>
          </div>
        </div>
      </div>
    </div>
  `;
  parent.appendChild(div);
};

getparams();
