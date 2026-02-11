// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const koalaImg = document.getElementById("letter-koala");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 150;
    const max = 250;
    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;
    
    // Calculate potential new position
    let moveX = Math.cos(angle) * distance;
    let moveY = Math.sin(angle) * distance;
    
    // Get button's current position
    const rect = noBtn.getBoundingClientRect();
    const btnWidth = rect.width;
    const btnHeight = rect.height;
    
    // Calculate new position
    const newX = rect.left + moveX;
    const newY = rect.top + moveY;
    
    // Check boundaries and adjust if needed
    const margin = 20; // Keep 20px away from edges
    
    // Check left/right boundaries
    if (newX < margin) {
        moveX = margin - rect.left;
    } else if (newX + btnWidth > window.innerWidth - margin) {
        moveX = (window.innerWidth - margin - btnWidth) - rect.left;
    }
    
    // Check top/bottom boundaries
    if (newY < margin) {
        moveY = margin - rect.top;
    } else if (newY + btnHeight > window.innerHeight - margin) {
        moveY = (window.innerHeight - margin - btnHeight) - rect.top;
    }
    
    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn grow

let yesScale = 1;

yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
      yesScale +=2;

    if(yesBtn.style.position !== "fixed") {
        yesBtn.style.position = "fixed";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = 'translate(-50%, -50%) scale(${yesScale})';
    }else{
        yesBtn.style.transform = 'translate(-50%, -50%) scale(${yesScale})';
        }
});

//YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Joanna, you have NO IDEA how excited I am!";

    koalaImg.src = "Koko.png";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
