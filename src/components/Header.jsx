import 'boxicons/css/boxicons.min.css';

const Header = () => {

    // Função para alternar o menu mobile
    const toggleMobileMenu = () => {
        // Seleciona o menu mobile
        const mobileMenu = document.getElementById('mobileMenu');
        // Alterna a classe 'hidden' para mostrar ou esconder o menu
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden');
        } else {
            mobileMenu.classList.add('hidden');
        }
    }

    return (
        <header className="flex justify-between items-center py-4 px-4 lg:px-20">
            <h1 data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500" className="text-2xl md:text-3xl lg:text-4xl font-light m-0">
                <i class='bx bx-cog'></i>
                <span className='ml-1 md:ml-2 tracking-wider'>ROBOY</span>
            </h1>

            {/* Navegação em Desktop */}
            <nav className="hidden md:flex items-center gap-8">
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">EMPRESA</a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">PRODUTOS</a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">RECURSOS</a>
                <a data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="2500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">DOC</a>
            </nav>

            <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium transition-all duration-500 hover:bg-white cursor-pointer z-50">
                ENTRAR
            </button>

            {/* Menu Hamburguer */}
            <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
                <i class='bx bx-menu-alt-right'></i>
            </button>

            {/* Menu Mobile Hidden */}
            <div id='mobileMenu' className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur-md">
                <nav className="flex flex-col items-center gap-6 mt-4">
                    <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">EMPRESA</a>
                    <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">PRODUTOS</a>
                    <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">RECURSOS</a>
                    <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#">DOCUMENTOS</a>
                </nav>
            </div>

        </header>
    )
}

export default Header