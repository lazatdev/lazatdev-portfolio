import Logo from '../../assets/logo.png'
import { NAV_MENU_ITEMS } from '../../Constants'
import { useState } from 'react'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return(
        <header id="header" className="py-2 bg-white">
            <div className="container px-3 md:px-5 mx-auto flex justify-between items-center flex-wrap">
                <a href="#home">
                    <img className="w-[120px]" src={Logo} alt="logo"/>
                </a>
                <button id="toggle" 
                        className="flex md:hidden flex-col items-center space-y-[3px]
                            px-3 py-2 rounded-md bg-slate-950 border-solid border-2 border-primary
                            hover:bg-primary group transition-colors duration-300
                        "
                        onClick={toggleMenu}
                >
                    <span className='bar block h-[3px] w-4 bg-primary group-hover:bg-white transition-colors duration-300'></span>
                    <span className='bar block h-[3px] w-4 bg-primary group-hover:bg-white transition-colors duration-300'></span>
                    <span className='bar block h-[3px] w-4 bg-primary group-hover:bg-white transition-colors duration-300'></span>
                </button>
                <nav className={`${isMenuOpen ? 'top-14' : '-top-full'} -z-10  md:z-10 transition-[top] duration-500
                                w-full md:w-auto -mr-3 absolute md:static left-0 bg-primary md:bg-transparent ease-in-out`}>
                    <div className="container mx-auto px-3">
                        <ul className="flex flex-col py-2 md:py-0 md:flex-row space-y-1 md:space-y-0 md:space-x-1">
                            {NAV_MENU_ITEMS.map((item, index) => (
                                <li key={index}>
                                    <a className={`${item === 'home' ? 'active' : ''} uppercase block px-3 py-2 text-center rounded-md
                                                 md:hover:text-white md:hover:bg-primary transition-colors duration-300
                                                 hover:text-primary hover:bg-secondary
                                                 `} 
                                    href={`#${item}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}