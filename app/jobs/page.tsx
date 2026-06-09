import Image from "next/image";
import Link from "next/link";
import TitleLine from "@/components/divider/TitleLine";

export default function Jobs() {
    const goodside = [
        {
            name: 'Police',
            description:
                'Menegakkan hukum, menjaga ketertiban, dan melindungi warga kota. Jadilah garda terdepan dalam menghadapi kejahatan dan membangun rasa aman di masyarakat.',
            image: '/assets/img/jobs/police.png',
        },
        {
            name: 'Ambulance',
            description:
                'Tangani situasi darurat medis dengan cepat. Selamatkan nyawa, berikan pertolongan pertama, dan rawat warga yang membutuhkan bantuan kesehatan.',
            image: '/assets/img/jobs/ambulance.png',
        },
        {
            name: 'Mechanic',
            description:
                'Ahli permesinan dan otomotif. Bantu warga memperbaiki kendaraan, modifikasi mobil, dan pastikan semua tetap berjalan di jalanan kota.',
            image: '/assets/img/jobs/mechanic.png',
        },
        {
            name: 'HOT DOG',
            description:
                'Bangun usaha kaki lima dan jadi pengusaha kuliner. Jual hot dog lezat di berbagai sudut kota, dan ciptakan interaksi seru lewat peran unikmu.',
            image: '/assets/img/jobs/hot-dog.png',
        },
        {
            name: 'REPORTER',
            description:
                'Jadilah suara kota. Liput kejadian penting, wawancarai tokoh masyarakat, dan sebarkan berita melalui siaran langsung atau artikel.',
            image: '/assets/img/jobs/reporter.png',
        },
        {
            name: 'GOVERNMENT',
            description:
                'Pimpin kota menuju masa depan. Ambil peran dalam pemerintahan, tetapkan kebijakan publik, dan buat keputusan besar untuk kesejahteraan rakyat.',
            image: '/assets/img/jobs/government.png',
        },
    ];
    
    const badside = [
        {
            name: 'The Lost MC',
            description:
                'Klub motor berjiwa bebas yang hidup di luar hukum. Kuasai jalanan, kembangkan bisnis ilegal, dan bangun reputasi sebagai geng motor paling ditakuti.',
            image: '/assets/img/jobs/the-lost-mc.png',
        },
        {
            name: 'Ballas',
            description:
                'Geng jalanan legendaris yang mendominasi wilayah kekuasaan. Bangun kekuatan lewat perdagangan gelap, konflik geng, dan jaringan bawah tanah.',
            image: '/assets/img/jobs/ballas.png',
        },
        {
            name: 'Vagos',
            description:
                'Organisasi kriminal kuat dengan struktur yang solid. Jalankan operasi berbahaya, jaga wilayahmu, dan rebut kontrol kota dari geng pesaing.',
            image: '/assets/img/jobs/vagos.png',
        },
    ];

    return (
        <main className="min-h-screen pt-24 px-6 lg:px-12 text-white">
            <section className="text-center mb-20" data-aos="zoom-in">
                <h1 className="text-primary text-4xl font-bold mb-4 inline-block">
                    Jobs
                    <TitleLine />
                </h1>
                <p className="text-white max-w-2xl mx-auto">
                    Temukan berbagai pekerjaan di dunia roleplay kami — dari penegak hukum hingga organisasi jalanan. Pilih jalur hidupmu dan ciptakan cerita unikmu di dalam kota!
                </p>
            </section>

            {/* GOODSIDE */}
            <section className="mb-32" data-aos="fade-down">
                <div className="text-center mb-12">
                    <h2 className="text-3xl inline-block">
                        GOODSIDE
                        <TitleLine />
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {goodside.map((job, i) => (
                        <div key={i} className="relative w-full h-80 [perspective:1000px]">
                            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">

                                {/* FRONT */}
                                <div className="absolute w-full h-full rounded-full backface-hidden bg-primary/5 border border-primary/30 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
                                    <div className="w-50 h-50 flex items-center justify-center overflow-hidden mb-4">
                                        <Image
                                            src={job.image}
                                            alt={job.name}
                                            width={600}
                                            height={400}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center justify-end text-center">
                                        <h3 className="text-xl font-semibold text-white">
                                            {job.name}
                                            <TitleLine />
                                        </h3>
                                    </div>
                                </div>

                                {/* BACK */}
                                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-primary/5 border border-primary/30 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden mb-4 border border-primary/20">
                                        <Image
                                            src={job.image}
                                            alt={job.name}
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{job.name}</h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">{job.description}</p>
                                    <div className="mt-4">
                                        <button className="px-4 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/30 text-white text-sm rounded-full transition-all">
                                            Learn more
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* BADSIDE */}
            <section className="mb-32" data-aos="fade-down">
                <div className="text-center mb-12">
                    <h2 className="text-3xl inline-block">
                        BADSIDE
                        <TitleLine />
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {badside.map((job, i) => (
                        <div key={i} className="relative w-full h-80 [perspective:1000px]">
                            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">

                                {/* FRONT */}
                                <div className="absolute w-full h-full rounded-full backface-hidden bg-primary/5 border border-primary/30 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
                                    <div className="w-50 h-50 flex items-center justify-center overflow-hidden mb-4">
                                        <Image
                                            src={job.image}
                                            alt={job.name}
                                            width={600}
                                            height={400}
                                            className="max-h-full max-w-full object-contain"
                                        />
                                    </div>
                                    <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-center justify-end text-center">
                                        <h3 className="text-xl font-semibold text-white">
                                            {job.name}
                                            <TitleLine />
                                        </h3>
                                    </div>
                                </div>

                                {/* BACK */}
                                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-primary/5 border border-primary/30 backdrop-blur-md p-6 rounded-xl shadow-lg flex flex-col items-center justify-center text-center">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden mb-4 border border-primary/20">
                                        <Image
                                            src={job.image}
                                            alt={job.name}
                                            width={600}
                                            height={400}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2">{job.name}</h3>
                                    <p className="text-sm text-gray-300 leading-relaxed">{job.description}</p>
                                    <div className="mt-4">
                                        <button className="px-4 py-2 bg-primary/20 hover:bg-primary/30 border border-primary/30 text-white text-sm rounded-full transition-all">
                                            Learn More
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="text-center pb-5 pt-10" data-aos="zoom-in">
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 max-w-2xl mx-auto shadow-md">
                    <h2 className="text-primary text-2xl font-bold mb-4 inline-block">
                        Bergabunglah Bersama Kami
                        <TitleLine />
                    </h2>
                    <p className="text-white max-w-xl mx-auto mb-6">
                        Jadilah bagian dari Balinese Roleplay dan mulailah perjalananmu di dunia yang penuh cerita, komunitas yang solid, dan pengalaman bermain yang tak terlupakan.
                    </p>
                    <Link
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm sm:text-base btn-gradient-primary rounded-full text-white font-medium shadow-glow-sm hover:shadow-glow-md transition-all duration-300 transform hover:scale-105"
                    >
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                        </svg>
                        Join Discord
                    </Link>
                </div>
            </section>
        </main>
    );
}