//================ Typing styling =======================
var typed = new Typed('#element', {
    strings: ['Junior full stack JAVA web developer', 'Graphics designer', 'Content creator', 'Photographer'],
    typeSpeed: 60,
});

// ==================== Active Arrow =====================



//================= Skill box's HTML Styling ========================
let progressBar = document.querySelector(".circle");

let valueContainer = document.querySelector(".percentage-value");

let progressValue = 0;
let progressEndValue = 92;
let speed = 8;

let progress = setInterval(() => {
    progressValue++;
    console.log(progressValue);
    valueContainer.textContent = `${progressValue}%`;

    progressBar.style.background = `conic-gradient(
#4d5bf9 ${progressValue * 3.6}deg, 
#cadcff ${progressValue * 3.6}deg)`

    if (progressValue == progressEndValue) {
        clearInterval(progress);
    }
}, speed);



//================= Skill box's CSS Styling ========================
let progressBar2 = document.querySelector(".circle2");

let valueContainer2 = document.querySelector(".percentage-value2");

let progressValue2 = 0;
let progressEndValue2 = 90;
let speed2 = 8;

let progress2 = setInterval(() => {
    progressValue2++;
    console.log(progressValue2);
    valueContainer2.textContent2 = `${progressValue2}%`;

    progressBar2.style.background = `conic-gradient(
#4d5bf9 ${progressValue2 * 3.6}deg, 
#cadcff ${progressValue2 * 3.6}deg)`

    if (progressValue2 == progressEndValue2) {
        clearInterval(progress2);
    }
}, speed2);



//================= Skill box's JS Styling ========================
let progressBar3 = document.querySelector(".circle3");

let valueContainer3 = document.querySelector(".percentage-value3");

let progressValue3 = 0;
let progressEndValue3 = 80;
let speed3 = 8;

let progress3 = setInterval(() => {
    progressValue3++;
    console.log(progressValue3);
    valueContainer3.textContent2 = `${progressValue3}%`;

    progressBar3.style.background = `conic-gradient(
#4d5bf9 ${progressValue3 * 3.6}deg, 
#cadcff ${progressValue3 * 3.6}deg)`

    if (progressValue3 == progressEndValue3) {
        clearInterval(progress3);
    }
}, speed3);



//================= Skill box's JS Styling ========================
let progressBar4 = document.querySelector(".circle4");

let valueContainer4 = document.querySelector(".percentage-value4");

let progressValue4 = 0;
let progressEndValue4 = 75;
let speed4 = 8;

let progress4 = setInterval(() => {
    progressValue4++;
    console.log(progressValue4);
    valueContainer4.textContent2 = `${progressValue4}%`;

    progressBar4.style.background = `conic-gradient(
#4d5bf9 ${progressValue4 * 3.6}deg,
#cadcff ${progressValue4 * 3.6}deg)`

    if (progressValue4 == progressEndValue4) {
        clearInterval(progress4);
    }
}, speed4);



// ========================= Straight progress bar ============================

const strBar = document.querySelectorAll('.pgrBar span');

strBar.forEach((span) => {
    span.style.width = span.dataset.width;
    span.innerHTML = span.dataset.width;
});


// Active nav bar 
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav div ul li');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop; //it automatically randomly calculate the area where we scroll
        const sectionHeight = section.clientHeight; //it helps us to get section height
        if (scrollY >= (sectionTop - 500)) {
            current = section.getAttribute('id');
        }
    })
    navLi.forEach(li => {
        li.classList.remove('act-nav-item');
        if (li.classList.contains(current)) {
            li.classList.add('act-nav-item');
        }
    })
})


// ================ Onclick add padding on container ==================


// ========== edu container ==============
// For edu container on nav bar onclick
document.getElementById('btn-edu').onclick = (() => {
    document.getElementById('edu').style.paddingTop = "6.6rem";
})
//Slide bar
document.getElementById('slide-btn-edu').onclick = (() => {
    document.getElementById('slideEdu').style.paddingTop = "5.5rem";
})
// For edu container on footer onclick
document.getElementById('ftr-btn-edu').onclick = (() => {
    document.getElementById('edu').style.paddingTop = "6.6rem";
})



// ============== Skill continer =================
//on sliderbar skills styling
document.getElementById('slide-btn-skill').onclick = (() => {
    document.getElementById('skills').style.paddingTop = "1rem";
})



// ========== certificate container ==============
// For certificate container on nav bar onclick
document.getElementById('btn-certificate').onclick = (() => {
    document.getElementById('cetificate').style.paddingTop = "6.5rem";
})

// For certificate container on nav bar onclick
document.getElementById('slide-btn-certificate').onclick = (() => {
    document.getElementById('cetificate').style.paddingTop = "6.5rem";
})
// For certificate container on footer onclick
document.getElementById('ftr-btn-certi').onclick = (() => {
    document.getElementById('cetificate').style.paddingTop = "6.5rem";
})



// ========== Social container ==============
// For Social container on nav bar
document.getElementById('btn-social').onclick = (() => {
    document.getElementById('social').style.paddingTop = "8rem";
})
// For Social container on footer
document.getElementById('ftr-btn-social').onclick = (() => {
    document.getElementById('social').style.paddingTop = "8rem";
})




// ========== Contact me container ==============
// For Contact me container on nav bar
document.getElementById('btn-contact').onclick = (() => {
    document.getElementById('contactMe').style.paddingTop = "5rem";
})
// For Contact me on footer
document.getElementById('ftr-btn-contact').onclick = (() => {
    document.getElementById('contactMe').style.paddingTop = "5rem";
})