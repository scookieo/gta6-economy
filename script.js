function refreshMarket() {

    const businesses = [
        "Vice City Car Wash",
        "Downtown Nightclub",
        "Import Garage",
        "Luxury Apartments",
        "Street Racing Hub"
    ];

    const vehicles = [
        "Armored SUV",
        "Supercar X",
        "Off-Road Beast",
        "Electric Hypercar",
        "Police Interceptor"
    ];

    const randomBusiness = businesses[Math.floor(Math.random() * businesses.length)];
    const randomVehicle = vehicles[Math.floor(Math.random() * vehicles.length)];

    alert(
        "Market Updated!\n\n" +
        "Top Business: " + randomBusiness + "\n" +
        "Top Vehicle: " + randomVehicle
    );

    document.querySelector(".roi").innerText = Math.floor(Math.random() * 40 + 10) + "%";

    const releaseDate = new Date("May 26, 2026");

function updateCountdown() {
    const now = new Date();
    const difference = releaseDate - now;

    const days = Math.ceil(
        difference / (1000 * 60 * 60 * 24)
    );

    const countdown = document.getElementById("countdown");

    if (days > 0) {
        countdown.textContent = `${days} Days Remaining`;
    } else {
        countdown.textContent = "GTA 6 Released!";
    }
}

updateCountdown();
}