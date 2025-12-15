function calculateAge() {
    const birthDate = new Date(1997, 8, 5);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add('active');
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function createSunLines() {
    const sunLinesContainer = document.getElementById('sunLines');
    const numberOfLines = 15;
    
    for (let i = 0; i < numberOfLines; i++) {
        const line = document.createElement('div');
        line.className = 'sun-line';
        line.style.bottom = `${i * 25}px`;
        sunLinesContainer.appendChild(line);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const ageElement = document.getElementById('ageCalc');
    if (ageElement) {
        ageElement.textContent = calculateAge();
    }
    
    createSunLines();
});

document.addEventListener('DOMContentLoaded', function() {
    const ageElement = document.getElementById('ageCalc');
    if (ageElement) {
        ageElement.textContent = calculateAge();
    }
    
    createSunLines();
    
    const footer = document.querySelector('footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.innerHTML = `&copy; ${currentYear} Otavio Juan Menoni - All Rights Reserved`;
    }
});