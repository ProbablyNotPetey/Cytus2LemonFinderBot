function getLemons(p, g, b, m, tp) {
    return Math.round((tp * (p + g + b + m) - (p * 100) - (30 * g)) / -30);
}

module.exports = { getLemons };
