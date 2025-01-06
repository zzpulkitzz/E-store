let mongoose= require('mongoose')
const { Schema } = mongoose;
let connect=async (url)=>{
    try{
        await mongoose.connect(url)
        console.log("connected")
        return null
    }
    catch(error){
        return error
    }
}

const crateSchema = new Schema({
  fruitName: {type:String,required:[true, 'must provide name'],trim:true,maxlength:10}, // String is shorthand for {type: String}
  quantity: Number,
  inseason: Boolean
});
const complainSchema = new Schema({
    name: {type:String,required:[true, 'must provide name'],trim:true,maxlength:32}, // String is shorthand for {type: String}
    customerId: Number,
    billNo: Number,
    productName:String
  });
const productsSchema = new Schema({
    name: {type:String,required:[true, 'must provide name'],trim:true,maxlength:128}, // String is shorthand for {type: String}
    price: Number,
    delivery:String,
    applianceType:String,
    imageUrl:String
  });
const batterySchema = new Schema({
    name: {type:String,required:[true, 'must provide name'],trim:true,maxlength:128}, // String is shorthand for {type: String}
    price: Number,
    delivery:String,
    companyName:String,
    imageUrl:String
  });
const groomingSchema = new Schema({
    name: {type:String,required:[true, 'must provide name'],trim:true,maxlength:128}, // String is shorthand for {type: String}
    price: Number,
    delivery:String,
    productType:String,
    imageUrl:String,
    companyName:String
  });

const electricalsSchema = new Schema({
    name: {type:String,required:[true, 'must provide name'],trim:true,maxlength:128}, // String is shorthand for {type: String}
    price: Number,
    delivery:String,
    productType:String,
    imageUrl:String,
    companyName:String
  });
const CartSchema = new Schema({
    name: {type:String,required:[true, 'must provide name'],trim:true,maxlength:128}, // String is shorthand for {type: String}
    price: Number,
    delivery:String,
    productType:String,
    imageUrl:String,
    companyName:String,
    quantity:Number,
  });
const crate = mongoose.model('Crate', crateSchema);
const complain = mongoose.model('Complain', complainSchema);
const products = mongoose.model('Product', productsSchema);
const battery=mongoose.model('Battery', batterySchema);
const electricals=mongoose.model('Electricals', electricalsSchema);
const grooming=mongoose.model('Grooming', groomingSchema);
const cart=mongoose.model('Cart', CartSchema);
module.exports={connect,crate,complain,products,battery,electricals,grooming,cart}
