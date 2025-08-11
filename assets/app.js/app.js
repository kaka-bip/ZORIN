const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const distros = [
  { name: "Ubuntu", url: "https://ubuntu.com" },
  { name: "Fedora", url: "https://getfedora.org" },
  { name: "Debian", url: "https://debian.org" },
  { name: "Arch Linux", url: "https://archlinux.org" },
  { name: "Linux Mint", url: "https://linuxmint.com" },
  { name: "openSUSE", url: "https://www.opensuse.org" },
  { name: "Manjaro", url: "https://manjaro.org" }
]

app.get('/distros', (req,res => {
  res.json(distros);
}));

app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});