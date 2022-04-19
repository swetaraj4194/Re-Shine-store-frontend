export const selectProducts = (state) => state.products.allProducts;

// export const getProductByCategory = (category) => (reduxState) => {
//   return reduxState.products.allProducts.filter(
//     (item) => item.categoryId === category || category === ""
//   ); // either item belongs to section OR no section was chosen
// };

export const selectCategories = (state) => state.products.categoryDetails;
