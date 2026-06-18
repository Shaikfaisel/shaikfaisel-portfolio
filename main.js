/* ============================================================
   FILE: main.js
   PURPOSE: All interactive behaviour for the portfolio
   HOW IT WORKS: This file is loaded at the bottom of index.html via:
   <script src="main.js"></script>

   SECTIONS IN THIS FILE:
   1. Scroll progress bar
   2. Back-to-top button visibility
   3. Dark / Light theme toggle
   4. Mobile hamburger menu
   5. Typing animation (hero section)
   6. Animated number counters (hero card stats)
   7. Fade-in on scroll (sections slide up as you scroll)
   8. GitHub contribution grid (decorative squares)
   9. Contact form — sends real email via Formspree
============================================================ */


/* ============================================================
   1. SCROLL PROGRESS BAR
   Shows a colored line at the top that fills as you scroll down.
============================================================ */
window.addEventListener('scroll', function () {

  // Fill the progress bar
  var progressBar = document.getElementById('progress-bar');
  var scrollTop   = window.scrollY;
  var docHeight   = document.body.scrollHeight - window.innerHeight;
  progressBar.style.width = (scrollTop / docHeight * 100) + '%';

  // Show or hide the back-to-top button
  var backTop = document.getElementById('back-top');
  if (scrollTop > 400) {
    backTop.classList.add('visible');
  } else {
    backTop.classList.remove('visible');
  }

});


/* ============================================================
   2. BACK TO TOP BUTTON
   Clicking the button scrolls you back to the very top.
============================================================ */
document.getElementById('back-top').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ============================================================
   3. DARK / LIGHT THEME TOGGLE
   Reads the saved preference from localStorage on page load,
   then toggles between dark and light when the button is clicked.
============================================================ */
var themeBtn = document.getElementById('theme-toggle');

// Apply saved theme when page first loads
var savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  document.documentElement.setAttribute('data-theme', savedTheme);
  themeBtn.textContent = (savedTheme === 'light') ? '🌙' : '☀️';
}

// Toggle theme when button is clicked
themeBtn.addEventListener('click', function () {
  var currentTheme = document.documentElement.getAttribute('data-theme');
  var newTheme = (currentTheme === 'dark') ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  themeBtn.textContent = (newTheme === 'light') ? '🌙' : '☀️';
  localStorage.setItem('theme', newTheme);
});


/* ============================================================
   4. MOBILE HAMBURGER MENU
   Shows/hides the dropdown nav links on small screens.
============================================================ */
document.getElementById('hamburger').addEventListener('click', function () {
  document.getElementById('mobile-menu').classList.toggle('open');
});

// Called by onclick="closeMobileMenu()" on each mobile menu link
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}


/* ============================================================
   5. TYPING ANIMATION
   Cycles through role titles and types/deletes them character by character.
============================================================ */
var phrases = [
  'Electronics & Communication Engineer',
  'VLSI Design Engineer',
  'Full Stack Developer',
  'Brain-Computer Interface Researcher',
  'PCB Design Engineer',
  'Embedded Systems Developer',
];

var phraseIndex  = 0;   // which phrase we are currently showing
var charIndex    = 0;   // how many characters we have typed so far
var isDeleting   = false;
var typingEl     = document.getElementById('typing-text');

function typeLoop() {
  var currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    // Type one more character
    charIndex++;
    typingEl.textContent = currentPhrase.slice(0, charIndex);

    if (charIndex === currentPhrase.length) {
      // Finished typing — wait 1.8s then start deleting
      isDeleting = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    // Delete one character
    charIndex--;
    typingEl.textContent = currentPhrase.slice(0, charIndex);

    if (charIndex === 0) {
      // Finished deleting — move to next phrase
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  // Deleting is faster (45ms) than typing (80ms)
  setTimeout(typeLoop, isDeleting ? 45 : 80);
}

typeLoop(); // kick off the animation


/* ============================================================
   6. ANIMATED NUMBER COUNTERS
   The three stats in the hero card (3 internships, 2 projects, 92% BCI)
   count up from 0 to their target number when the page loads.
============================================================ */
function animateCounters() {
  document.querySelectorAll('[data-target]').forEach(function (el) {
    var target  = parseInt(el.getAttribute('data-target'));
    var current = 0;
    var step    = Math.max(1, Math.ceil(target / 40)); // how much to add each tick

    var timer = setInterval(function () {
      current = Math.min(current + step, target);
      el.textContent = current;
      if (current === target) clearInterval(timer); // stop when we reach the target
    }, 35);
  });
}

animateCounters(); // run on page load


/* ============================================================
   7. FADE-IN ON SCROLL
   Watches elements with class "fade-in".
   When they scroll into view, adds class "visible" to show them.
============================================================ */
var fadeObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 }); // trigger when 10% of the element is visible

