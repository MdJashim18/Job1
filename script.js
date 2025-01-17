const load_Job = () => {
  fetch("https://job-buop.onrender.com/Job_Listings/list/")
    .then((res) => res.json())
    .then((data) => display_Job(data))
    .catch((err) => console.log(err));
};


const display_Job = (services) => {
  const parent = document.getElementById("Job-container");
  if (!parent) {
    console.error("Job-container element not found!");
    return;
  }
  parent.innerHTML = ""; 
  services.forEach((service) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <div class="card shadow h-100">
        <div class="card-body p-3 p-xl-5">
          <h3 class="card-title h5">${service.title}</h3>
          <p class="card-text">${service.description.slice(0, 140)}</p>
          <a href="JobDetails.html?id=${service.id}" class="btn btn-primary">Details</a>
        </div>
      </div>`;
    parent.appendChild(li);
  });
};





const loadCategories = () => {
  fetch("https://job-buop.onrender.com/category/categories/?format=json")
    .then((res) => res.json())
    .then((data) => {
      console.log("Categories:", data); 
      const parent = document.getElementById("drop-deg");
      parent.innerHTML = ""; 
      data.forEach((item) => {
        const li = document.createElement("li");
        li.classList.add("dropdown-item");
        li.innerText = item.name || item; 
        li.addEventListener("click", () => filterProductsByCategory(item.name || item)); 
        parent.appendChild(li);
      });
    })
    .catch((err) => console.log("Error loading categories:", err));
};



const filterProductsByCategory = (category) => {
  console.log("Filtering by category:", category);
  const formattedCategory = encodeURIComponent(category.trim());
  const apiURL = `https://job-buop.onrender.com/Job_Listings/?category=${formattedCategory}`; 

  fetch(apiURL)
    .then((res) => {
      console.log("Response status:", res.status);
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log("Filtered Data:", data); 
      document.getElementById("Job-container").innerHTML = ""; 
      display_Job(data);
    })
    .catch((err) => console.log("Error filtering by category:", err));
};










loadCategories();

load_Job();
