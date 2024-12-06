

export function formatTime(date1, date2) {
    const diff = date2 - date1;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % (1000 * 60 * 60 * 24);
    const hours = Math.floor(diff / (1000 * 60 * 60)) % (1000 * 60 * 60);
    const minutes = Math.floor(diff / (1000 * 60 )) % (1000 * 60);
    const seconds = Math.floor(diff / (1000)) % (60);

    return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}