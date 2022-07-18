const color = () => {
  const hex = Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase();
  return `#${hex}`;
};

export {
  color
};
