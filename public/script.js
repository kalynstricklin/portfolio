document.addEventListener('DOMContentLoaded', () => {
    initSparkles();
});

function initSparkles() {
    const canvas = document.getElementById('sparkle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let sparkles = [];
    let mouse = { x: -100, y: -100 };

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    document.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;

        for (let i = 0; i < 2; i++) {
            sparkles.push({
                x: mouse.x + (Math.random() - 0.5) * 20,
                y: mouse.y + (Math.random() - 0.5) * 20,
                size: Math.random() * 3 + 1,
                life: 1,
                decay: Math.random() * 0.03 + 0.015,
                vx: (Math.random() - 0.5) * 1.5,
                vy: (Math.random() - 0.5) * 1.5 - 0.5,
                color: ['#f97316', '#ec4899', '#a855f7', '#fbbf24', '#ffc0cb'][Math.floor(Math.random() * 5)]
            });
        }
    });

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = sparkles.length - 1; i >= 0; i--) {
            const s = sparkles[i];
            s.x += s.vx;
            s.y += s.vy;
            s.life -= s.decay;

            if (s.life <= 0) {
                sparkles.splice(i, 1);
                continue;
            }

            ctx.save();
            ctx.globalAlpha = s.life;
            ctx.fillStyle = s.color;
            ctx.translate(s.x, s.y);
            ctx.rotate(Math.random() * Math.PI);

            // draw a little star
            ctx.beginPath();
            for (let j = 0; j < 4; j++) {
                ctx.lineTo(0, -s.size);
                ctx.rotate(Math.PI / 4);
                ctx.lineTo(0, -s.size * 0.4);
                ctx.rotate(Math.PI / 4);
            }
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        // keep array from growing too large
        if (sparkles.length > 150) {
            sparkles = sparkles.slice(-150);
        }

        requestAnimationFrame(draw);
    }

    draw();
}
