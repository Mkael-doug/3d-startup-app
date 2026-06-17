import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
    return (
        <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine" className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
                {/* Tag do Hero */}
                <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full flex items-center justify-center">
                    <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
                        <i class='bx bx-diamond' ></i> INTRODUÇÃO
                    </div>
                </div>

                {/* Conteúdo do Hero */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wider my-8">
                    FALE COM
                    <br />
                    NOSSOS DEVS
                </h1>

                {/* Descrição do Hero */}
                <p className="text-base sm:text-md md:text-lg lg:text-xl tracking-wide text-gray-400 max-w-[30rem] lg:max-w-[35rem]">
                    A melhor maneira de alcançar pessoas em vez de pastas de spam é por meio de e-mails transacionais e de marketing em grande escala.
                </p>

                {/* Botão do Hero */}
                <div className="flex gap-4 mt-8">
                    <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]' href="#" >
                        Documentação <i class='bx bx-link-external'></i>
                    </a>

                    <a className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white' href="#" >
                        Começar <i class='bx bx-link-external'></i>
                    </a>
                </div>
            </div>

            {/* 3D do Hero */}
            <Spline data-aos="fade-zoom-in"
                data-aos-easing="ease-in-back"
                data-aos-delay="300"
                data-aos-offset="0" data-aos-duration="3000" className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full' scene="https://prod.spline.design/uzFLHRqeK5oKvpIx/scene.splinecode" />


        </main>
    )
}

export default Hero