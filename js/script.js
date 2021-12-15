const ourClientsContainer = document.querySelectorAll('.our-clients__container a')
document.querySelector('.our-clients__container').innerHTML = '';

let dataBody = []
for (let i = 0; i < ourClientsContainer.length; i++) {
    let img = ourClientsContainer[i].lastElementChild.attributes.src.value
    let url = ourClientsContainer[i].attributes.href.nodeValue
    let name = ourClientsContainer[i].innerText
    dataBody.push(
        '{"name": "' +
        name +
        '", "url": "' +
        url +
        '", "img": "' +
        img +
        '"}'
    )
}

let data = '[' + dataBody.toString() + ']'

window.Strut = {

    ready: function (t) {
        "loading" !== document.readyState ? t() : document.addEventListener("DOMContentLoaded", t)

    }
}

function LogoBubbles(s) {
    var e = this;
    for (a in s) e[a] = s[a];
    e.container = document.querySelector(e.containerSelector), e.noiseT = 0, e.scrollX = 0,
        function (s) {
            var e = 0,
                n = 0,
                a = null;
            for (e = s.length - 1; e > 0; e -= 1) n = Math.floor(Math.random() * (e + 1)),
                a = s[e],
                s[e] = s[n],
                s[n] = a
        }(e.logos),
        e.vertShrink = 0,
        i(),
        window.addEventListener("resize", i),
        e.playing = !1,
        r(),
        window.addEventListener("scroll", r),
        e.logosLoaded = !1;

    for (var a = 0; a < e.bubbles.length; a++) {
        var o = e.bubbles[a],
            t = a % e.logos.length;
        o.scale = o.s || 1,
            o.seedX = 1e4 * Math.random(),
            o.seedY = 1e4 * Math.random(),
            o.noiseX = o.noiseY = 0,
            o.introDelay = Math.random() * e.introDelay,
            o.introProgress = 0,
            o.el = document.createElement("a"),
            o.el.className = e.classPrefix,
            o.el.setAttribute("href", e.logos[t].url),
            o.tagEl = document.createElement("span"),
            o.tagEl.innerHTML = e.logos[t].name,
            o.el.appendChild(o.tagEl),
            o.tagDev = document.createElement("img"),
            o.tagDev.setAttribute("src", e.logos[t].img),
            o.el.appendChild(o.tagDev),
            l(o),
            e.container.appendChild(o.el)
    }

    function i() {
        var s, n, a, o, t;
        e.vertShrink = (s = 1e3, n = 800, (window.innerHeight - s) / (n - s)), e.vertShrink = (a = e.vertShrink, o = 0, t = 1, Math.max(Math.min(a, t), o))
    }

    function r() {
        var s = e.container.getBoundingClientRect();
        (s.bottom < 0 || s.top > window.innerHeight) && 1 == e.playing ? e.playing = !1 : s.bottom > 0 && s.top < window.innerHeight && 0 == e.playing && (e.playing = !0, requestAnimationFrame(function (s) {
            e.tick(s)
        }))
    }

    function l(s) {
        var n = s.x + s.noiseX + e.scrollX,
            a = s.y + s.noiseY;
        a = function (s, e, n) {
            return s * (1 - n) + e * n
        }(a, e.containerHeight / 2, e.vertShrink * e.maxShrink), n < -200 && (s.x += e.containerWidth);
        var o = c(s.introProgress) / 20 + .95;
        o *= s.scale,
            s.el.style.opacity = 1,
            s.el.style.transform = "translate(" + n + "px, " + a + "px) scale(" + o + ")"
    }

    function c(s) {
        return s < .5 ? 2 * s * s : (4 - 2 * s) * s - 1
    }
    e.firstTick = null, e.lastTick = 0, e.tick = function (s) {
        e.firstTick || (e.firstTick = s);
        var n = (s -= e.firstTick) - e.lastTick;
        e.lastTick = s, e.noiseT += n * e.noiseSpeed, e.scrollX -= n * e.scrollSpeed;
        for (var a = 0; a < e.bubbles.length; a++) {
            var o = e.bubbles[a];
            o.noiseX = noise(o.seedX + e.noiseT) * e.noiseScale - e.noiseScale / 2, o.noiseY = noise(o.seedY + e.noiseT) * e.noiseScale - e.noiseScale / 2, e.logosLoaded && o.introProgress < 1 && s > o.introDelay && (o.introProgress = Math.min(1, o.introProgress + n / e.introDuration)), l(o)
        }
        e.playing && requestAnimationFrame(e.tick)
    }
}
var bubbles = [{
        s: .6,
        x: 1134,
        y: 45
    }, {
        s: .6,
        x: 1620,
        y: 271
    }, {
        s: .6,
        x: 1761,
        y: 372
    }, {
        s: .6,
        x: 2499,
        y: 79
    }, {
        s: .8,
        x: 2704,
        y: 334
    }, {
        s: .6,
        x: 2271,
        y: 356
    }, {
        s: .6,
        x: 795,
        y: 226
    }, {
        s: .6,
        x: 276,
        y: 256
    }, {
        s: .6,
        x: 1210,
        y: 365
    }, {
        s: .6,
        x: 444,
        y: 193
    }, {
        s: .6,
        x: 2545,
        y: 387
    }, {
        s: .8,
        x: 1303,
        y: 193
    }, {
        s: .8,
        x: 907,
        y: 88
    }, {
        s: .8,
        x: 633,
        y: 320
    }, {
        s: .8,
        x: 323,
        y: 60
    }, {
        s: .8,
        x: 129,
        y: 357
    }, {
        s: .8,
        x: 1440,
        y: 342
    }, {
        s: .8,
        x: 1929,
        y: 293
    }, {
        s: .8,
        x: 2135,
        y: 198
    }, {
        s: .8,
        x: 2276,
        y: 82
    }, {
        s: .8,
        x: 2654,
        y: 182
    }, {
        s: .8,
        x: 2783,
        y: 60
    }, {
        x: 1519,
        y: 118
    }, {
        x: 1071,
        y: 233
    }, {
        x: 1773,
        y: 148
    }, {
        x: 2098,
        y: 385
    }, {
        x: 2423,
        y: 244
    }, {
        x: 901,
        y: 385
    }, {
        x: 624,
        y: 111
    }, {
        x: 75,
        y: 103
    }, {
        x: 413,
        y: 367
    }, {
        x: 2895,
        y: 271
    }, {
        x: 1990,
        y: 75
    }],
    logos = eval(data);

