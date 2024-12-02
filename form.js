// Product Array
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" }
];

// Populate Product Options
const productSelect = document.getElementById("productName");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Track Review Submissions
if (localStorage.getItem("reviewCount") === null) {
    localStorage.setItem("reviewCount", "0");
}

document.getElementById("reviewForm").addEventListener("submit", () => {
    let count = parseInt(localStorage.getItem("reviewCount"), 10);
    localStorage.setItem("reviewCount", count + 1);
});
