import Link from "next/link";
import TitleLine from "@/components/divider/TitleLine";

export default function About() {
    return (
        <main className="min-h-screen pt-24 pb-16 px-6 text-white">
            <div className="max-w-5xl mx-auto space-y-28">
                {/* Hero Section */}
                <section className="text-center" data-aos="zoom-in">
                    <h1 className="text-4xl text-primary font-bold mb-4 tracking-tight inline-block">
                        About
                        <TitleLine />
                    </h1>
                    <p className="text-white max-w-2xl mx-auto leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt, nisl vel sagittis efficitur, lorem turpis finibus magna, nec tempus leo nisl sed justo.
                    </p>
                </section>

                {/* Tentang Server */}
                <section className="bg-primary/5 border border-primary/20 rounded-2xl p-10 shadow-sm hover:shadow-md transition duration-300 hover:border-primary/30 space-y-6" data-aos="fade-down">
                    <h2 className="text-2xl font-bold text-primary inline-block">
                        Who Are We?
                        <TitleLine />
                    </h2>
                    <p className="text-white leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum, purus non interdum pretium, metus massa tincidunt nulla, vel cursus erat risus at enim.
                    </p>
                    <ul className="list-disc list-outside pl-6 text-white space-y-2 marker:text-primary">
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Donec tristique urna sed sapien mattis tincidunt.</li>
                        <li>Vestibulum in urna vitae tellus blandit rhoncus vel non ligula.</li>
                    </ul>
                </section>

                {/* Nilai-nilai */}
                <section data-aos="fade-down">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold text-primary mb-10 inline-block">
                            RESPECT, GOOD ATTITUDE & SOCIALIZE
                            <TitleLine />
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "RESPECT",
                                description:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at pulvinar urna. In fermentum nisi in suscipit sagittis.",
                            },
                            {
                                title: "GOOD ATTITUDE",
                                description:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed convallis ex vitae arcu tincidunt, vitae iaculis purus ultrices.",
                            },
                            {
                                title: "SOCIALIZE",
                                description:
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet, arcu ac egestas faucibus, felis lacus imperdiet magna.",
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-primary/5 border border-primary/20 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300 hover:border-primary/30"
                            >
                                <h3 className="text-primary font-semibold text-lg mb-3 tracking-wide inline-block">
                                    {item.title}
                                    <TitleLine />
                                </h3>
                                <p className="text-white leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA */}
                <section className="text-center pb-5 pt-10" data-aos="zoom-in">
                    <div className="bg-primary/5 border border-primary/20 rounded-xl p-8 max-w-2xl mx-auto shadow-md">
                        <h2 className="text-primary text-2xl font-bold mb-4 inline-block">
                            Lorem Ipsum
                            <TitleLine />
                        </h2>
                        <p className="text-white max-w-xl mx-auto mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id gravida lorem, nec dapibus tortor.
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
            </div>
        </main>
    );
}