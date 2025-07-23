const orbitRing = document.querySelector('.orbit-ring');
  const orbitIcons = document.querySelectorAll('.orbit-icon');

  orbitIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      orbitRing.style.animationPlayState = 'paused';
    });
    icon.addEventListener('mouseleave', () => {
      orbitRing.style.animationPlayState = 'running';
    });
  });

const aboutCard = document.querySelector('.about-card');

aboutCard.addEventListener('mousemove', (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  aboutCard.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

aboutCard.addEventListener('mouseleave', () => {
  aboutCard.style.transform = `rotateY(0deg) rotateX(0deg)`;
});


// 3D hover animation for project cards
document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // mouse X within card
      const y = e.clientY - rect.top;  // mouse Y within card
  
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
  
      const rotateX = -(y - centerY) / 12; // up/down
      const rotateY = (x - centerX) / 12;  // left/right
  
      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
    });
  
    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
  });

  document.querySelector(".contact-form-4d").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("🚀 Message sent successfully! I’ll get back to you soon.");
  });
  


  const canvas = document.getElementById('bgCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];
const colors = ['#00ffe1', '#00adb5', '#007bff', '#0ff', '#39f'];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // wrap around
    if (this.x > canvas.width) this.x = 0;
    if (this.x < 0) this.x = canvas.width;
    if (this.y > canvas.height) this.y = 0;
    if (this.y < 0) this.y = canvas.height;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 10;
    ctx.fill();
  }
}

function initParticles() {
  particlesArray = [];
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}

initParticles();
animateParticles();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});


document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");
  
  // Create modal element
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <img src="" alt="" class="modal-img" style="width: 100%; border-radius: 10px; margin-bottom: 20px;" />
      <h3 class="modal-title"></h3>
      <p class="modal-desc"></p>
    </div>
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector(".modal-img");
  const modalTitle = modal.querySelector(".modal-title");
  const modalDesc = modal.querySelector(".modal-desc");
  const closeBtn = modal.querySelector(".close-btn");

  cards.forEach(card => {
    card.addEventListener("click", () => {
      const img = card.querySelector("img").src;
      const title = card.querySelector("h3").textContent;
      const desc = card.querySelector("p").textContent;

      modalImg.src = img;
      modalTitle.textContent = title;
      modalDesc.textContent = desc;

      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});


  function openModal(id) {
    document.getElementById(id).style.display = 'block';
  }

  function closeModal(id) {
    document.getElementById(id).style.display = 'none';
  }

  // Close modal on outside click
  window.onclick = function(event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }

  
