const load_Job = () => {
  fetch("https://job-buop.onrender.com/Job_Listings/list/")
    .then((res) => res.json())
    .then((data) => display_Job(data))
    .catch((err) => console.log(err));
};

const display_Job = (services) => {
  //   console.log(services);
  services.forEach((service) => {
    const parent = document.getElementById("Job-container");
    const li = document.createElement("li");
    li.innerHTML = `
        <div class="card shadow h-100">
                  
                  <div class="card-body p-3 p-xl-5">
                    <h3 class="card-title h5">${service.title}</h3>
                    <p class="card-text">
                      ${service.description.slice(0, 140)}
                    </p>
                    <a href="JobDetails.html?id=${service.id}" class="btn btn-primary">Details</a>
                  </div>
                </div>
        `;
    parent.appendChild(li);
  });
};












load_Job();