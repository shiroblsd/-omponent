document.getElementById('shareButton').addEventListener('click', function () {
    const deskPopup = document.getElementById('sharePopup');
    const mobPopup = document.getElementById('mobileSharePopup');
    const button = document.getElementById('shareButton');

    button.classList.toggle('active');

    if (window.innerWidth <= 768) {
        mobPopup.classList.toggle('show');
    } else {
        deskPopup.classList.toggle('show');
    }
});

document.addEventListener('click', function(event) {
    const deskPopup = document.getElementById('sharePopup');
    const mobPopup = document.getElementById('mobileSharePopup');
    const button = document.getElementById('shareButton');

    if (!button.contains(event.target) && 
        !deskPopup.contains(event.target) && 
        !mobPopup.contains(event.target)) {
        
        deskPopup.classList.remove('show');
        mobPopup.classList.remove('show');
        button.classList.remove('active');
    }
});