const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`\n💎 ALUMLINK ELITE ONLINE: http://localhost:${PORT}`);
    console.log(`✨ Feature-Set: Smart Radar, Women Empowerment Hub, Project Showcase\n`);
});