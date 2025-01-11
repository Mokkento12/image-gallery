const mainImg = document.getElementById("main-img");
const lightbox = document.querySelector(".lightbox");
const thumbnails = document.querySelectorAll(".thumbnail");
const lightboxImage = document.getElementById("lightbox-image");

// Меняем главное изображение при клике на миниатюру
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    mainImg.src = thumbnail.src; // Меняем главное изображение
  });
});

// Открываем Lightbox при клике на главное изображение
mainImg.addEventListener("click", () => {
  lightboxImage.src = mainImg.src; // Устанавливаем картинку в Lightbox
  lightbox.classList.remove("hidden"); // Показываем Lightbox
});

// Закрываем Lightbox при клике на любое место в нем
lightbox.addEventListener("click", () => {
  lightbox.classList.add("hidden"); // Прячем Lightbox
});
