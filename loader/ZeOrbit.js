export default function handler(req, res) {
    const userAgent = req.headers['user-agent'] || '';

    // Deteksi Browser (Mozilla/Chrome/Safari dll)
    if (userAgent.includes('Mozilla') || userAgent.includes('Chrome') || userAgent.includes('Safari')) {
        res.status(404).send(`
            <!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
            <html>
                <head>
                    <title>404 Not Found</title>
                </head>
                <body style="font-family: Arial, Helvetica, sans-serif; text-align: center; margin-top: 50px;">
                    <h1>Not Found</h1>
                    <p>The requested URL was not found on this server.</p>
                    <hr>
                    <address>Apache/2.4.41 (Ubuntu) Server at Port 443</address>
                    </body>
            </html>
        `);
    } else {
        // Jika diakses lewat executor (Roblox HttpGet), kirim script asli
        // Menggunakan redirect agar beban trafik langsung ke GitHub
        res.redirect('https://raw.githubusercontent.com/xploitforceofficial-stack/zeorbitv42/refs/heads/main/obfuscated_script-1770792805723.lua');
    }
}
