let cat = {
    alive: true,
    name: "Gustav"
};


function showCatName() {
    alert("Kattens namn är " + cat.name);
}

document.getElementById("showCatName").addEventListener("click", showCatName);
