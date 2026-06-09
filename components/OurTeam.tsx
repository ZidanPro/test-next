import Image from "next/image";
import TitleLine from "./divider/TitleLine";

const teamMembers = [
    {
        name: 'Nadya Putri',
        role: 'Administrator',
        image: '/assets/img/team/nadya.png',
    },
    {
        name: 'Gusti Agung',
        role: 'Founder & Developer',
        image: '/assets/img/team/gusti.png',
    },
    {
        name: 'Rai Mahesa',
        role: 'Moderator',
        image: '/assets/img/team/rai.png',
    },
];

export default function OurTeam() {
    return (
        <section className="py-20 px-6 text-white relative z-10" data-aos="zoom-in">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4 text-primary inline-block">
                    Our Team
                    <TitleLine />
                </h2>
                <p className="text-white/70 mb-12 max-w-2xl mx-auto">
                    Temui tim yang penuh semangat di balik Balinese Roleplay yang memastikan semuanya berjalan lancar.
                </p>

                <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    {teamMembers.map((member, i) => (
                        <div key={i} className="group bg-primary/5 rounded-xl border border-primary/20 p-6 shadow-md hover:shadow-glow-md transition-all duration-300">
                            <div className="relative w-32 h-32 mx-auto rounded-[5] overflow-hidden mb-4 border-2 border-primary/50 group-hover:scale-105 transition">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-primary">{member.name}</h3>
                            <p className="text-sm text-white">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}