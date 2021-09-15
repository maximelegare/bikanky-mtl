export const errMessages = (adminItemsErr) => {
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