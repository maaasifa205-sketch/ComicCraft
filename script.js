// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    console.log('ComicCraft JavaScript initialized.');

    // Find the primary button on the page
    const getStartedBtn = document.querySelector('.btn');

    if (getStartedBtn) {
        getStartedBtn.addEventListener('click', (event) => {
            event.preventDefault();
            alert('Welcome to ComicCraft! Let\'s start building your project.');
        });
    }
});
