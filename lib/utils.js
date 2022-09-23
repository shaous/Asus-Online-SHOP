import confetti from "canvas-confetti";

export const beHappy = () =>
{
    var end = Date.now() + (15 * 1000);
    var colors = ['#00fff5', '#00adb5'];

    (function frame()
    {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end)
        {
            requestAnimationFrame(frame);
        }
    }());
}