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
}