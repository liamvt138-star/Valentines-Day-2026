// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".yes-btn");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-koala");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

let yesScale = 1;
yesBtn.style.position = "relative"
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

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
    // Get button wrapper position (the no-wrapper div)
    const wrapper = noBtn.parentElement; // FIX 3a: Get the parent wrapper for proper positioning
    const wrapperRect = wrapper.getBoundingClientRect();
    
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Get button dimensions
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    // Define safe zone (with margin from edges)
    const margin = 50; // FIX 3b: Increased margin to keep button further from edges
    
    // Calculate max safe positions
    const maxX = viewportWidth - btnWidth - margin;
    const maxY = viewportHeight - btnHeight - margin;
    
    // Generate random position within safe zone
    const randomX = Math.random() * (maxX - margin) + margin;
    const randomY = Math.random() * (maxY - margin) + margin;
    
    // FIX 3c: Use absolute positioning from wrapper's original position
    const moveX = randomX - wrapperRect.left;
    const moveY = randomY - wrapperRect.top;
    
    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    
    // FIX 2b: Grow the Yes button each time No moves
    yesScale += 0.5; // Increase scale by 0.5 each hover
    yesBtn.style.transform = `scale(${yesScale})`; // Apply the scale
});

//YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Joanna, you have NO IDEA how excited I am!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
