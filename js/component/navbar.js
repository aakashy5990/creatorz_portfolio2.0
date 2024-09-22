document.addEventListener("DOMContentLoaded", function () {
    // Get the current path of the HTML file
    const currentPath = window.location.pathname;
    
    // Calculate how deep the current HTML file is in the folder structure
    const depth = currentPath.split('/').length - 2; // "-2" to exclude the domain and file name
    
    // Build the correct relative path to navbar.html by adding "../" based on the depth
    let navbarPath = "";
    for (let i = 0; i < depth; i++) {
        navbarPath += "../";
    }
    navbarPath += "component/navbar/navbar.html";  // Add the navbar.html at the end

    // Fetch the navbar.html and insert it into the page
    fetch(navbarPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById("main_navbar").innerHTML = data;
        })
        .catch(error => console.error('Error fetching navbar:', error));
});