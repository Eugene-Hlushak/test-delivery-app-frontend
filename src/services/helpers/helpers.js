export const countTotalPrice = data => {
  const total = data.reduce((acc, item) => {
    acc += item.price * item.quantity;

    return acc;
  }, 0);
  return total;
};

export const convertCoords = data => {
  const lat = parseFloat(data.coords.lat);
  const lng = parseFloat(data.coords.lng);
  const coordinates = { lat, lng };
  return coordinates;
};
