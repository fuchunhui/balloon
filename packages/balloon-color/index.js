const color = () => {
  const hex = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase();
  return `#${hex}`;
};

const day = () => {
  const time = Math.ceil(Math.random() * Math.pow(10, 12));
  return new Date(Number(`1${time}`));
};

export {
  color,
  day
};
