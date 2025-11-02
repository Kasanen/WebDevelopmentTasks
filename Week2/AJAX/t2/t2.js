const requestURL = 'https://reqres.in/api/users';

async function postData() {
  const content = {
    name: 'Kake',
    job: 'Developer',
  };

  try {
    const response = await fetch(requestURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify(content),
    });

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const result = await response.json();
    console.log('Result:', result);
  } catch (err) {
    console.error('Error:', err);
  }
}

postData();
