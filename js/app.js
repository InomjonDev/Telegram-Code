window.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelectorAll(".card"),
    floatRight = document.querySelector(".float-right"),
    topBlock = document.querySelector(".flr-top"),
    bottomBlock = document.querySelector(".flr-bottom"),
    modal = document.querySelector(".flr-top__modal"),
    dote = document.querySelector(".flr-top__icon-wrap"),
    emptyContent = document.querySelector(".flr-empty__content"),
    modalIcon = document.querySelector(".flr-bottom__modal"),
    iconOpen = document.querySelector(".flr-bottom__sticker-icon"),
    favorites = document.querySelector(".card-favorites"),
    channel1 = document.querySelector(".card-channel__1"),
    channel2 = document.querySelector(".card-channel__2"),
    group1 = document.querySelector(".card-group__1"),
    group2 = document.querySelector(".card-group__2"),
    bot = document.querySelector(".card-bot"),
    personal = document.querySelector(".card-personal");

  card.forEach((i) => {
    i.addEventListener("click", function () {
      topBlock.style.opacity = "1";
      topBlock.style.pointerEvents = "all";
      bottomBlock.style.opacity = "1";
      bottomBlock.style.pointerEvents = "all";
    });
  });

  dote.addEventListener("click", function () {
    modal.style.opacity = "1";
    modal.style.pointerEvents = "all";
  });

  emptyContent.addEventListener("click", function () {
    modal.style.opacity = "0";
    modal.style.pointerEvents = "none";
    modalIcon.style.opacity = "0";
    modalIcon.style.pointerEvents = "none";
  });

  iconOpen.addEventListener("click", function () {
    modalIcon.style.opacity = "1";
    modalIcon.style.pointerEvents = "all";
  });
});
