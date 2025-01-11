
const getparams = () => {
    const param = new URLSearchParams(window.location.search).get("id");
    console.log("Job ID:", param); 
    if (param) {
      fetch(`https://job-buop.onrender.com/Job_Listings/list/${param}`)
        .then((res) => res.json())
        .then((data) => displayDetails(data))
        .catch((err) => console.error("Error fetching job details:", err));
      console.log(data)
    } else {
      console.error("No jobId found in URL");
    }
};

  

const displayDetails = (job) => {
    const parent = document.getElementById("job_deatils");
    const div = document.createElement("div");
    div.classList.add("col-md-12", "doc-details-container");
  
    div.innerHTML = `
      <div class="card">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${job.company_image || 'placeholder.jpg'}" class="img-fluid rounded-start" alt="Job Image">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${job.title || "Job Title Not Available"}</h5>
              <p class="card-text">${job.description || "No description available for this job."}</p>
              
              <button class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    `;
    parent.appendChild(div);
};
  

getparams();
