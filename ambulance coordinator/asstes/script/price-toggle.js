document.getElementById("flexSwitchCheckChecked").addEventListener("change", function() {
    const isYearly = this.checked;
    const monthlyPrices = document.querySelectorAll(".monthly-price");
    const yearlyPrices = document.querySelectorAll(".yearly-price");

    monthlyPrices.forEach(price => price.style.display = isYearly ? "none" : "block");
    yearlyPrices.forEach(price => price.style.display = isYearly ? "block" : "none");
});