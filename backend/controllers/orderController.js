import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";


// placing orders using cod method
const placeOrder = async (req,res) => {

    try {

        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:"COD",
            payment:false,
            date:Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({succes:true,message:"Order Place"})
        
    } catch (error) {
        console.log(error);
        res.json({succes:false,message:error.message})
    }

}

// placing orders using cod method
const allOrders = async (req,res) => {
    
}

// placing orders using cod method
const userOrders = async (req,res) => {
    
}

// placing orders using cod method
const UpdateStatus = async (req,res) => {
    
}

export {placeOrder,allOrders,userOrders,UpdateStatus}