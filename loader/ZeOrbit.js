export default function handler(req, res) {
    const userAgent = req.headers['user-agent'] || '';

    if (userAgent.includes('Mozilla') || userAgent.includes('Chrome')) {
        // Tampilan 404 palsu untuk Browser
        res.status(404).send(`
            <html>
                <head><title>404 Not Found</title></head>
                <body style="font-family: Arial, sans-serif; text-align: center; margin-top: 50px;">
                    <h1>Not Found</h1>
                    <p>The requested URL was not found on this server.</p>
                    <hr><address>Apache/2.4.41 (Ubuntu) Server at ze-orbit-v4.vercel.app Port 443</address>
                </body>
            </html>
        `);
    } else {
        // Redirect ke script asli untuk Executor
        res.redirect('https://raw.githubusercontent.com/xploitforceofficial-stack/zeorbitv42/refs/heads/main/obfuscated_script-1770792805723.lua');
    }
}
