let mobilePhones = [
    {
        company: "Samsung",
        model: "SamsungA30",
        price: "40000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        company: "Samsung",
        model: "SamsungA10",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        company: "Samsung",
        model: "SamsungA20",
        price: "40000",
        camera: "40px",
        ram: "4gb",
        rom: "128gb",

    },
    {
        company: "Vivo",
        model: "VivoY20",
        price: "20000",
        camera: "40px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        company: "Vivo",
        model: "VivoY11",
        price: "20000",
        camera: "40px",
        ram: "3gb",
        rom: "32gb",

    },
    {
        company: "Vivo",
        model: "VivoY15",
        price: "30000",
        camera: "40px",
        ram: "4gb",
        rom: "64gb",

    },
    {
        company: "Motorola",
        model: "Motorola123",
        price: "5000",
        camera: "2px",
        ram: "2gb",
        rom: "32gb",

    },
    {
        company: "Iphone",
        model: "Iphone12",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        company: "Iphone",
        model: "Iphone13",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
    {
        company: "Iphone",
        model: "IphoneX",
        price: "300000",
        camera: "40px",
        ram: "8gb",
        rom: "128gb",

    },
];

let searchButton = document.getElementById("searchButton");
let searchBy = document.getElementById("searchBy");
let searchValue = document.getElementById("searchValue");
let results = document.getElementById("results");

searchButton.addEventListener("click", function () {
    let selectedOption = searchBy.value;
    let enteredValue = searchValue.value;

    let filteredMobilePhones = mobilePhones.filter(function (phone) {
        return phone[selectedOption].toLowerCase().includes(enteredValue.toLowerCase());
    });

    renderResults(filteredMobilePhones);
});

function renderResults(filteredMobilePhones) {
    results.innerHTML = "";

    if (filteredMobilePhones.length === 0) {
        results.innerHTML = "No results found.";
        return;
    }

    filteredMobilePhones.forEach(function (phone) {
        let phoneInfo = document.createElement("p");
        phoneInfo.textContent = "Model: " + phone.model + ", Company: " + phone.company + ", Price: $" + phone.price + ", Camera: " + phone.camera;
    });
};