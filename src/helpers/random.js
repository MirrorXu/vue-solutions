export const randomNumber = (min, max) => {
  return (min + Math.random() * (max - min)).toFixed(2);
};
