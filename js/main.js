const header = document.querySelector(".site-header");
const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

const onScroll = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

toggle?.addEventListener("click", () => {
  const open = nav?.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(Boolean(open)));
  document.body.classList.toggle("nav-open", Boolean(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  });
});

document.querySelectorAll("[data-accordion]").forEach((item) => {
  const button = item.querySelector("button");
  button?.addEventListener("click", () => {
    const expanded = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(expanded));
  });
});

const form = document.querySelector("#contacto-form");
form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const nombre = String(data.get("nombre") || "").trim();
  const empresa = String(data.get("empresa") || "").trim();
  const telefono = String(data.get("telefono") || "").trim();
  const servicio = String(data.get("servicio") || "").trim();
  const mensaje = String(data.get("mensaje") || "").trim();
  const text = encodeURIComponent(
    `Hola L&O 360, soy ${nombre} (${empresa}). Tel: ${telefono}. Servicio: ${servicio}. ${mensaje}`
  );
  window.open(`https://wa.me/5492610000000?text=${text}`, "_blank");
  form.reset();
  const notice = form.querySelector(".form-notice");
  if (notice) {
    notice.hidden = false;
  }
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
