const finnishTime = new Date().toLocaleString('fi-FI', {
  timeZone: 'Europe/Helsinki',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

const finnishHours = new Date().toLocaleString('fi-FI', {
  timeZone: 'Europe/Helsinki',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
});

document.getElementById('target').innerHTML = `
        <p> ${navigator.appName}, ${navigator.appVersion}</p>
        <p> ${navigator.platform}</p>
        <p> ${screen.width}, ${screen.height}</p>
        <p> ${screen.availWidth}, ${screen.availHeight}</p>
        <p> ${finnishTime}</p>
        <p> ${finnishHours}</p>
    `;
