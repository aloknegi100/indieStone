export const getProductsDB = async () => {
  const response = await fetch("http://localhost:1111/getAllProducts");
  const data = await response.json();
  return data;
};
