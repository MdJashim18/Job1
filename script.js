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
                  <div class="ratio ratio-16x9">
                    <img
                      src=${service.company_image}
                      class="card-img-top"
                      loading="lazy"
                      alt="..."
                    />
                  </div>
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


document.getElementById("loadDataButton").addEventListener("click", function () {
  const url = "https://job-buop.onrender.com/employee/list/";
  const employeeDataContainer = document.getElementById("employeeData");

  
  employeeDataContainer.innerHTML = "<p>Loading data...</p>";


  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
          return response.json();
      })
      .then(data => {
          employeeDataContainer.innerHTML = ""; 

          if (!Array.isArray(data) || data.length === 0) {
              employeeDataContainer.innerHTML = "<p>No employee data available.</p>";
          } else {
             
              const employeeList = data.map(employee => `
                  <div class="employee-card">
                      <img src="${employee.image}" alt="Employee Image" class="employee-image">
                      <h2>${employee.user.first_name} ${employee.user.last_name}</h2>
                      <p><strong>Username:</strong> ${employee.user.username}</p>
                      <p><strong>Email:</strong> ${employee.user.email}</p>
                      <p><strong>Mobile:</strong> ${employee.mobile_no}</p>
                  </div>
              `).join("");

              employeeDataContainer.innerHTML = employeeList; 
          }
      })
      .catch(error => {
          employeeDataContainer.innerHTML = `<p>Error loading data: ${error.message}</p>`;
      });
});








load_Job();