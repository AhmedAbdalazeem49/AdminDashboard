// Get The Elements
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

// Function to handle click event on toggle button
function toggleMenu() {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
  main.classList.toggle("active");
}

// Call the function when click on toggle button
toggle.onclick = toggleMenu;
