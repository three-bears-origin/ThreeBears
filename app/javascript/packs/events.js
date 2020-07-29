//function to select html elements
const selectElement = (s) => document.querySelector(s);
console.log('hi');
selectElement(".nav-bar").addEventListener("mouseenter", () => {
    selectElement(".nav-bar").classList.add("active");
});
selectElement(".nav-bar").addEventListener("mouseleave", () => {
    selectElement(".nav-bar").classList.remove("active");
});