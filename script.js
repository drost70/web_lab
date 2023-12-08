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
            <p>Price: $${(parseFloat(camera.price) || 0).toFixed(2)}</p>
            <hr>
            <button class="deleteButton" onclick="deleteCamera(${index})">Delete</button>
            <button class="editButton" onclick="showEditCameraForm(${index})">Edit</button>
        `;
        cameraDiv.dataset.index = index;
        cameraList.appendChild(cameraDiv);
    });
}

function addEditButtonEventListeners() {
    const editButtons = document.querySelectorAll(".editButton");
    editButtons.forEach((button, index) => {
        button.addEventListener("click", () => {
            showEditCameraForm(index);
        });
    });
}

document.getElementById("createCamera").addEventListener("click", () => {
    showCreateCameraForm();
});

document.getElementById("count_button").addEventListener("click", () => {
    calculateTotalPrice(cameraCollection.getCameras());
});

document.getElementById("sort_button").addEventListener("click", () => {
    sortByPrice();
});

document.getElementById("save-camera-button").addEventListener("click", () => {
    const model = document.getElementById("model").value;
    const resolution = document.getElementById("resolution").value;
    let zoom = parseInt(document.getElementById("zoom").value);
    const memoryCardType = document.getElementById("memoryCardType").value;
    let photosCount = parseInt(document.getElementById("photosCount").value);
    let price = parseFloat(document.getElementById("price").value);

    zoom = Math.max(zoom, 0);
    photosCount = Math.max(photosCount, 0);
    price = Math.max(price, 0);

    if (model && resolution && memoryCardType) {
        const newCamera = new Camera(model, resolution, zoom, memoryCardType, photosCount, price);
        addCamera(newCamera);
    } else {
        alert("Please fill in all the fields with valid non-negative values.");
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
    sortedCameras.sort((a, b) => (a.price || 0) - (b.price || 0));
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
        totalPrice += parseFloat(camera.price) || 0;
    });

    const totalPriceElement = document.getElementById("totalPrice");
    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
}

function saveCamera() {
    const model = document.getElementById("createModel").value;
    const resolution = document.getElementById("createResolution").value;
    const zoom = parseInt(document.getElementById("createZoom").value);
    const memoryCardType = document.getElementById("createMemoryCardType").value;
    const photosCount = parseInt(document.getElementById("createPhotosCount").value);
    const price = parseFloat(document.getElementById("createPrice").value);

    if (
        model &&
        resolution &&
        !isNaN(zoom) &&
        zoom >= 0 &&
        memoryCardType &&
        !isNaN(photosCount) &&
        photosCount >= 0 &&
        !isNaN(price) &&
        price >= 0
    ) {
        const newCamera = new Camera(model, resolution, zoom, memoryCardType, photosCount, price);
        addCamera(newCamera);
        cancelCreate();
    } else {
        alert("Please fill in all the fields with valid non-negative values.");
    }
}

function cancelCreate() {
    document.getElementById("createCameraForm").reset();
    document.getElementById("createCameraMenu").classList.add("hidden");
}

function showCreateCameraForm() {
    const cameraAside = document.getElementById("cameraAside");
    const cameraList = document.getElementById("cameraList");

    if (cameraAside.classList.contains("hidden")) {
        cameraAside.classList.remove("hidden");
        cameraList.classList.add("hidden");
    } else {
        cameraAside.classList.add("hidden");
        cameraList.classList.remove("hidden");
    }
}

function showEditCameraForm(index) {
    const camera = cameraCollection.getCameras()[index];
    document.getElementById("editModel").value = camera.model;
    document.getElementById("editResolution").value = camera.resolution;
    document.getElementById("editZoom").value = camera.zoom;
    document.getElementById("editMemoryCardType").value = camera.memoryCardType;
    document.getElementById("editPhotosCount").value = camera.photosCount;
    document.getElementById("editPrice").value = camera.price;

    document.getElementById("editCameraForm").dataset.editIndex = index;
    document.getElementById("editCameraMenu").classList.remove("hidden");

    document.getElementById("saveEditButton").removeEventListener("click", confirmEditCamera);
    document.getElementById("cancelEditButton").removeEventListener("click", cancelEditCamera);

    document.getElementById("saveEditButton").addEventListener("click", confirmEditCamera);
    document.getElementById("cancelEditButton").addEventListener("click", cancelEditCamera);
}

function confirmEditCamera() {
    const index = parseInt(document.getElementById("editCameraForm").dataset.editIndex);
    const model = document.getElementById("editModel").value;
    const resolution = document.getElementById("editResolution").value;
    const zoom = parseInt(document.getElementById("editZoom").value);
    const memoryCardType = document.getElementById("editMemoryCardType").value;
    const photosCount = parseInt(document.getElementById("editPhotosCount").value);
    const price = parseFloat(document.getElementById("editPrice").value);

    if (
        model &&
        resolution &&
        !isNaN(zoom) &&
        zoom >= 0 &&
        memoryCardType &&
        !isNaN(photosCount) &&
        photosCount >= 0 &&
        !isNaN(price) &&
        price >= 0
    ) {
        const updatedCamera = new Camera(model, resolution, zoom, memoryCardType, photosCount, price);
        cameraCollection.editCamera(index, updatedCamera);
        displayCameras();
        cancelEditCamera();
    } else {
        alert("Please fill in all the fields with valid non-negative values.");
    }
}

function cancelEditCamera() {
    document.getElementById("editCameraForm").reset();
    document.getElementById("editCameraMenu").classList.add("hidden");
}

function cancelSearch() {
    document.getElementById("find_input").value = "";
    displayCameras();
}

function showCameras() {
    displayCameras();
}

function fetchExistingCameras() {
    fetch('http://localhost:8080/api/get')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch existing cameras.');
            }
            return response.json();
        })
        .then(data => {
            cameraCollection.cameras = [];  
            data.forEach(cameraData => {
                const camera = new Camera(
                    cameraData.model,
                    cameraData.resolution,
                    cameraData.zoom,
                    cameraData.memoryCardType,
                    cameraData.photosCount,
                    cameraData.price
                );
                cameraCollection.addCamera(camera);
            });
            displayCameras(cameraCollection.getCameras());
        })
        .catch(error => {
            console.error('Error fetching existing cameras:', error);
        });
}

document.addEventListener('DOMContentLoaded', fetchExistingCameras);

function addCamera(cameraData) {
    fetch('http://localhost:8080/api/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cameraData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add camera.');
            }
            return response.json();
        })
        .then(data => {
            console.log('Camera added successfully:', data);

            const addedCamera = new Camera(
                data.model,
                data.resolution,
                data.zoom,
                data.memoryCardType,
                data.photosCount,
                data.price
            );

            cameraCollection.addCamera(addedCamera);
            displayCameras(cameraCollection.getCameras());
        })
        .catch(error => {
            console.error('Error adding camera:', error);
        });
}
