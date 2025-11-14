const API_URL = "http://localhost:3000/viagens"; 

// GET all
export async function getAllTrips() {
    const response = await fetch(API_URL);
    return response.json();
}

// GET by ID
export async function getTripById(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
}

// POST 
export async function createTrip(data) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return response.json();
}

// PUT 
export async function updateTrip(id, data) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
    return response.json();
}

// DELETE
export async function deleteTrip(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}
