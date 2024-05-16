import { Link } from "react-router-dom";


export default function Header(){
    return (
        <div>
            <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto w-screen">
                <Link to={'/'}>
                    <div className="ml-5">
                        <h1 className="text-red-800 font-bold text-xl sm:text-2xl md:text-3xl cursor-pointer tracking-wide">
                            CARRITO DE COMPRAS REDUX
                        </h1>
                    </div>
                </Link>
                <ul className="flex list-none items-center space-x-6 font-semibold">
                    <Link to={'/'}>
                        <li className="cursor-pointer list-none text-red-800">Inicio</li>
                    </Link>
                    <Link to={'/cart'}>
                        <li className="cursor-pointer text-red-800">Carrito</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}