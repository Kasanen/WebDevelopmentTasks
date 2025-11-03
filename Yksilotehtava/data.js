const url = 'https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants';

async function getData(requestURL) {
  try {
    const response = await fetch(requestURL, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.error('Error:', err);
  }
}

async function getMenu(requestURL) {
  try {
    const response = await fetch(requestURL, {
      headers: {
        'x-api-key': 'reqres-free-v1',
      },
    });

    if (!response.ok) throw new Error(`HTTP error: ${response.status}`);

    const data = await response.json();
    return data;
  } catch (err) {
    console.error('Error:', err);
  }
}

async function fetchMenu(id) {
  const data = await getMenu(
    `https://media2.edu.metropolia.fi/restaurant/api/v1/restaurants/daily/${id}/en`
  );

  const menuItems = data.courses.map((item) => item.name);
  return menuItems;
}

async function fetchRestaurants() {
  const data = await getData(url);

  const restaurants = data.map((r) => ({
    _id: r._id,
    address: r.address,
    city: r.city,
    company: r.company,
    name: r.name,
    phone: r.phone,
    postalCode: r.postalCode,
  }));
  return restaurants;
}

async function main() {
  const restaurants = await fetchRestaurants();

  // sorting
  restaurants.sort((a, b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  // Printing out
  const table = document.querySelector('table');
  let trId = 0;

  restaurants.map((restaurant) => {
    trId++;
    table.insertAdjacentHTML(
      'beforeend',
      `
            <tr id="${trId}" onclick="clicked(this.id)" >
                <td>${restaurant.name}</td>
                <td>${restaurant.address}</td>
            </tr>
        `
    );
  });
}

main();

// Clickable
async function clicked(id) {
  const restaurants = await fetchRestaurants();

  const menu = await fetchMenu(restaurants[id - 1]._id);
  const menuHTML = menu.map((item) => `<li>${item}</li>`).join('');

  const dialog = document.querySelector('dialog');

  for (let i = 1; i < restaurants.length; i++) {
    document.getElementById(i).classList.remove('highlight');
  }
  document.getElementById(id).classList.add('highlight');

  dialog.innerHTML = '';
  dialog.insertAdjacentHTML(
    'beforeend',
    `
            <ul>
                <li>Restaurant name: ${restaurants[id - 1].name}</li>
                <li>Address: ${restaurants[id - 1].address}</li>
                <li>Postal code: ${restaurants[id - 1].postalCode}</li>
                <li>City: ${restaurants[id - 1].city}</li>
                <li>Phone number: ${restaurants[id - 1].phone}</li>
                <li>Company: ${restaurants[id - 1].company}</li>
                                <h4> WEEKLY MENU </h4>
                ${menuHTML}
                <h3>>>> Press ESC to close <<<</h3>
            </ul>
        `
  );
  dialog.showModal();
}
