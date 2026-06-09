let serverStatus = {
    online: false,
    players: 0,
    maxPlayers: 0,
    hostname: "",
    uptime: "",
    queue: ""
};

export async function POST(req: Request) {
    const data = await req.json();

    serverStatus = {
        online: true,
        ...data
    };

    return Response.json({
        success: true
    });
}

export async function GET() {
    return Response.json(serverStatus);
}