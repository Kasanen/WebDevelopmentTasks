const requestURL = 'https://reqres.in/api/users';

async function getData() {
  try {
    const response = await fetch(requestURL, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const data = await response.json();
    console.log('Data:', data);
  } catch (err) {
    console.error('Error:', err);
  }
}

getData();
