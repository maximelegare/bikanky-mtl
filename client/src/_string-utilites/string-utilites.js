export const capitalizeString = (string) => {
  return `${string[0].toUpperCase()}${string.substr(1, string.length)}`;
};

export const generateUID = () => {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};
