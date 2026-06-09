import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen overflow-hidden flex items-center pt-10 md:pt-16">
            <div className="z-10 max-w-7xl mx-auto px-6 lg:px-20 w-full flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Right Image (shown first on mobile) */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2" data-aos="zoom-in">
                    <Image
                        src="/assets/img/logo.png"
                        alt="Logo Hero"
                        width={500}
                        height={500}
                        className="w-48 md:w-100 h-auto object-contain"
                    />
                </div>

                {/* Left Text (below image on mobile) */}
                <div className="w-full md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start order-2 md:order-1 -mt-6 sm:-mt-8 md:mt-0" data-aos="fade-right">
                    <h1 className="text-4xl md:text-6xl text-white mb-6 leading-tight">
                        #BALINESE <span className="text-primary">ROLEPLAY</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white mb-3 md:mb-5 max-w-md md:max-w-none leading-relaxed">
                        Bergabunglah dalam petualangan roleplay terbesar di Indonesia. Ciptakan karakter unikmu dan jalani kehidupan virtual yang menarik bersama ribuan pemain lainnya.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        {/* Join Discord */}
                        <Link
                            href="https://discord.com/invite/SbxjyER42R"
                            className="btn-gradient-primary inline-flex items-center gap-2 px-5 py-3 text-sm sm:text-base rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            {/* Discord Icon */}
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                                <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                            </svg>
                            Join Discord
                        </Link>

                        {/* Mulai Bermain */}
                        <Link
                            href="#status"
                            className="btn-outline-primary inline-flex items-center gap-2 px-5 py-3 text-sm sm:text-base rounded-full text-white font-medium transition-all duration-300 transform hover:scale-105"
                        >
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0001 14V11H13.0001V14H18.0001C18.5524 14 19.0001 14.4477 19.0001 15V21C19.0001 21.5523 18.5524 22 18.0001 22H6.00015C5.44786 22 5.00015 21.5523 5.00015 21V15C5.00015 14.4477 5.44786 14 6.00015 14H11.0001ZM2.51074 8.83686C3.83432 4.86424 7.58275 2 12.0001 2C16.4176 2 20.166 4.86424 21.4896 8.83686L19.5917 9.46949C18.5328 6.29139 15.5341 4 12.0001 4C8.46623 4 5.46749 6.29139 4.40862 9.46949L2.51074 8.83686ZM6.3065 10.1021C7.10065 7.71854 9.34971 6 12.0001 6C14.6506 6 16.8996 7.71854 17.6938 10.1021L15.7959 10.7347C15.2665 9.1457 13.7671 8 12.0001 8C10.2332 8 8.73382 9.1457 8.20439 10.7347L6.3065 10.1021Z"></path>
                            </svg>
                            View Status
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}