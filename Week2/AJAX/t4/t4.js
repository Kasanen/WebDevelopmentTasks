async function fetchData(url, options) {
  try {
    const response = await fetch(`${url}`, {
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: options.body,
    });

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    if (response.status === 201) {
      console.log('Resource created successfully (201)');
    } else if (response.status === 200) {
      console.log('Request successful (200)');
    }

    const answer = await response.json();
    return answer;
  } catch (err) {
    console.error('Error:', err);
  }
}

async function taskFunction() {
  try {
    const user = {
      name: 'John Doe',
      job: 'Developer',
    };
    const url = 'https://reqres.in/api/users';
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    };
    const userData = await fetchData(url, options);
    console.log(userData);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

taskFunction();
