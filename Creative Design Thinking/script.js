const menuContainer = document.querySelector('.menu-dropdown-container');
const menuBtn = document.querySelector('.menu-btn');

if (menuBtn && menuContainer) {
  // Toggle main menu on click
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    menuContainer.classList.toggle('open');
  });

  // Keep main menu open if clicking inside it
  menuContainer.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Close main menu when clicking anywhere else on the page
  window.addEventListener('click', () => {
    menuContainer.classList.remove('open');
  });
}


// --- 2. YEAR TAB SLIDER NAVIGATION ---
const tabButtons = document.querySelectorAll('.tab-btn');
const sliderTrack = document.querySelector('.slider-track');

if (tabButtons && sliderTrack) {
  tabButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const offset = index * -100;
      sliderTrack.style.transform = `translateX(${offset}vw)`;
    });
  });
}


// --- 3. PHOTO UPLOAD FRAMES ---
document.addEventListener('DOMContentLoaded', () => {
  const wrappers = document.querySelectorAll('.frame-wrapper');

  wrappers.forEach(wrapper => {
    const target = wrapper.querySelector('.photo-target');
    const uploader = wrapper.querySelector('.file-uploader');
    const photo = wrapper.querySelector('.uploaded-photo');
    const prompt = wrapper.querySelector('.upload-prompt');

    if (target && uploader) {
      target.addEventListener('click', () => {
        uploader.click();
      });

      uploader.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
          photo.src = URL.createObjectURL(file);
          photo.style.display = 'block';
          if (prompt) prompt.style.display = 'none';
        }
      });
    }
  });
});