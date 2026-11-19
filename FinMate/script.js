const incomeLink = document.querySelector('[data-page="income"]');
const incomeSection = document.querySelector("#income");

incomeLink.addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#dashboard").classList.remove("active");
    incomeSection.classList.add("active");
    document.querySelector("#page-title").textContent = "Income";

});
const dashboardLink = document.querySelector('[data-page="dashboard"]');

dashboardLink.addEventListener("click", function (event) {
    event.preventDefault();
    incomeSection.classList.remove("active");

    document.querySelector("#dashboard").classList.add("active");
    document.querySelector("#page-title").textContent = "Dashboard";

});