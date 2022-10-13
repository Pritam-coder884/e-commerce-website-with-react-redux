export const AddToCart=(data)=>{
    console.log("action is called");
    console.log(data);
    // console.warn("action is called");

    return{
        type:"Add_To_Cart",
        data:data,
    }
}
export const RemoveFromCart=(data)=>{
    console.log("action is called");
    console.log(data);

    return{
        type:"Remove_From_Cart",
        data:data,
    }
}
export const EmptyCart=(data)=>{
    console.log("action is called");
    console.log(data);

    return{
        type:"Empty_Cart",
        data:data,
    }
}