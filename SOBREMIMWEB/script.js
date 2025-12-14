
document.addEventListener('DOMContentLoaded', function() {

    
    const skillIcons = document.querySelectorAll('.skill-icon');
    skillIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    
    const expItems = document.querySelectorAll('.experience-item');
    expItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.background = '#c8e6c9';
            this.style.transform = 'translateX(5px)';
        });
        item.addEventListener('mouseleave', function() {
            this.style.background = '#f1f8f6';
            this.style.transform = 'translateX(0)';
        });
    });

    
    const bars = document.querySelectorAll('.language-bars');
    bars.forEach(barGroup => {
        barGroup.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        barGroup.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        setTimeout(() => {
            section.style.transition = 'all 0.5s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 100);
    });

    
    const mainCard = document.querySelector('.main-card');
    if (mainCard) {
        mainCard.style.opacity = '0';
        mainCard.style.transform = 'scale(0.95)';
        setTimeout(() => {
            mainCard.style.transition = 'all 0.6s ease';
            mainCard.style.opacity = '1';
            mainCard.style.transform = 'scale(1)';
        }, 200);
    }

   
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('click', function(e) {

             e.preventDefault();
             navigator.clipboard.writeText(this.href);
        });
    });

    
    const controls = document.querySelectorAll('.control');
    controls.forEach(control => {
        control.addEventListener('click', function() {
            console.log('Controle clicado:', this.className);
        });
    });

 
    if (window.innerWidth <= 768) {
        const socialItems = document.querySelectorAll('.social-item');
        socialItems.forEach(item => {
            item.addEventListener('click', function() {
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 200);
            });
        });
    }
});

// Função para atualizar dados do currículo (opcional)
function updateCurriculumData(data) {
    if (data.name) {
        const nameElement = document.querySelector('.profile-name');
        if (nameElement) nameElement.textContent = data.name.split(' ')[0].toUpperCase();
    }
    if (data.surname) {
        const surnameElement = document.querySelector('.profile-surname');
        if (surnameElement) surnameElement.textContent = data.surname.toUpperCase();
    }
    if (data.phone) {
        const phoneElements = document.querySelectorAll('.contact-item');
        phoneElements.forEach(el => {
            if (el.textContent.includes('📞')) {
                el.textContent = '📞 ' + data.phone;
            }
        });
    }
}


window.updateCurriculumData = updateCurriculumData;