document.querySelectorAll('.fade-in').forEach(function (el) {
  fadeObserver.observe(el);
});



/* ============================================================
   9. CONTACT FORM — REAL EMAIL DELIVERY VIA FORMSPREE
   
   HOW THIS WORKS:
   - The form sends data to Formspree (https://formspree.io)
   - Formspree is a free service that forwards the message to your Gmail
   - No server needed — it all happens through their API
   
   SETUP REQUIRED (one-time, 2 minutes):
   Step 1: Go to https://formspree.io
   Step 2: Click "Get Started" → sign up with your Gmail (shaikfaisel129@gmail.com)
   Step 3: Click "New Form" → name it "Portfolio Contact"
   Step 4: Copy your form endpoint. It looks like: https://formspree.io/f/xabc1234
   Step 5: Replace YOUR_FORMSPREE_ENDPOINT below with that URL
   Step 6: Done! Test by submitting the form — you'll get an email.
============================================================ */

var FORMSPREE_ENDPOINT = 'https://formspree.io/f/mykalddw';
// ↑ REPLACE "YOUR_FORM_ID_HERE" with your actual Formspree form ID after signing up

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // stop the page from reloading

  // Read the form fields
  var name    = document.getElementById('f-name').value.trim();
  var email   = document.getElementById('f-email').value.trim();
  var subject = document.getElementById('f-subject').value.trim();
  var message = document.getElementById('f-msg').value.trim();
  var statusEl = document.getElementById('form-status');
  var submitBtn = document.getElementById('submit-btn');

  // Basic validation — check required fields
  if (!name || !email || !message) {
    statusEl.className = 'error';
    statusEl.textContent = '⚠ Please fill in your name, email and message.';
    return;
  }

  // Email format check
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    statusEl.className = 'error';
    statusEl.textContent = '⚠ That doesn\'t look like a valid email address.';
    return;
  }

  // Disable button and show loading state
  submitBtn.disabled    = true;
  submitBtn.textContent = 'Sending…';
  statusEl.className    = '';
  statusEl.textContent  = '';

  // Send data to Formspree
  fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name:    name,
      email:   email,       // Formspree uses this as reply-to address
      subject: subject || 'Portfolio Contact',
      message: message
    })
  })
  .then(function (response) {
    if (response.ok) {
      // SUCCESS — message was sent
      statusEl.className    = 'success';
      statusEl.textContent  = '✓ Message sent! I\'ll reply within 24 hours.';
      document.getElementById('contact-form').reset(); // clear the form
    } else {
      // Server returned an error
      statusEl.className   = 'error';
      statusEl.textContent = '✗ Something went wrong. Please email me directly.';
    }
  })
  .catch(function () {
    // Network error (no internet, etc.)
    statusEl.className   = 'error';
    statusEl.textContent = '✗ Could not connect. Please check your internet and try again.';
  })
  .finally(function () {
    // Re-enable the button either way
    submitBtn.disabled    = false;
    submitBtn.textContent = 'Send Message ➤';
  });

});


/* ===== CYBER CANVAS ===== */
(function(){
const c=document.getElementById('cyberCanvas');
if(!c) return;
const x=c.getContext('2d');
let w,h,traces=[],drops=[];
function resize(){
 w=c.width=innerWidth;
 h=c.height=innerHeight;
 traces=Array.from({length:60},()=>({x:Math.random()*w,y:Math.random()*h,h:Math.random()>.5}));
 drops=Array.from({length:90},()=>({x:Math.random()*w,y:Math.random()*h,s:2+Math.random()*2}));
}
addEventListener('resize',resize); resize();
function draw(){
 x.clearRect(0,0,w,h);
 traces.forEach(t=>{
  x.strokeStyle='rgba(37,99,235,.18)';
  x.lineWidth=1;
  x.beginPath();
  if(t.h){x.moveTo(t.x,t.y);x.lineTo(t.x+120,t.y);}
  else{x.moveTo(t.x,t.y);x.lineTo(t.x,t.y+120);}
  x.stroke();
  x.fillStyle='rgba(16,185,129,.8)';
  x.fillRect(t.x-1,t.y-1,3,3);
 });
 x.fillStyle='rgba(96,165,250,.35)';
 x.font='12px monospace';
 drops.forEach(d=>{
  x.fillText(Math.random()>.5?'1':'0',d.x,d.y);
  d.y+=d.s;
  if(d.y>h)d.y=-10;
 });
 requestAnimationFrame(draw);
}
draw();
})();
