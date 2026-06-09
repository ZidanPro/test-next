import TitleLine from "./divider/TitleLine";

export default function SystemRequirements() {
    return (
        <section className="relative z-10 w-full py-16 px-6 md:px-12" data-aos="zoom-in">
            <div className="max-w-4xl mx-auto">
                <div className="mb-6 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-primary inline-block">
                        System Requirements
                        <TitleLine />
                    </h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm sm:text-base">
                    <div className="bg-primary/5 backdrop-blur-md border border-primary/20 p-6 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105">
                        <h2 className="text-primary font-semibold mb-3 text-lg inline-block">
                            Minimum
                            <TitleLine />
                        </h2>
                        <ul className="space-y-2 list-disc list-outside text-white marker:text-primary pl-5">
                            <li>CPU: Intel Core 2 Q6600 @ 2.40GHz / AMD Phenom 9850 @ 2.5GHz</li>
                            <li>GPU: NVIDIA 9800 GT 1GB / AMD HD 4870 1GB / Intel HD GT2</li>
                            <li>RAM: 8GB (4 may work)</li>
                            <li>HDD: 72GB + ~4GB</li>
                            <li>OS: Windows 10 (64-bit)</li>
                        </ul>
                    </div>

                    <div className="bg-primary/5 backdrop-blur-md border border-primary/20 p-6 rounded-xl shadow-md transition-all duration-300 transform hover:scale-105">
                        <h2 className="text-primary font-semibold mb-3 text-lg inline-block">
                            Recommended
                            <TitleLine />
                        </h2>
                        <ul className="space-y-2 list-disc list-outside text-white marker:text-primary pl-5">
                            <li>CPU: Intel Core i5 3470 @ 3.2GHz / AMD X8 FX-8350 @ 4GHz</li>
                            <li>GPU: NVIDIA GTX 660 2GB / AMD HD 7870 2GB</li>
                            <li>RAM: 16GB</li>
                            <li>HDD: 72GB + 8GB</li>
                            <li>OS: Windows 10/11 (64-bit)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}