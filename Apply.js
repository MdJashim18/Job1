document.getElementById("applicationForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  // Create a new FormData object
  const formData = new FormData();

  // Append form data to FormData object
  formData.append("job", document.getElementById("job").value);
  formData.append("company_name", document.getElementById("companyName").value);
  formData.append("employer_name", document.getElementById("employerName").value);
  formData.append("applicant_name", document.getElementById("applicantName").value);
  formData.append("email", document.getElementById("email").value);
  formData.append("phone_number", document.getElementById("phoneNumber").value);
  formData.append("resume", document.getElementById("resume").files[0]);  // Append file
  formData.append("status", document.getElementById("status").value);

  // Log data to ensure it's correct
  console.log("Form Data:", formData);

  try {
    // Send the form data to the backend using fetch
    const response = await fetch("https://job-buop.onrender.com/Job_Details/applications/", {
      method: "POST",
      body: formData,
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error(`Failed to submit application: ${response.status}`);
    }

    // Parse the response JSON
    const result = await response.json();
    alert("Application submitted successfully!");
    console.log("Response:", result);

    // Optionally reset the form
    document.getElementById("applicationForm").reset();
  } catch (error) {
    console.error("Error submitting application:", error);
    alert("Failed to submit application. Please try again later.");
  }
});
