function closeNavbar() {
  var navbarToggler = document.querySelector(".navbar-toggler");
  var navbarCollapse = document.querySelector(".navbar-collapse");
  navbarToggler.classList.add("collapsed");
  navbarCollapse.classList.remove("show");
}

// Popup 1
const openPopupBtn1 = document.getElementById("openPopupBtn1");
const closePopup1 = document.getElementById("closePopup1");
const popup1 = document.getElementById("popup1");

openPopupBtn1.addEventListener("click", function () {
  popup1.style.display = "block";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
});

closePopup1.addEventListener("click", function () {
  popup1.style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
});

// Popup 2
const openPopupBtn2 = document.getElementById("openPopupBtn2");
const closePopup2 = document.getElementById("closePopup2");
const popup2 = document.getElementById("popup2");

openPopupBtn2.addEventListener("click", function () {
  popup2.style.display = "block";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
});

closePopup2.addEventListener("click", function () {
  popup2.style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
});
// Popup 3
const openPopupBtn3 = document.getElementById("openPopupBtn3");
const closePopup3 = document.getElementById("closePopup3");
const popup3 = document.getElementById("popup3");

openPopupBtn3.addEventListener("click", function () {
  popup3.style.display = "block";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden";
});

closePopup3.addEventListener("click", function () {
  popup3.style.display = "none";
  overlay.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", function (event) {
  if (event.target == overlay) {
    popup1.style.display = "none";
    popup2.style.display = "none";
    popup3.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = "auto";
    d;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll("#gallery img");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("img01");
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  const initialImageCount = 5;
  let currentImageCount = initialImageCount;

  images.forEach((image, index) => {
    if (index < currentImageCount) {
      image.style.display = "block"; 
    } else {
      image.style.display = "none";
    }

    image.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      document.body.style.overflow = "hidden"; 
    });
  });

  loadMoreBtn.addEventListener("click", function () {
    currentImageCount += 5; 
    images.forEach((image, index) => {
      if (index < currentImageCount) {
        image.style.display = "block"; 
      }
    });

    if (currentImageCount >= images.length) {
      loadMoreBtn.style.display = "none"; 
    }
  });

  const closeBtn = document.querySelector(".close");
  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  document.addEventListener("click", function (event) {
    if (!modal.contains(event.target)) {
      closeModal();
    }
  });

  function closeModal() {
    modal.style.display = "none";
    document.body.style.overflow = ""; 
  }
});
