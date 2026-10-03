<<<<<<< HEAD

  document.addEventListener('DOMContentLoaded', () => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const revealElements = document.querySelectorAll('.reveal-el, .reveal-img-wrap');
    
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  });
  const galleryTrigger = document.getElementById("facilities-gallery-trigger");
const gallery = document.getElementById("facilities-gallery");
const galleryClose = document.getElementById("facilities-gallery-close");

if (galleryTrigger && gallery && galleryClose) {

  galleryTrigger.addEventListener("click", function () {
    gallery.classList.remove("hidden");
    gallery.classList.add("flex");
    document.body.classList.add("overflow-hidden");
  });

  galleryClose.addEventListener("click", function () {
    gallery.classList.add("hidden");
    gallery.classList.remove("flex");
    document.body.classList.remove("overflow-hidden");
  });

  gallery.addEventListener("click", function (event) {
    if (event.target === gallery) {
      gallery.classList.add("hidden");
      gallery.classList.remove("flex");
      document.body.classList.remove("overflow-hidden");
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      gallery.classList.add("hidden");
      gallery.classList.remove("flex");
      document.body.classList.remove("overflow-hidden");
    }
  });

}


document.addEventListener("DOMContentLoaded", function () {

  const gallery = document.getElementById("facilities-gallery");
  const trigger = document.getElementById("facilities-gallery-trigger");
  const closeBtn = document.getElementById("facilities-gallery-close");
  const backdrop = document.getElementById("facilities-gallery-backdrop");


  /* ================= OPEN GALLERY ================= */

  function openGallery() {

    gallery.classList.remove("hidden");

    // Browser ko render hone ka time
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        gallery.classList.add("gallery-open");
      });
    });

    document.body.style.overflow = "hidden";
  }


  /* ================= CLOSE GALLERY ================= */

  function closeGallery() {

    gallery.classList.remove("gallery-open");

    document.body.style.overflow = "";

    // Animation complete hone ke baad hide
    setTimeout(() => {
      gallery.classList.add("hidden");
    }, 700);
  }


  /* ================= EVENTS ================= */

  if (trigger) {
    trigger.addEventListener("click", openGallery);
  }

  if (closeBtn) {
    closeBtn.addEventListener("click", closeGallery);
  }

  if (backdrop) {
    backdrop.addEventListener("click", closeGallery);
  }


  /* ================= ESC KEY ================= */

  document.addEventListener("keydown", function (event) {

    if (
      event.key === "Escape" &&
      !gallery.classList.contains("hidden")
    ) {
      closeGallery();
    }

  });

});

document.addEventListener("DOMContentLoaded", () => {

  const qualityBoxes = document.querySelectorAll(".quality-box");

  const qualityObserver = new IntersectionObserver(
    (entries, observer) => {

      entries.forEach((entry, index) => {

        if (entry.isIntersecting) {

          setTimeout(() => {
            entry.target.classList.add("show");
          }, index * 300);

          observer.unobserve(entry.target);
        }

      });

    },
    {
      threshold: 0.25
    }
  );

  qualityBoxes.forEach(box => {
    qualityObserver.observe(box);
  });

});
// ================= BACK TO TOP BUTTON =================

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.remove("opacity-0", "invisible", "translate-y-4");
    backToTop.classList.add("opacity-100", "visible", "translate-y-0");
  } else {
    backToTop.classList.add("opacity-0", "invisible", "translate-y-4");
    backToTop.classList.remove("opacity-100", "visible", "translate-y-0");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
// ================= APPOINTMENT FORM =================

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {
  appointmentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("patientName").value;

    alert(
      `Thank you, ${name}!\n\nYour appointment request has been submitted.\nOur reception team will contact you shortly.`
    );

    appointmentForm.reset();
  });
}
=======

  document.addEventListener('DOMContentLoaded', () => {
    // Respect user's motion preferences
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const revealElements = document.querySelectorAll('.reveal-el, .reveal-img-wrap');
    
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  });
  
>>>>>>> d15abcf58dc11f3fe575b709a41044a6eaf2e3a6
