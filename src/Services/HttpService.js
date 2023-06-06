// Define the URL endpoint of the API
const API_URL = "https://localhost:7259";

// Function to fetch data from API
async function fetchData(url) {
  const response = await fetch(API_URL + url);
  if (!response.ok) { // server responds with an error status code
    const errorMessage = await response.text();
    throw new Error(errorMessage);
  }
  return await response.json();
}

// Function to read all items
async function readAllItems() {
  return await fetchData("/");
}

// Export the functions from the module
export { fetchData, readAllItems};

