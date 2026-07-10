document.addEventListener("DOMContentLoaded", function() {
    const calculateBtn = document.getElementById("calculate-btn");
    const resultDiv = document.getElementById("result");

    calculateBtn.addEventListener("click", function() {
        const assets = parseFloat(document.getElementById("total-assets").value);

        if (isNaN(assets) || assets < 0) {
            resultDiv.innerHTML = "<span style='color: red;'>Please enter a valid amount.</span>";
            return;
        }

        // Zakat rate is 2.5% (or 0.025)
        const zakat = assets * 0.025;
        
        resultDiv.innerHTML = `
            <strong style="font-size: 16px;">Zakat Due (2.5%):</strong><br>
            <span style="color: #27ae60; font-weight: bold; font-size: 24px;">
                Rs. ${Math.round(zakat).toLocaleString()} PKR
            </span>
        `;
    });
});
