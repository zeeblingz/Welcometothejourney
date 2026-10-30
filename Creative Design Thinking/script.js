document.addEventListener('DOMContentLoaded', () => {
  const photoTarget = document.getElementById('photoTarget');
  const photoUploader = document.getElementById('photoUploader');
  const userUploadedPhoto = document.getElementById('userUploadedPhoto');
  const uploadPrompt = document.querySelector('.upload-prompt');
  if (photoTarget && photoUploader) {
    photoTarget.addEventListener('click', () => {
      photoUploader.click();
    });

    photoUploader.addEventListener('change', (event) => {
      const file = event.target.files[0];
      if (file) {
        userUploadedPhoto.src = URL.createObjectURL(file);
        userUploadedPhoto.style.display = 'block';
        uploadPrompt.style.display = 'none';
      }
    });
  }
});