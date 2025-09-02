// Get all image cards
const imageCards = document.querySelectorAll('.image-card');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalImage = modalImg instanceof HTMLImageElement ? modalImg : null;

// Add click event to each image card
imageCards.forEach(card => {
    card.addEventListener('click', () => {
        const img = card.querySelector('img');
        if (modal && modalImage && img instanceof HTMLImageElement) {
            modalImage.src = img.src;
            modal.classList.remove('hidden');
            modal.classList.add('flex');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        }
    });
});

// Function to close modal
function closeModal() {
    if (modal) {
        modal.classList.remove('flex');
        modal.classList.add('hidden');
        document.body.style.overflow = ''; // Restore scrolling
    }
}

// Close modal when clicking outside the image
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Close modal on escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});
