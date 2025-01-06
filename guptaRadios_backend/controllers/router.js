const express=require("express")
const routerAppliances=express.Router()
const routerElectricals=express.Router()
const routerBatteries=express.Router()
const routerGrooming=express.Router()
const routerCart=express.Router()
const app=express()
const {get_func,get_id_func,post_func,put_func,delete_id_func,get_cart_func,post_cart_func}=require("./functions")

routerAppliances.use(express.urlencoded({extended:false}))
routerElectricals.use(express.urlencoded({extended:false}))
routerBatteries.use(express.urlencoded({extended:false}))
routerGrooming.use(express.urlencoded({extended:false}))
routerCart.use(express.urlencoded({extended:false}))
routerAppliances.use(express.json())
routerElectricals.use(express.json())
routerBatteries.use(express.json())
routerGrooming.use(express.json())
routerCart.use(express.json())



routerAppliances.route("/appliances").get(get_func).post(post_func).put(put_func)
routerElectricals.route("/electricals").get(get_func).post(post_func).put(put_func)
routerBatteries.route("/battery").get(get_func).post(post_func).put(put_func)
routerGrooming.route("/grooming").get(get_func).post(post_func).put(put_func)
routerCart.route("/cart").get(get_cart_func).post(post_cart_func)
routerAppliances.route("/appliances/:id").get(get_id_func).put(put_func).delete(delete_id_func)

module.exports={routerAppliances,routerElectricals,routerGrooming, routerBatteries,routerCart}