const bar = document.querySelector("#bar");
const nav = document.querySelector("#menu-items");
const cross = document.querySelector("#cross");
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.toggle('active');
    })
}
cross.addEventListener("click",()=>{
    nav.classList.toggle("active");
})
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-1");
    const priceFilter = document.querySelector(".filter select");
    const products = document.querySelectorAll(".pro");

    function filterProducts() {
        const searchText = searchInput.value.toLowerCase();
        const selectedPrice = priceFilter.value;

        products.forEach(product => {
            const productName = product.querySelector("h5").textContent.toLowerCase();
            const productPrice = parseFloat(product.querySelector("h4").textContent.replace("$", ""));

            // Check if product matches search input
            const matchesSearch = productName.includes(searchText);

            // Check if product matches selected price range
            let matchesPrice = true;
            if (selectedPrice !== "All Prices") {
                let [min, max] = selectedPrice.replace("$", "").split("_").map(Number);
                matchesPrice = productPrice >= min && productPrice <= max;
            }

            // Show or hide product
            if (matchesSearch && matchesPrice) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    }

    // Attach event listeners
    searchInput.addEventListener("input", filterProducts);
    priceFilter.addEventListener("change", filterProducts);
});
