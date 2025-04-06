export const loadMap = (cols, rows) => {
    const container = document.getElementById('pixel-map');
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    
    for (let i = 0; i < cols * rows; i++) {
        const pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.dataset.id = i;
        pixel.addEventListener('click', () => buyPixel(i));
        container.appendChild(pixel);
    }
};