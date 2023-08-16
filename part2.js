/// Function to fetch data from an API
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch data');
    }
}

// Event handler for the "Fetch Data" button
document.getElementById('fetchDataBtn').addEventListener('click', async () => {
    const outputElement = document.getElementById('output');
    outputElement.textContent = 'Fetching data...';

    try {
        const result = await fetchData();
        outputElement.innerHTML = `
            <p>ID: ${result.id}</p>
            <p>Title: ${result.title}</p>
            <p>Body: ${result.body}</p>
        `;
    } catch (error) {
        outputElement.textContent = 'Error fetching data';
        console.error(error);
    }
});

// Using Promise.all() to combine multiple promises
async function fetchMultipleData() {
    const urls = ['https://jsonplaceholder.typicode.com/posts/2', 'https://jsonplaceholder.typicode.com/posts/3'];

    const promises = urls.map(async url => {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Network response was not ok for URL: ${url}`);
        }
        return response.json();
    });

    try {
        const results = await Promise.all(promises);
        console.log('Multiple data fetched:', results);
    } catch (error) {
        console.error('Error fetching multiple data:', error);
    }
}

// Call the function that fetches multiple data
fetchMultipleData();
