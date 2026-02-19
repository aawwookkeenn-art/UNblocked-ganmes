const lib = {
    "Action": [
        { n: "1v1.LOL", u: "https://1v1.lol/", i: "https://play-lh.googleusercontent.com/v8pWvXF6W_W3" },
        { n: "Vex 7", u: "https://poki.com/en/g/vex-7", i: "https://img.poki.com/cdn-cgi/image/width=314,height=314,f=auto/7b7f9a7447d2f97486e96901f687498c.png" },
        { n: "Smash Karts", u: "https://smashkarts.io/", i: "https://play-lh.googleusercontent.com/v8pWvXF6W_W4" }
    ],
    "Sports": [
        { n: "Retro Bowl", u: "https://game316038.konggames.com/gamefilewrapper/index.html?id=316038", i: "https://play-lh.googleusercontent.com/v8pWvXF6W_W5" },
        { n: "Basketball Stars", u: "https://poki.com/en/g/basketball-stars", i: "https://img.poki.com/cdn-cgi/image/width=314,height=314,f=auto/f305f87b8d4f0d6d538e1a660d2b9d2.png" },
        { n: "Rocket Soccer", u: "https://poki.com/en/g/rocket-soccer-derby", i: "https://img.poki.com/cdn-cgi/image/width=314,height=314,f=auto/8750a984-25e1-450a-bc6d-a60039234125.png" }
    ],
    "Relax": [
        { n: "Minecraft Classic", u: "https://classic.minecraft.net/", i: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png" },
        { n: "Google Snake", u: "https://www.google.com/logos/2010/pacman10-i.html", i: "https://play-lh.googleusercontent.com/v8pWvXF6W_W6" }
    ]
};

function renderAll() {
    const main = document.getElementById('content');
    main.innerHTML = '';
    for (let cat in lib) {
        let html = `<div class="section-title">${cat}</div><div class="grid">`;
        lib[cat].forEach(g => {
            html += `<div class="card" onclick="play('${g.u}','${g.n}')"><img src="${g.i}"><div class="card-title">${g.n}</div></div>`;
        });
        html += `</div>`;
        main.innerHTML += html;
    }
}

function play(u, n) {
    document.getElementById('frame').src = u;
    document.getElementById('playing').innerText = n;
    document.getElementById('player').style.display = 'block';
}

function closeGame() {
    document.getElementById('player').style.display = 'none';
    document.getElementById('frame').src = '';
}

renderAll();
