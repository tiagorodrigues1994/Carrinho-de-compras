import { useContext } from "react"

import { CartContext } from "../../contexts/cartContext"
import { Link } from "react-router-dom";


export function Cart(){
const {cart, total, removeItemCart, addItemCart} =useContext(CartContext);

    return(
        <div className="w-full max-w-7xl px-4 max-auto ">
            <h1 className="font-bold text-2xl text-center my-4">Meu carrinho</h1>
            {cart.length === 0 &&(
                <div className="flex flex-col items-center justify-center">
                    <p className="font-medium">Seu carrinho esat vazio...</p>
                    <Link
                     to='/'
                     className="bg-slate-600 my-3 p-1 px-3 text-white font-medium rounded"
                     >acessar produtos</Link>
                </div>
            )}
                {cart.map((item) =>(

                    
            <section key={item.id} className="flex items-center justify-between border-b-2 border-gray-300">
            <img
                            className="w-28 "
                            src={item.cover} alt={item.title} />
                            <strong>{item.price}</strong>
                            <div className="flex items-center justify-center gap-3">
                                <button
                                onClick={(() => removeItemCart(item))}
                                className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2">
                                    -
                                </button>
                              {item.amount}
                                <button
                                onClick={(() => addItemCart(item))}
                                className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2">
                                    +
                                </button>
                            </div>

                            <strong className="float-right">
                                subTotal: {item.total.toLocaleString("pt-BR", {

                                    style:"currency",
                                    currency:"BRL"
                                })}
                            </strong>
            </section>
                ))}
            {cart.length !== 0 && <p className="font-bold mt-4">Total:{total}</p>}
        </div>
    )
}