Strut.ready(function () {
    window.logoBubbles = new LogoBubbles({
        bubbles: bubbles,
        logos: logos,
        classPrefix: "our-clients__icon",
        containerSelector: ".our-clients__container",
        containerWidth: 3e3,
        containerHeight: 460,
        maxShrink: .2,
        noiseSpeed: 55e-6,
        noiseScale: 80,
        scrollSpeed: .0175,
        introDelay: 1500,
        introDuration: 1500
    })
});

let perlin, PERLIN_ZWRAPB = 8,
    PERLIN_ZWRAP = 1 << PERLIN_ZWRAPB,
    PERLIN_SIZE = 4095,
    perlin_octaves = 4,
    perlin_amp_falloff = .5,
    scaled_cosine = function (s) {
        return .5 * (1 - Math.cos(s * Math.PI))
    },
    noise = function (s) {
        if (null == perlin) {
            perlin = new Array(PERLIN_SIZE + 1);
            for (var e = 0; e < PERLIN_SIZE + 1; e++) perlin[e] = Math.random()
        }
        s < 0 && (s = -s);
        for (var n, a, o = Math.floor(s), t = s - o, i = 0, r = .5, l = 0; l < perlin_octaves; l++) n = scaled_cosine(t), a = perlin[o & PERLIN_SIZE], i += (a += n * (perlin[o + 1 & PERLIN_SIZE] - a)) * r, r *= perlin_amp_falloff, o <<= 1, (t *= 2) >= 1 && (o++, t--);
        return i
    };