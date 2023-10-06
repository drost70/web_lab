class Camera {
    constructor(model, resolution, zoom, memoryCardType, photosCount, price) {
        this.model = model;
        this.resolution = resolution;
        this.zoom = zoom;
        this.memoryCardType = memoryCardType;
        this.photosCount = photosCount;
        this.price = price;
    }
}

class CameraCollection {
    constructor() {
        this.cameras = [];
    }

    addCamera(camera) {
        this.cameras.push(camera);
    }

    editCamera(index, updatedCamera) {
        if (index >= 0 && index < this.cameras.length) {
            this.cameras[index] = updatedCamera;
        }
    }

    deleteCamera(index) {
        if (index >= 0 && index < this.cameras.length) {
            this.cameras.splice(index, 1);
        }
    }

    getCameras() {
        return this.cameras;
    }
}

const cameraCollection = new CameraCollection();

function displayCameras(camerasToDisplay) {
    const cameraList = document.getElementById("cameraList");
    cameraList.innerHTML = "";

    const cameras = camerasToDisplay || cameraCollection.getCameras();

    cameras.forEach((camera, index) => {
        const cameraDiv = document.createElement("div");
        cameraDiv.classList.add("camera-info");
        cameraDiv.innerHTML = `
            <h3>Model: ${camera.model}</h3>
            <p>Resolution: ${camera.resolution}</p>
            <p>Zoom: ${camera.zoom}</p>
            <p>Memory Card Type: ${camera.memoryCardType}</p>
            <p>Photos Count: ${camera.photosCount}</p>
            <p>Price: $${camera.price.toFixed(2)}</p>
            <hr>
            <button class="deleteButton" onclick="deleteCamera(${index})">Delete</button>
        `;
        cameraDiv.dataset.index = index;
        cameraList.appendChild(cameraDiv);
    });
}

document.getElementById("createCamera").addEventListener("click", () => {
    const model = prompt("Enter model:");
    const resolution = prompt("Enter resolution:");
    const zoom = parseInt(prompt("Enter zoom:"));
    const memoryCardType = prompt("Enter memory card type:");
    const photosCount = parseInt(prompt("Enter photos count:"));
    const price = parseFloat(prompt("Enter price:"));

    if (model && resolution && !isNaN(zoom) && memoryCardType && !isNaN(photosCount) && !isNaN(price)) {
        const newCamera = new Camera(model, resolution, zoom, memoryCardType, photosCount, price);
        cameraCollection.addCamera(newCamera);
        displayCameras();
    } else {
        alert("Please fill in all the fields with valid values.");
    }
});

document.getElementById("count_button").addEventListener("click", () => {
    calculateTotalPrice(cameraCollection.getCameras());
});

document.getElementById("save-camera-button").addEventListener("click", () => {
    const model = document.getElementById("model").value;
    const resolution = document.getElementById("resolution").value;
    const zoom = parseInt(document.getElementById("zoom").value);
    const memoryCardType = document.getElementById("memoryCardType").value;
    const photosCount = parseInt(document.getElementById("photosCount").value);
    const price = parseFloat(document.getElementById("price").value);

    if (model && resolution && !isNaN(zoom) && memoryCardType && !isNaN(photosCount) && !isNaN(price)) {
        const newCamera = new Camera(model, resolution, zoom, memoryCardType, photosCount, price);
        cameraCollection.addCamera(newCamera);
        displayCameras();
    } else {
        alert("Please fill in all the fields with valid values.");
    }
});

document.getElementById("showCameras").addEventListener("click", () => {
    const cameraAside = document.getElementById("cameraAside");
    const cameraList = document.getElementById("cameraList");

    if (cameraAside.classList.contains("hidden")) {
        cameraAside.classList.remove("hidden");
        cameraList.classList.add("hidden");
    } else {
        cameraAside.classList.add("hidden");
        cameraList.classList.remove("hidden");
    }
});

function deleteCamera(index) {
    if (confirm("Are you sure you want to delete this camera?")) {
        cameraCollection.deleteCamera(index);
        displayCameras();
    }
}

function sortByPrice() {
    const sortedCameras = [...cameraCollection.getCameras()];
    sortedCameras.sort((a, b) => a.price - b.price);
    displayCameras(sortedCameras);
}


function findCamera() {
    const findInput = document.getElementById("find_input").value.toLowerCase();

    const searchResults = cameraCollection.getCameras().filter((camera) => {
        return camera.model.toLowerCase().includes(findInput);
    });

    searchResults.sort((a, b) => a.price - b.price);

    displayCameras(searchResults);
    calculateTotalPrice(searchResults);
}

function calculateTotalPrice(cameras) {
    let totalPrice = 0;

    cameras.forEach((camera) => {
        totalPrice += camera.price;
    });

    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}


function cancelSearch() {
    document.getElementById("find_input").value = "";
    displayCameras();
}

function showCameras() {
    displayCameras();
}

function toggleAside() {
    const cameraAside = document.getElementById("cameraAside");
    cameraAside.classList.toggle("hidden");
}

displayCameras();
