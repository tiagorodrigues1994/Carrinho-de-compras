import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
export function Header(){
    return(
        <header className="w-full px-1 bg-slate-200">
            <nav className="flex justify-between items-center w-full max-w-7xl h-14 px-5 mx-auto">
            <Link className="font-bold text-2xl" to='/'>
            Shop
           </Link>

           <Link className="relative" to='/cart'>
           <FiShoppingCart size={24} color="#121212" />
           <span className="absolute -right-3 -top-3 px-2.5 bg-sky-500 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs">
            2
           </span>
           </Link>
            </nav>
          

        </header>
    )
}