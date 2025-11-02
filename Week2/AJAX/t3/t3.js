const okURL = 'https://reqres.in/api/users';
const falseURL = 'https://reqres.in/api/unknown/23';
const userId = 2;

async function getData(requestURL) {
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

async function postData(requestURL) {
  const content = {
    name: 'Kake',
    job: 'Developer',
  };

  try {
    const response = await fetch(`${requestURL}/${userId}`, {
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

async function putData(requestURL) {
  const content = {
    name: 'Kake',
    job: 'Software Engineer',
  };

  try {
    const response = await fetch(`${requestURL}/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1',
      },
      body: JSON.stringify(content),
    });

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const answer = await response.json();
    console.log('Result:', answer);
  } catch (err) {
    console.error('Error:', err);
  }
}

async function deleteData(requestURL) {
  try {
    const response = await fetch(`${requestURL}/${userId}`, {
      method: 'DELETE',
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });

    if (response.ok) {
      console.log('Delete: ' + userId);
    } else {
      console.error('Failed to delete: ' + userId, response.status);
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

// For better observation. This will print in order
async function runAllOperations() {
  try {
    await getData(okURL);
    await getData(falseURL);
    await postData(okURL);
    await putData(okURL);
    await deleteData(okURL);
  } catch (error) {
    console.error('Error in operations:', error);
  }
}

runAllOperations();
