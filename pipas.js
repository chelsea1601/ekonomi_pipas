const boxes = document.querySelectorAll('.box'); // Ambil semua elemen dengan kelas .box
const container = document.querySelector('.container');
let containerWidth = container.clientWidth;
const speed = 1;
const gap = 50; // Jarak antar kotak

// Buat posisi awal untuk tiap kotak dengan jarak berbeda
let positions = [];
boxes.forEach((box, index) => {
    // Set posisi awal untuk setiap kotak
    positions[index] = containerWidth + (index * (box.offsetWidth + gap)); // Offset untuk jarak antar kotak
});

function animate() {
    positions.forEach((pos, index) => {
        positions[index] -= speed; // Kurangi posisi untuk animasi
        if (positions[index] < -boxes[index].offsetWidth) {
            // Reset posisi jika keluar dari layar
            positions[index] = containerWidth + (boxes.length * (boxes[index].offsetWidth + gap)); 
        }
        boxes[index].style.left = positions[index] + 'px'; // Atur posisi kotak
    });
    requestAnimationFrame(animate); // Panggil fungsi animate lagi
}

animate(); // Mulai animasi

window.addEventListener('resize', () => {
    containerWidth = container.clientWidth; // Update lebar container saat resize
    // Recalculate positions on resize
    positions = [];
    boxes.forEach((box, index) => {
        positions[index] = containerWidth + (index * (box.offsetWidth + gap));
    });
});
