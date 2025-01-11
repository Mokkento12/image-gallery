const mainImg = document.getElementById("main-img");
const lightbox = document.querySelector(".lightbox");
const thumbnails = document.querySelectorAll(".thumbnail");
const lightboxImage = document.getElementById("lightbox-image");
const closeBtn = document.querySelector(".close-btn");

// Меняем главное изображение при клике на миниатюру
thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    mainImg.src = thumbnail.src; // Меняем главное изображение
  });
});

// Открываем Lightbox при клике на главное изображение
mainImg.addEventListener("click", () => {
  if (mainImg.src) {
    lightboxImage.src = mainImg.src; // Устанавливаем картинку в Lightbox
    lightbox.classList.remove("hidden"); // Показываем Lightbox
  } else {
    console.error("Ошибка загрузки изображения");
  }
});

// Закрываем Lightbox при клике на любое место в нем и при клике на фон
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add("hidden");
  }
});

// Кнопка закрыть

closeBtn.addEventListener("click", () => {
  lightbox.classList.add("hidden");
});
