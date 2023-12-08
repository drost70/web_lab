// api.js
const BASE_URL = "http://localhost:8080/api";
const RESOURSE_URL = `${BASE_URL}/api/get`;

async function getAllCameras() {
    try {
        const rawResponse = await fetch(`${BASE_URL}/get`);
        const cameras = await rawResponse.json();
        return cameras;
    } catch (error) {
        console.error("HTTP ERROR: ", error);
        throw error;
    }
}

async function createCamera(camera) {
    try {
        const rawResponse = await fetch(`${BASE_URL}/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(camera),
        });
        const createdCamera = await rawResponse.json();
        return createdCamera;
    } catch (error) {
        console.error("HTTP ERROR: ", error);
        throw error;
    }
}

async function updateCamera(camera) {
    try {
        const rawResponse = await fetch(`${BASE_URL}/update`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(camera),
        });
        const updatedCamera = await rawResponse.json();
        return updatedCamera;
    } catch (error) {
        console.error("HTTP ERROR: ", error);
        throw error;
    }
}

async function deleteCameraById(id) {
    try {
        const rawResponse = await fetch(`${BASE_URL}/delete/${id}`, {
            method: "DELETE",
        });
        const result = await rawResponse.json();
        return result;
    } catch (error) {
        console.error("HTTP ERROR: ", error);
        throw error;
    }
}
