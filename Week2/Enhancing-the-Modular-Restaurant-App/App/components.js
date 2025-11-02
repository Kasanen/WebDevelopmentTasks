const restaurantRow = restaurant => {
  const {name, company} = restaurant;
  var createTR = document.createElement('tr');

  (createTR.innerHTML = name), company;
  return createTR;
};
