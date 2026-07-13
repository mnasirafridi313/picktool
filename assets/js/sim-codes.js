const simData = {
    jazz: {
        service: [{ title: "Balance Check", code: "*111#", detail: "View remaining balance" }, { title: "Advance Balance", code: "*112#", detail: "Get loan balance" }],
        package: [{ title: "1 Hour Call", code: "*987#", detail: "60 minutes talk time" }, { title: "Monthly Data", code: "*117*30#", detail: "30-day internet bundle" }],
        vas: [{ title: "Tune Service", code: "*230#", detail: "Manage your ringback tunes" }]
    },
    telenor: {
        service: [{ title: "Balance Check", code: "*444#", detail: "View remaining balance" }, { title: "Advance Balance", code: "*0#", detail: "Get loan balance" }],
        package: [{ title: "Full Day Offer", code: "*223#", detail: "24-hour call & data" }, { title: "Weekly Data", code: "*345*144#", detail: "7-day internet bundle" }],
        vas: [{ title: "Smart Tunes", code: "*300#", detail: "Manage your tune" }]
    },
    zong: {
        service: [{ title: "Balance Check", code: "*222#", detail: "View remaining balance" }, { title: "Advance Balance", code: "*911#", detail: "Get loan balance" }],
        package: [{ title: "Daily Data", code: "*6464#", detail: "Access menu for daily bundles" }, { title: "Weekly SMS", code: "*700#", detail: "Weekly SMS bundle" }],
        vas: [{ title: "Zong Tunes", code: "*230#", detail: "Manage your tune" }]
    },
    ufone: {
        service: [{ title: "Balance Check", code: "*124#", detail: "View remaining balance" }, { title: "Advance Balance", code: "*456#", detail: "Get loan balance" }],
        package: [{ title: "Power Hour", code: "*99#", detail: "All-in-one hourly offer" }, { title: "Weekly Internet", code: "*7701#", detail: "Weekly data bucket" }],
        vas: [{ title: "Caller Tune", code: "*666#", detail: "Manage your tune" }]
    }
};

function showCodes() {
    const provider = document.getElementById('provider').value;
    const category = document.getElementById('category').value;
    const resultDiv = document.getElementById('results');
    
    resultDiv.innerHTML = "";
    if (provider && category) {
        const codes = simData[provider][category];
        codes.forEach(item => {
            resultDiv.innerHTML += `
                <div class="code-item">
                    <strong>${item.title}:</strong> ${item.code}<br>
                    <small>${item.detail}</small>
                </div>`;
        });
    }
}
