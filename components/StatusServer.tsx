'use client';
import { useStatusServer } from "@/hooks/useStatusServer";
import TitleLine from "./divider/TitleLine";

export default function StatusServer() {
    const serverID = `${process.env.serverID}`
    const { data, loading } = useStatusServer();

    // const players = serverData?.Data?.players?.length ?? 0;
    // const maxPlayers = serverData?.Data?.sv_maxclients ?? 0;
    // const queue = serverData?.Data?.vars?.Queue ?? 0;
    // const uptime = serverData?.Data?.vars?.Uptime ?? 'Unknown';

    // const isOnline = data?.online;
    // const players = data?.players;
    // const maxPlayers = data?.sv_maxclients;
    // const queue = data?.queue;
    // const uptime = data?.uptime;

    const isOnline = data?.online;
    const players = data?.players;
    const maxPlayers = data?.maxPlayers;
    const uptime = data?.uptime;
    const queue = data?.queue;

    return (
        <section className="py-16 px-6 text-white" id="status" data-aos="zoom-in">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4 relative inline-block">
                    Status Server
                    <TitleLine />
                </h2>

                <p className="text-white mb-10 max-w-2xl mx-auto">
                    Pantau status server dan lihat berapa banyak pemain yang sedang online.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 shadow-lg transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        {/* Status + Player Info */}
                        <div className="flex items-center gap-5 flex-wrap justify-center md:justify-start">
                            <div className="relative w-5 h-5">
                                <div className={`w-5 h-5 rounded-full relative ${
                                    loading
                                        ? "bg-gray-500/40"
                                        : isOnline
                                        ? "bg-green-500/40"
                                        : "bg-red-500/40"
                                    }`}
                                >
                                    <div className={`absolute inset-0 rounded-full animate-ping ${
                                        loading
                                            ? "bg-gray-400/60"
                                            : isOnline
                                            ? "bg-green-500/60"
                                            : "bg-red-500/60"
                                        }`}
                                    />
                                    <div className={`absolute inset-1 rounded-full ${
                                        loading
                                            ? "bg-gray-400"
                                            : isOnline
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                        }`}
                                    />
                                </div>
                            </div>

                            <p className="text-lg">
                                Status:{' '}
                                {loading ? (
                                    <span className="text-gray-400 animate-pulse">Unknown</span>
                                ) : (
                                    <span className={`font-semibold ${isOnline ? 'text-green-500' : 'text-red-500'}`}>
                                        {isOnline ? 'Online' : 'Offline'}
                                    </span>
                                )}
                            </p>

                            <p className="text-lg">
                                Player Online:{' '}
                                {loading ? (
                                    <span className="text-gray-400 animate-pulse">0/0</span>
                                ) : (
                                    <span className="text-primary font-semibold">
                                        {players} / {maxPlayers}
                                    </span>
                                )}
                            </p>

                            <p className="text-lg">
                                Queue:{' '}
                                {loading ? (
                                    <span className="text-gray-400 animate-pulse">0</span>
                                ) : (
                                    <span className="text-primary font-semibold">{queue}</span>
                                )}
                            </p>

                            <p className="text-lg">
                                Uptime:{' '}
                                {loading ? (
                                    <span className="text-gray-400 animate-pulse">00h 00m</span>
                                ) : (
                                    <span className="text-primary font-semibold">{uptime}</span>
                                )}
                            </p>
                        </div>

                        {/* Connect Button */}
                        <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                            <a
                                href={isOnline ? `https://cfx.re/join/${serverID}` : '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105
                                        ${isOnline
                                        ? 'btn-gradient-primary shadow-glow-sm hover:shadow-glow-md text-white'
                                        : 'text-white cursor-not-allowed'
                                    }`}
                                style={
                                    !isOnline
                                        ? { backgroundImage: 'linear-gradient(135deg, #4b5563, #1f2937' }
                                        : undefined
                                }
                                onClick={(e) => !isOnline && e.preventDefault()}
                            >
                                <svg className="w-5 h-5 fill-current" viewBox="0 0 384 512">
                                    <path d="M73 39c-24-14-55 3-55 31v372c0 28 31 45 55 31l292-186c23-15 23-47 0-61L73 39z" />
                                </svg>
                                Connect Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}