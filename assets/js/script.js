(function () {
  "use strict";

  const isSubPage = window.location.pathname
    .replace(/\\/g, "/")
    .includes("/pages/");
  const rootPrefix = isSubPage ? "../" : "";

  const HEADER_FALLBACK = `
<!-- Top bar -->
<div class="topbar d-none d-lg-block">
    <div class="container d-flex justify-content-between align-items-center">
        <div>
            <span class="topbar-item"><i class="bi bi-telephone-fill"></i> +91 9876543210</span>
            <span class="topbar-item"><i class="bi bi-envelope-fill"></i> hello@stacklyfood.co.uk</span>
            <span class="topbar-item"><i class="bi bi-geo-alt-fill"></i> 24 Covent Garden Piazza, London WC2E 8RF, UK</span>
        </div>
        <div class="d-flex align-items-center">
            <span class="topbar-item mb-0"><span class="status-dot"></span> Open Daily: 10:00 AM - 11:30 PM</span>
            <span>
                <a href="#" rel="noopener" class="social-link" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                <a href="#" rel="noopener" class="social-link" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                <a href="#" rel="noopener" class="social-link" aria-label="X Twitter"><i class="bi bi-twitter-x"></i></a>
                <a href="#" rel="noopener" class="social-link" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
            </span>
        </div>
    </div>
</div>
<div class="header-spacer" id="headerSpacer"></div>
<nav class="navbar navbar-expand-lg navbar-main" id="mainNav">
    <div class="container">
        <a class="brand-logo" data-nav-link="index.html" href="index.html">
            <img data-logo-img src="assets/images/logoStackly.webp" alt="Stackly Food & Restaurant Logo">
        </a>
        <div class="d-flex align-items-center gap-2 d-lg-none">
            <a href="#" class="nav-icon-btn" data-bs-toggle="offcanvas" data-bs-target="#cartCanvas" aria-label="View Cart">
                <i class="bi bi-bag"></i>
                <span class="cart-count">0</span>
            </a>
            <button class="navbar-toggler border-0" type="button" id="mobileMenuBtn" aria-label="Toggle Menu">
                <i class="bi bi-list" style="font-size:2rem; color:var(--ink);"></i>
            </button>
        </div>
        <div class="collapse navbar-collapse fullscreen-mobile-menu" id="navMenu">
            <button type="button" class="mobile-menu-close" id="mobileMenuClose" aria-label="Close Menu">
                <i class="bi bi-x-lg"></i>
            </button>
            <ul class="navbar-nav mx-auto">
                <li class="nav-item"><a class="nav-link nav-link-custom" data-page="home" data-nav-link="index.html" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link nav-link-custom" data-page="about" data-nav-link="pages/about.html" href="pages/about.html">About</a></li>
                <li class="nav-item"><a class="nav-link nav-link-custom" data-page="menu" data-nav-link="pages/menu.html" href="pages/menu.html">Menu</a></li>
                <li class="nav-item"><a class="nav-link nav-link-custom" data-page="gallery" data-nav-link="pages/gallery.html" href="pages/gallery.html">Gallery</a></li>
                <li class="nav-item"><a class="nav-link nav-link-custom" data-page="reserve" data-nav-link="pages/reserve.html" href="pages/reserve.html">Reserve</a></li>
                <li class="nav-item"><a class="nav-link nav-link-custom" data-page="blog" data-nav-link="pages/blog.html" href="pages/blog.html">Blog</a></li>
                <li class="nav-item"><a class="nav-link nav-link-custom" data-page="contact" data-nav-link="pages/contact.html" href="pages/contact.html">Contact</a></li>
            </ul>
            <div class="d-flex align-items-center gap-3 mobile-menu-actions">
                <a data-nav-link="pages/login.html" href="pages/login.html" class="nav-icon-btn" aria-label="Sign In or Register" title="Sign In / Register">
                    <i class="bi bi-person"></i>
                </a>
                <a href="#" class="nav-icon-btn d-none d-lg-inline-flex" data-bs-toggle="offcanvas" data-bs-target="#cartCanvas" aria-label="Shopping Bag">
                    <i class="bi bi-bag"></i>
                    <span class="cart-count" id="cartCount">0</span>
                </a>
                <a data-nav-link="pages/reserve.html" href="pages/reserve.html" class="btn-chili">Book A Table <i class="bi bi-arrow-up-right"></i></a>
            </div>
        </div>
    </div>
</nav>`;

  const FOOTER_FALLBACK = `
<footer>
    <div class="container">
        <div class="row g-4">
            <div class="col-lg-4">
                <a class="brand-logo mb-3" data-nav-link="index.html" href="index.html" style="color:#fff;">
                    <img data-logo-img src="assets/images/logoStackly.webp" alt="Stackly Food & Restaurant Logo">
                </a>
                <p>Artisanal wood-fired pizzas, flame-seared gourmet burgers, and British farm-to-table plates crafted with passion in the heart of Covent Garden, London.</p>
                <div class="footer-social mt-3">
                    <a href="#" rel="noopener" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" rel="noopener" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" rel="noopener" aria-label="X Twitter"><i class="bi bi-twitter-x"></i></a>
                    <a href="#" rel="noopener" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
                    <a href="#" rel="noopener" aria-label="WhatsApp"><i class="bi bi-whatsapp"></i></a>
                </div>
            </div>
            <div class="col-lg-2 col-6">
                <h6>Quick Links</h6>
                <a data-nav-link="index.html" href="index.html" class="f-link">Home</a>
                <a data-nav-link="pages/about.html" href="pages/about.html" class="f-link">About Story</a>
                <a data-nav-link="pages/menu.html" href="pages/menu.html" class="f-link">Full Menu</a>
                <a data-nav-link="pages/gallery.html" href="pages/gallery.html" class="f-link">Visual Gallery</a>
                <a data-nav-link="pages/reserve.html" href="pages/reserve.html" class="f-link">Book A Table</a>
                <a data-nav-link="pages/blog.html" href="pages/blog.html" class="f-link">Culinary Journal</a>
                <a data-nav-link="pages/contact.html" href="pages/contact.html" class="f-link">Contact Us</a>
            </div>
            <div class="col-lg-2 col-6">
                <h6>Signatures</h6>
                <a data-nav-link="pages/menu.html" href="pages/menu.html" class="f-link">Wagyu Smash Burgers</a>
                <a data-nav-link="pages/menu.html" href="pages/menu.html" class="f-link">Neapolitan Pizzas</a>
                <a data-nav-link="pages/menu.html" href="pages/menu.html" class="f-link">Buttermilk Chicken</a>
                <a data-nav-link="pages/menu.html" href="pages/menu.html" class="f-link">Truffle &amp; Herb Fries</a>
                <a data-nav-link="pages/menu.html" href="pages/menu.html" class="f-link">Artisan Gelato Shakes</a>
                <a href="#" class="f-link">Private Dining</a>
            </div>
            <div class="col-lg-4">
                <h6>Get In Touch</h6>
                <div class="f-contact"><i class="bi bi-geo-alt-fill"></i><span>24 Covent Garden Piazza, London WC2E 8RF, United Kingdom</span></div>
                <div class="f-contact"><i class="bi bi-telephone-fill"></i><span>+91 9876543210</span></div>
                <div class="f-contact"><i class="bi bi-envelope-fill"></i><span>hello@stacklyfood.co.uk</span></div>
                <div class="f-contact"><i class="bi bi-clock-fill"></i><span>Mon – Sun: 10:00 AM – 11:30 PM</span></div>
            </div>
        </div>
        <div class="footer-bottom d-flex flex-wrap justify-content-between align-items-center gap-2">
            <span>© 2026 Stackly Food &amp; Restaurant. Crafted with bold flavour in London, UK.</span>
            <span>
                <i class="bi bi-credit-card-2-front me-2" title="Card Payments"></i>
                <i class="bi bi-paypal me-2" title="PayPal"></i>
                <i class="bi bi-apple me-2" title="Apple Pay"></i>
                <i class="bi bi-cash-coin" title="Cash"></i>
            </span>
        </div>
    </div>
    <a href="#" rel="noopener" class="whatsapp-fab" aria-label="Chat on WhatsApp"><i class="bi bi-whatsapp"></i></a>
    <button type="button" class="back-to-top" id="backToTop" aria-label="Scroll to top"><i class="bi bi-arrow-up"></i></button>
</footer>
<div class="offcanvas offcanvas-end offcanvas-cart" tabindex="-1" id="cartCanvas">
    <div class="offcanvas-header border-bottom">
        <h5 class="display-font mb-0"><i class="bi bi-bag-check text-danger me-2"></i>Your Kitchen Order</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body d-flex flex-column">
        <div id="cartItems" class="flex-grow-1">
            <p class="text-center text-muted mt-5" id="cartEmptyMsg">Your order bag is empty.<br>Add something delicious from our menu!</p>
        </div>
        <div class="border-top pt-3 mt-3">
            <div class="d-flex justify-content-between mb-3">
                <strong>Estimated Total</strong>
                <strong id="cartTotal" style="color:var(--chili);">£0.00</strong>
            </div>
            <a data-nav-link="pages/reserve.html" href="pages/reserve.html" class="btn-chili w-100 justify-content-center">Proceed to Checkout <i class="bi bi-arrow-right"></i></a>
        </div>
    </div>
</div>
<div class="toast-container">
    <div id="cartToast" class="toast toast-cart align-items-center text-white border-0" style="background:var(--basil);" role="alert">
        <div class="d-flex">
            <div class="toast-body"><i class="bi bi-check-circle-fill me-2" style="color:var(--mustard);"></i><span id="toastMsg">Added to your order!</span></div>
            <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
        </div>
    </div>
</div>`;

  async function loadCommonComponents() {
    const headerHolder = document.getElementById("header-placeholder");
    const footerHolder = document.getElementById("footer-placeholder");

    if (headerHolder) {
      try {
        const res = await fetch(rootPrefix + "pages/components/header.html");
        if (res.ok) {
          headerHolder.innerHTML = await res.text();
        } else {
          headerHolder.innerHTML = HEADER_FALLBACK;
        }
      } catch (e) {
        headerHolder.innerHTML = HEADER_FALLBACK;
      }
    }

    if (footerHolder) {
      try {
        const res = await fetch(rootPrefix + "pages/components/footer.html");
        if (res.ok) {
          footerHolder.innerHTML = await res.text();
        } else {
          footerHolder.innerHTML = FOOTER_FALLBACK;
        }
      } catch (e) {
        footerHolder.innerHTML = FOOTER_FALLBACK;
      }
    }

    normalizeComponentPaths();
    highlightActiveNav();
    initHeaderAndScroll();
    initCartSystem();
  }

  function normalizeComponentPaths() {
    document.querySelectorAll("[data-logo-img]").forEach((img) => {
      img.setAttribute("src", rootPrefix + "assets/images/logoStackly.webp");
    });
    document.querySelectorAll("[data-nav-link]").forEach((a) => {
      const target = a.getAttribute("data-nav-link");
      a.setAttribute("href", rootPrefix + target);
    });
  }

  function highlightActiveNav() {
    const path = window.location.pathname.toLowerCase();
    let activePage = "home";
    if (path.includes("about")) activePage = "about";
    else if (path.includes("menu")) activePage = "menu";
    else if (path.includes("gallery")) activePage = "gallery";
    else if (path.includes("reserve")) activePage = "reserve";
    else if (path.includes("blog")) activePage = "blog";
    else if (path.includes("contact")) activePage = "contact";

    document.querySelectorAll("#mainNav .nav-link-custom").forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("data-page") === activePage,
      );
    });
  }

  function initHeaderAndScroll() {
    const mainNav = document.getElementById("mainNav");
    const headerSpacer = document.getElementById("headerSpacer");
    const backToTop = document.getElementById("backToTop");
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const mobileMenuClose = document.getElementById("mobileMenuClose");
    const navMenu = document.getElementById("navMenu");

    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      if (mainNav) {
        if (scrollY > 45) {
          mainNav.classList.add("scrolled");
          if (headerSpacer && window.innerWidth >= 992) {
            headerSpacer.classList.add("active");
          }
        } else {
          mainNav.classList.remove("scrolled");
          if (headerSpacer) headerSpacer.classList.remove("active");
        }
      }
      if (backToTop) {
        backToTop.classList.toggle("show", scrollY > 320);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    if (backToTop) {
      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    // Full-screen mobile menu open/close
    function openMobileMenu() {
      if (!navMenu) return;
      navMenu.classList.add("show");
      document.body.classList.add("mobile-menu-open");
    }

    function closeMobileMenu() {
      if (!navMenu) return;
      navMenu.classList.remove("show");
      document.body.classList.remove("mobile-menu-open");
    }

    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener("click", openMobileMenu);
    }
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener("click", closeMobileMenu);
    }
    if (navMenu) {
      navMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", closeMobileMenu);
      });
    }
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMobileMenu();
    });
  }

  // Shopping Cart System
  let cart = [];
  try {
    cart = JSON.parse(localStorage.getItem("stackly_cart") || "[]");
  } catch (e) {
    cart = [];
  }

  function saveCart() {
    try {
      localStorage.setItem("stackly_cart", JSON.stringify(cart));
    } catch (e) {}
  }

  function renderCart() {
    const cartItemsEl = document.getElementById("cartItems");
    const cartTotalEl = document.getElementById("cartTotal");
    const countBadges = document.querySelectorAll(".cart-count");

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    countBadges.forEach((b) => {
      b.textContent = totalQty;
    });

    if (!cartItemsEl || !cartTotalEl) return;

    if (cart.length === 0) {
      cartItemsEl.innerHTML = `<p class="text-center text-muted mt-5" id="cartEmptyMsg">Your order bag is empty.<br>Add something delicious from our menu!</p>`;
      cartTotalEl.textContent = "£0.00";
      return;
    }

    let total = 0;
    cartItemsEl.innerHTML = cart
      .map((item, idx) => {
        const sub = item.price * item.qty;
        total += sub;
        return `
            <div class="d-flex align-items-center justify-content-between py-2 border-bottom">
                <div class="d-flex align-items-center gap-2">
                    <img src="${item.img}" alt="${item.name}" style="width:48px;height:48px;border-radius:10px;object-fit:cover;">
                    <div>
                        <div class="fw-bold" style="font-size:0.9rem;color:var(--ink);">${item.name}</div>
                        <small class="text-muted">£${item.price.toFixed(2)} × ${item.qty}</small>
                    </div>
                </div>
                <div class="d-flex align-items-center gap-2">
                    <strong style="color:var(--chili);font-size:0.9rem;">£${sub.toFixed(2)}</strong>
                    <button type="button" class="btn btn-sm text-danger p-0 remove-cart-item" data-idx="${idx}" aria-label="Remove"><i class="bi bi-trash3"></i></button>
                </div>
            </div>`;
      })
      .join("");

    cartTotalEl.textContent = "£" + total.toFixed(2);

    cartItemsEl.querySelectorAll(".remove-cart-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-idx"), 10);
        cart.splice(idx, 1);
        saveCart();
        renderCart();
      });
    });
  }

  function addToCart(name, price, img, qty = 1) {
    const existing = cart.find((i) => i.name === name);
    if (existing) {
      existing.qty += qty;
    } else {
      cart.push({ name, price: parseFloat(price), img, qty });
    }
    saveCart();
    renderCart();

    const toastEl = document.getElementById("cartToast");
    const toastMsg = document.getElementById("toastMsg");
    if (toastMsg) toastMsg.textContent = `${qty}× ${name} added to order!`;
    if (toastEl && window.bootstrap) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }

  function initCartSystem() {
    renderCart();

    // Quick View Modal & Direct Add
    let currentItem = null;
    let currentQty = 1;

    const qvModalEl = document.getElementById("quickViewModal");
    const qvName = document.getElementById("qvName");
    const qvDesc = document.getElementById("qvDesc");
    const qvPrice = document.getElementById("qvPrice");
    const qvImg = document.getElementById("qvImg");
    const qvQty = document.getElementById("qvQty");
    const qvStars = document.getElementById("qvStars");

    document.querySelectorAll(".qv-trigger").forEach((card) => {
      card.addEventListener("click", (e) => {
        const name = card.getAttribute("data-name") || "Signature Dish";
        const price = parseFloat(card.getAttribute("data-price") || "9.50");
        const img = card.getAttribute("data-img") || "";
        const desc = card.getAttribute("data-desc") || "";

        if (e.target.closest(".mc-add") || !qvModalEl) {
          e.stopPropagation();
          addToCart(name, price, img, 1);
          return;
        }

        currentItem = { name, price, img };
        currentQty = 1;
        if (qvName) qvName.textContent = name;
        if (qvDesc) qvDesc.textContent = desc;
        if (qvPrice) qvPrice.textContent = "£" + price.toFixed(2);
        if (qvImg) qvImg.setAttribute("src", img);
        if (qvQty) qvQty.textContent = "1";
        if (qvStars) {
          qvStars.innerHTML =
            '<i class="bi bi-star-fill text-warning"></i>'.repeat(5);
        }
        if (window.bootstrap) {
          new bootstrap.Modal(qvModalEl).show();
        }
      });
    });

    const qvMinus = document.getElementById("qvMinus");
    const qvPlus = document.getElementById("qvPlus");
    const qvAddCart = document.getElementById("qvAddCart");

    if (qvMinus) {
      qvMinus.addEventListener("click", () => {
        if (currentQty > 1) {
          currentQty--;
          if (qvQty) qvQty.textContent = String(currentQty);
        }
      });
    }
    if (qvPlus) {
      qvPlus.addEventListener("click", () => {
        currentQty++;
        if (qvQty) qvQty.textContent = String(currentQty);
      });
    }
    if (qvAddCart) {
      qvAddCart.addEventListener("click", () => {
        if (currentItem) {
          addToCart(
            currentItem.name,
            currentItem.price,
            currentItem.img,
            currentQty,
          );
          if (qvModalEl && window.bootstrap) {
            const inst = bootstrap.Modal.getInstance(qvModalEl);
            if (inst) inst.hide();
          }
        }
      });
    }

    // Direct add-to-cart buttons on Menu page bundles
    document.querySelectorAll(".direct-add-cart").forEach((btn) => {
      btn.addEventListener("click", () => {
        const name = btn.getAttribute("data-name");
        const price = parseFloat(btn.getAttribute("data-price") || "15.00");
        const img = btn.getAttribute("data-img") || "";
        addToCart(name, price, img, 1);
      });
    });
  }

  function initPageFeatures() {
    // Preloader hide
    const preloader = document.getElementById("preloader");
    if (preloader) {
      setTimeout(() => preloader.classList.add("hide"), 2000);
    }

    // Ticket Tabs filter (Home & Menu Page)
    document.querySelectorAll(".ticket-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        const parent = tab.closest(".ticket-tabs");
        if (parent) {
          parent
            .querySelectorAll(".ticket-tab")
            .forEach((t) => t.classList.remove("active"));
        }
        tab.classList.add("active");
        const filter = tab.getAttribute("data-filter");
        document.querySelectorAll(".ticket-item").forEach((item) => {
          const cat = item.getAttribute("data-cat");
          item.style.display =
            filter === "all" || cat === filter ? "flex" : "none";
        });
      });
    });

    // Menu Page Grid Filter
    document.querySelectorAll(".menu-filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelectorAll(".menu-filter-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        document.querySelectorAll(".menu-filter-item").forEach((item) => {
          const cat = item.getAttribute("data-category");
          item.style.display = filter === "all" || cat === filter ? "" : "none";
        });
      });
    });

    // Gallery Page Grid Filter
    document.querySelectorAll(".gf-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelectorAll(".gf-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.getAttribute("data-filter");
        document.querySelectorAll(".gallery-filter-item").forEach((item) => {
          const cat = item.getAttribute("data-category");
          item.style.display = filter === "all" || cat === filter ? "" : "none";
        });
      });
    });

    // Gallery Lightbox Modal
    const galleryModalEl = document.getElementById("galleryModal");
    const lbImg = document.getElementById("lbImg");
    const lbTitle = document.getElementById("lbTitle");
    const lbDesc = document.getElementById("lbDesc");
    document.querySelectorAll(".gallery-tile").forEach((tile) => {
      tile.addEventListener("click", () => {
        if (!galleryModalEl || !window.bootstrap) return;
        if (lbImg)
          lbImg.setAttribute("src", tile.getAttribute("data-img") || "");
        if (lbTitle)
          lbTitle.textContent = tile.getAttribute("data-title") || "";
        if (lbDesc) lbDesc.textContent = tile.getAttribute("data-desc") || "";
        new bootstrap.Modal(galleryModalEl).show();
      });
    });

    // Blog Article Reader Modal
    const blogModalEl = document.getElementById("blogModal");
    const bmImg = document.getElementById("bmImg");
    const bmMeta = document.getElementById("bmMeta");
    const bmTitle = document.getElementById("bmTitle");
    const bmBody = document.getElementById("bmBody");
    document.querySelectorAll(".blog-card").forEach((card) => {
      card.addEventListener("click", () => {
        if (!blogModalEl || !window.bootstrap) return;
        if (bmImg)
          bmImg.setAttribute("src", card.getAttribute("data-img") || "");
        if (bmMeta) bmMeta.textContent = card.getAttribute("data-meta") || "";
        if (bmTitle)
          bmTitle.textContent = card.getAttribute("data-title") || "";
        if (bmBody) {
          const paragraphs = (card.getAttribute("data-body") || "").split("|");
          bmBody.innerHTML = paragraphs.map((p) => `<p>${p}</p>`).join("");
        }
        new bootstrap.Modal(blogModalEl).show();
      });
    });

    // Video Modal
    const videoModalEl = document.getElementById("videoModal");
    const videoFrame = document.getElementById("videoFrame");
    if (videoModalEl && videoFrame) {
      videoModalEl.addEventListener("show.bs.modal", () => {
        videoFrame.setAttribute(
          "src",
          "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1",
        );
      });
      videoModalEl.addEventListener("hide.bs.modal", () => {
        videoFrame.setAttribute("src", "");
      });
    }

    // Countdown Timer
    const cdDays = document.getElementById("cd-days");
    const cdHours = document.getElementById("cd-hours");
    const cdMins = document.getElementById("cd-mins");
    const cdSecs = document.getElementById("cd-secs");
    if (cdDays && cdHours && cdMins && cdSecs) {
      let remaining = 2 * 86400 + 6 * 3600 + 42 * 60 + 19;
      setInterval(() => {
        if (remaining > 0) remaining--;
        const d = Math.floor(remaining / 86400);
        const h = Math.floor((remaining % 86400) / 3600);
        const m = Math.floor((remaining % 3600) / 60);
        const s = remaining % 60;
        cdDays.textContent = String(d).padStart(2, "0");
        cdHours.textContent = String(h).padStart(2, "0");
        cdMins.textContent = String(m).padStart(2, "0");
        cdSecs.textContent = String(s).padStart(2, "0");
      }, 1000);
    }

    // Interactive Table Spot Selector on Reserve Page
    document.querySelectorAll(".table-spot").forEach((spot) => {
      spot.addEventListener("click", () => {
        document
          .querySelectorAll(".table-spot")
          .forEach((s) => s.classList.remove("selected"));
        spot.classList.add("selected");
        const tableInput = document.getElementById("selectedTableInput");
        if (tableInput) {
          tableInput.value = spot.getAttribute("data-table") || "";
        }
      });
    });

    // Forms
    const bindForm = (formId, msgId) => {
      const form = document.getElementById(formId);
      const msg = document.getElementById(msgId);
      if (form) {
        form.addEventListener("submit", (e) => {
          e.preventDefault();
          if (msg) msg.style.display = "block";
          form.reset();
          setTimeout(() => {
            if (msg) msg.style.display = "none";
          }, 5500);
        });
      }
    };
    bindForm("reservationForm", "reservationSuccess");
    bindForm("contactForm", "contactSuccess");
    bindForm("newsletterForm", "newsletterMsg");

    // Swiper Testimonials
    if (window.Swiper && document.querySelector(".testiSwiper")) {
      new Swiper(".testiSwiper", {
        slidesPerView: 1,
        spaceBetween: 24,
        loop: true,
        autoplay: { delay: 4500, disableOnInteraction: false },
        pagination: { el: ".swiper-pagination", clickable: true },
        breakpoints: {
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        },
      });
    }

    // AOS Init
    if (window.AOS) {
      AOS.init({ duration: 800, easing: "ease-out-cubic", once: true });
    }
  }

  // Redirect any empty links ("") or "#" links to the 404 page across the whole project
  function initEmptyLinkRedirect() {
    document.addEventListener(
      "click",
      (e) => {
        const anchor = e.target.closest("a");
        if (!anchor) return;

        const rawHref = anchor.getAttribute("href");
        const trimmedHref = rawHref ? rawHref.trim() : "";

        if (
          trimmedHref === "" ||
          trimmedHref === "#" ||
          trimmedHref.toLowerCase() === "javascript:void(0)"
        ) {
          e.preventDefault();
          e.stopPropagation();
          window.location.href = rootPrefix + "pages/404.html";
        }
      },
      true,
    );
  }

  document.addEventListener("DOMContentLoaded", () => {
    initEmptyLinkRedirect();
    loadCommonComponents();
    initPageFeatures();
  });
})();
