const mainImg = document.getElementById("main-img");

const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    mainImg.src = thumbnail.src;
  });
});
