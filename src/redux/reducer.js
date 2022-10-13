// reducer part


export const CartData = (data = [], action) => {
  switch (action.type) {
    case "Add_To_Cart":
      console.log("Add_To_Cart condition");
      console.log(action);
     

      return [action.data,...data];
     // This return value is used in Navbar.jsx component in result variable

    case "Remove_From_Cart":
      console.log("Remove_From_Cart condition");
      console.log(action);
      
      data.length = data.length ? data.length-1 : [];
      return [...data];

    case "Empty_Cart":
      console.log("Empty_Cart condition");
      console.log(action);
      
      data=[];
      return [...data];

    default:
      return data;
  }
};
