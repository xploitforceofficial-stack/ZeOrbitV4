// api/script.js
export default function handler(req, res) {
    const userAgent = req.headers['user-agent'] || '';

    // Cek apakah yang mengakses adalah Browser (biasanya ada string "Mozilla")
    if (userAgent.includes('Mozilla') || userAgent.includes('Chrome')) {
        res.status(403).send(`
            <html>
                <body style="background:#000;color:white;font-family:sans-serif;text-align:center;padding-top:100px;">
                    <h1>403 Forbidden</h1>
                    <p>Access Denied: Your IP has been logged.</p>
                </body>
            </html>
        `);
    } else {
        // Jika diakses lewat eksekutor (HttpGet), arahkan ke script asli
        res.redirect('https://raw.githubusercontent.com/xploitforceofficial-stack/zeorbitv42/refs/heads/main/obfuscated_script-1770792805723.lua');
    }
}
