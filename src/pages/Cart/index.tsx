export function Cart(){
    return(
        <div className="w-full max-w-7xl px-4 max-auto ">
            <h1 className="font-bold text-2xl text-center my-4">Meu carrinho</h1>

            <section className="flex items-center justify-between border-b-2 border-gray-300">
            <img
                            className="w-28 "
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489688005" alt="logo produto" />
                            <strong>R$1.000</strong>
                            <div className="flex items-center justify-center gap-3">
                                <button className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2">
                                    -
                                </button>
                                2
                                <button className="bg-slate-600 rounded text-white font-medium flex items-center justify-center px-2">
                                    +
                                </button>
                            </div>

                            <strong className="float-right">
                                subTotal: R$1.000
                            </strong>
            </section>
            <p className="font-bold mt-4">Total: R$1.000</p>
        </div>
    )
}