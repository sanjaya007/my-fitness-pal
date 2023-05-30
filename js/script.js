let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".header .navbar");

const allModalWrapper = document.querySelectorAll(".modal-wrapper");
const modalWrapper = document.getElementById("modalWrapper");
const modalBox = document.getElementById("modalBox");

const formModalWrapper = document.getElementById("formModalWrapper");
const formModal = document.querySelectorAll(".form-modal");
const signupModal = document.getElementById("signupModal");
const loginModal = document.getElementById("loginModal");
const openLoginLink = document.querySelectorAll(".open-login-link");
const openSignupLink = document.querySelectorAll(".open-signup-link");

const getStartedBtn = document.getElementById("getStartedBtn");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");
};

allModalWrapper.forEach(function (wrapper) {
  wrapper.addEventListener("click", function (e) {
    const elTarget = e.target;
    const elClass = elTarget.classList[0];

    if (elClass === "modal-container") {
      elTarget.parentNode.classList.add("hidden");
    }
  });
});

// modalWrapper.addEventListener("click", function (e) {
//   const elId = e.target.id;

//   if (elId === "modalContainer") {
//     modalBox.innerHTML = "";
//     modalWrapper.classList.add("hidden");
//   }
// });

if (getStartedBtn) {
  getStartedBtn.addEventListener("click", function (e) {
    formModalWrapper.classList.remove("hidden");
  });
}

if (openLoginLink) {
  openLoginLink.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      console.log("hello");

      formModal.forEach(function (modal) {
        modal.classList.add("hidden");
      });
      loginModal.classList.remove("hidden");
    });
  });
}

if (openSignupLink) {
  openSignupLink.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      formModal.forEach(function (modal) {
        modal.classList.add("hidden");
      });
      signupModal.classList.remove("hidden");
    });
  });
}
