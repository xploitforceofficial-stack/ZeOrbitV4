const express = require('express');
const axios = require('axios'); // Library untuk fetch data lebih stabil
const app = express();
const PORT = process.env.PORT || 3000;

// URL Github Private/Raw kamu
const SCRIPT_SOURCE = "https://raw.githubusercontent.com/xploitforceofficial-stack/zeorbitv42/refs/heads/main/obfuscated_script-1770792805723.lua";

// Pesan 404 Custom sesuai permintaan
const ACCESS_DENIED_HTML = `
<!DOCTYPE html>
<html>
<head>
    <title>404 Not Found</title>
    <style>
        body { background-color: #000; color: #fff; font-family: 'Courier New', monospace; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; overflow: hidden; }
        .container { text-align: center; border: 1px solid #333; padding: 50px; box-shadow: 0 0 20px rgba(255,0,0,0.2); }
        h1 { font-size: 50px; color: #ff0000; margin-bottom: 10px; }
        p { font-size: 18px; letter-spacing: 2px; }
    </style>
</head>
<body>
    <div class="container">
        <h1>404</h1>
        <p>YOU DO NOT HAVE ACCESS TO SKID</p>
    </div>
</body>
</html>
`;

app.get('/', (req, res) => {
    const userAgent = req.headers['user-agent'] || "";
    
    // Logika Filter: Hanya izinkan akses jika User-Agent datang dari eksekutor
    // Kamu bisa menambah pengecekan Header custom seperti 'Syn-Fingerprint' atau 'Identifier'
    const isRoblox = userAgent.includes("Roblox") || userAgent.includes("Arceus") || userAgent.includes("Fluxus");

    if (isRoblox) {
        axios.get(SCRIPT_SOURCE)
            .then(response => {
                res.setHeader('Content-Type', 'text/plain');
                // Menambahkan watermark atau proteksi tambahan sebelum dikirim
                const protectedCode = `-- Protected by Zeorbit V4\n` + response.data;
                res.send(protectedCode);
            })
            .catch(err => {
                res.status(500).send("-- Error: Failed to fetch source script.");
            });
    } else {
        // Jika dibuka lewat Browser (Chrome/HP/PC), tampilkan 404
        res.status(404).send(ACCESS_DENIED_HTML);
    }
});

app.listen(PORT, () => {
    console.log(`Server Loader Zeorbit Berjalan di Port ${PORT}`);
});
