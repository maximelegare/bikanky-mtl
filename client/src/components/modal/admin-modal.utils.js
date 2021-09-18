export const newItemErrors = (adminItemsErr) => {
    const {
      title,
      selectedCategory  
    } = adminItemsErr;
  
    const messageObj = {};
  
    if (!title) {
      messageObj.title = "Please Enter a title";
    }
    if (!selectedCategory) {
      messageObj.selectedCategory = "Please select a category";
    }
    return messageObj;
  };


  export const newCategoryErrors = (adminCategoryErr) => {
    const {
      categoryName  
    } = adminCategoryErr;
  
    const messageObj = {};
  
    if (!categoryName) {
      messageObj.categoryName = "Please Enter a Category title";
    }
    return messageObj;
  };