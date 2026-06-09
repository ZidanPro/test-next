"use client";
import { useEffect, useState } from "react";

export type FiveMServerStatus = {
    online: boolean;
    players: number;
    maxPlayers: number;
    hostname: string;
    queue: number;
    uptime: string;
};

export function useStatusServer(interval = 10000) {
    const [data, setData] = useState<FiveMServerStatus | null>(null);
    const [loading, setLoading] = useState(true);

    const load = async () => {
        try {
            const res = await fetch(
                "/api/fivem/status",
                {
                    cache: "no-store"
                }
            );

            if(!res.ok){
                throw new Error("Failed");
            }

            const json = await res.json();
            setData(json);
        } catch(error){
            setData({
                online: false,
                players: 0,
                maxPlayers: 0,
                hostname: "Unknown",
                queue: 0,
                uptime: "00h 00m"
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(()=>{
        load();
        const timer = setInterval(
            load,
            interval
        );
        return ()=>clearInterval(timer);
    },[interval]);

    return {
        data,
        loading,
        refetch:load
    };
}