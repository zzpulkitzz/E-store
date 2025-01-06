'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useEffect } from "react"



export default function ShoppingCart() {
  const [cartItems, setCartItems] = useState(null)
  console.log(cartItems)
  let token=localStorage.getItem('token')==null ? null : localStorage.getItem("token")
  useEffect(()=>{
    fetch(`http://localhost:5500/products/cart`,{
                headers:{"Authorization":`Bearer ${token}`}}
                )
                .then((response)=>{
                  return response.json()
              })
              .then((response)=>{
                  console.log(response)
                  setCartItems(response)
              })
  },[0])
  const increaseQuantity = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item._id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQuantity = (id) => {
    
    setCartItems((prevItems )=>{
      console.log(prevItems)
      return prevItems.map(item =>
        item._id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
      )
    }
    )
  }

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const subtotal = cartItems==null?null:cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const tax = subtotal * 0.1 // Assuming 10% tax
  const total = subtotal + tax
  if(cartItems!=null){
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item._id} className="border-b">
                      <td className="py-4">
                        <div className="flex items-center">
                          <img src={item.imageUrl} alt={item.name} className="w-20 h-20 mr-4" />
                          <span className="font-semibold">{item.name}</span>
                        </div>
                      </td>
                      <td className="py-4">${item.price.toFixed(2)}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => decreaseQuantity(item._id)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <Input
                            type="number"
                            value={item.quantity}
                            className="w-16 mx-2 text-center"
                            readOnly
                          />
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => increaseQuantity(item._id)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <span className="mr-2">${(item.price * item.quantity).toFixed(2)}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8"
                            onClick={() => removeItem(item._id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
              <Button className="w-full mt-4" style={{ backgroundColor: "rgb(95,165,249)" }}>
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}else{
    return <h1>No items in the cart</h1>
  }
}