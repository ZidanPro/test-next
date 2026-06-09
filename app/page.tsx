import Hero from "@/components/Hero";
import StatusServer from "@/components/StatusServer";
import SectionLine from "@/components/divider/SectionLine";
import SystemRequirements from "@/components/SystemRequirements";
import OurTeam from "@/components/OurTeam";

export default function Home() {
    return (
        <>
            <Hero />
            <SectionLine />
            <StatusServer />
            <SectionLine />
            <SystemRequirements />
            <SectionLine />
            <OurTeam />
        </>
    );
}