const apiUrl = "http://localhost:8088"

const getAllParks = () => fetch(`${apiUrl}/parks`).then(response => response.json())

const deletePark = (parkId) => fetch (`${apiUrl}/parks/${parkId}`, {
method: "DELETE"
});

const getAllMonuments = () => fetch(`${apiUrl}/monuments`).then(response => response.json());

const deleteMonument = (monId) => fetch (`${apiUrl}/monuments/${monId}`, {
  method: "DELETE"
});