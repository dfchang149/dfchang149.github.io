// Function to update the size of other containers
function updateContainerSizes(width, height) {
    const otherContainers = document.querySelectorAll('.container:not(#first-container)');
    otherContainers.forEach(container => {
        container.style.width = `${width}px`;
        //container.style.height = `${height}px`;
    });
}

// Wait until the document is fully loaded
window.addEventListener('DOMContentLoaded', () => {
    const firstContainer = document.getElementById('first-container');

    // Create a ResizeObserver to monitor changes in the first container's size
    const resizeObserver = new ResizeObserver(entries => {
        if (screen.availWidth > 1200) {
            for (let entry of entries) {
                const { width, height } = entry.contentRect;
                // Update other containers with the new size
                updateContainerSizes(width, height);
            }
        }
    });

    // Observe the first container
    resizeObserver.observe(firstContainer);
});