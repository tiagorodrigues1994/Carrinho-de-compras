import { BsCartPlus } from "react-icons/bs"


export function Home(){
    return(
        <div>
           <main className="w-full max-w-7xl px-4 max-auto ">
                    <h1  className="font-bold text-2xl mb-4 mt-10 text-center">Produtos em alta</h1>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
                        <section className="w-full">
                            <img
                            className="w-full rounded-lg max-h-70 mb-2"
                            src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489688005" />
                            <p className="font-medium mt-1 mb-2">Airpods Pro</p>

                            <div className="flex gap-3 items-center">
                                <strong className="text-zin-700/90">
                                    R$1000
                                </strong>
                                <button className="bg-zinc-800 p-1  rounded"><BsCartPlus size={20} color="#fff"/></button>
                            </div>
                        </section>
                    </div>
           </main>
        </div>
    )
}