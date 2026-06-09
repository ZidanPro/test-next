export default function SectionLine() {
    return (
        <div className="py-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-50"></div>

            <div className="relative w-full max-w-6xl mx-auto" style={{ opacity: 1, transform: "none" }}>
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            </div>

            {/* Center Dot Circle */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                style={{ transform: "none" }}
            >
                <div className="w-3 h-3 bg-primary/40 rounded-full relative">
                    <div className="absolute inset-0 bg-primary/60 rounded-full animate-ping"></div>
                    <div className="absolute inset-1 bg-primary rounded-full"></div>
                </div>
            </div>

            {/* Left Dot -200px */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-y-1/2"
                style={{ opacity: 1, transform: "translateX(calc(-50% - 200px))" }}
            >
                <div className="w-1.5 h-1.5 bg-primary/30 rounded-full"></div>
            </div>

            {/* Right Dot +200px */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-y-1/2"
                style={{ opacity: 1, transform: "translateX(calc(-50% + 200px))" }}
            >
                <div className="w-1.5 h-1.5 bg-primary/30 rounded-full"></div>
            </div>

            {/* Far Left Dot -400px */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-y-1/2"
                style={{ opacity: 1, transform: "translateX(calc(-50% - 400px))" }}
            >
                <div className="w-1 h-1 bg-primary/20 rounded-full"></div>
            </div>

            {/* Far Right Dot +400px */}
            <div
                className="absolute top-1/2 left-1/2 transform -translate-y-1/2"
                style={{ opacity: 1, transform: "translateX(calc(-50% + 400px))" }}
            >
                <div className="w-1 h-1 bg-primary/20 rounded-full"></div>
            </div>
        </div>
    );
}