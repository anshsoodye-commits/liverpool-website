const matchDate = new Date("January 31, 2026 20:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const diff = matchDate - now;

    const el = document.getElementById("countdown");
    if (!el) return;

    if (diff < 0) {
        el.innerText = "Match is live!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    el.innerText = `Next match in ${days} days ${hours} hours`;
}, 1000);
