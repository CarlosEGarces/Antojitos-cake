// Datos de productos reales de Antojitos Cakes Express
const CATEGORIAS_DISPONIBLES = [
  "Tortas",
  "Buttercream", 
  "Brownies",
  "Cheesecakes",
  "Cupcakes",        
  "Postres Fríos",   
  "Galletas",        
]


const productos = [
  {
    id: 1,
    nombre: "3 Leches Natural",
    descripcion: "Deliciosa torta tres leches tradicional con crema chantilly",
    precio: 32,
    categoria: "Tortas",
    imagenes: [
      "\\assets\\images\\Productos\\Tortas\\3 leche natural.png",
      "\\assets\\images\\Productos\\Tortas\\3 leche natural2.png",
    ],
    recomendado: true,
    detalles:
      "Bandeja de tres leches natural con la receta tradicional, empapada en la mezcla perfecta de tres tipos de leche y decorada con crema chantilly. Un clásico que nunca pasa de moda.",
    tamaño: "Bandeja rectangular - 12 porciones",
  },
  {
    id: 2,
    nombre: "Chocofresa o Arequipefresa",
    descripcion: "Bizcocho húmedo relleno de chocolate y decorado con fresas",
    precio: 20,
    categoria: "Tortas",
    imagenes: [
      "\\assets\\images\\Productos\\Tortas\\Choco fresa.png",
      "\\assets\\images\\Productos\\Tortas\\Arequipefresa.png",
    ],
    recomendado: true,
    detalles:
      "Bizcocho húmedo relleno de delicioso chocolate y decorado con fresas frescas y crema chantilly. Una combinación perfecta de sabores que conquista todos los paladares.",
tamaño: `4 porciones 20$
8 porciones 30$
15 porciones 50$`,
  },
  {
    id: 3,
    nombre: "Torta Buttercream",
    descripcion: "Hermosa torta decorada con buttercream y drip de chocolate",
    precio: 45,
    categoria: "Buttercream",
    imagenes: [
      "assets\\images\\Productos\\Tortas\\Buttercream.png",
      "assets\\images\\Productos\\Tortas\\Buttercream2.png",
    ],
    recomendado: true,
    detalles:
      "Elegante torta decorada con técnica buttercream, drip de chocolate y rosetas de crema. Coronada con cerezas frescas para un toque especial.",
    tamaño: "por añadir",
  },
  {
    id: 4,
    nombre: "Antojibrownie Cake",
    descripcion: "Torta de brownie cremosa rellena de crema de avellana",
    precio: 75,
    categoria: "Brownies",
    imagenes: [
      "assets\\images\\Productos\\Tortas\\Antojibrownie cake.png",
    ],
    recomendado: true,
    detalles:
      "Nuestra especialidad: torta de brownie muy cremosa y deliciosa rellena de crema de avellana. Nuestro brownie contiene nueces para un sabor y textura únicos.",
    tamaño: "por añadir",
  },
  {
    id: 5,
    nombre: "Imposible Choque",
    descripcion: "Torta de chocolate con quesillo - Disponible sencilla o con fresas",
    precio: 30,
    categoria: "Tortas",
    imagenes: [
      "assets\\images\\Productos\\Tortas\\Choque(fresas).png",
      "assets\\images\\Productos\\Tortas\\Choque(sencilla).png",
       ],
    recomendado: true,
    detalles:
      "Deliciosa torta de chocolate combinada con quesillo cremoso. Una experiencia única de sabores que conquista todos los paladares. Disponible en presentación sencilla  o decorada con fresas frescas.",
tamaño: `12 porciones 30$ sencilla 
12 porciones 37$ decorada con fresas`,
  },
  {
    id: 6,
    nombre: "Chocolático",
    descripcion: "Torta de chocolate rellena y cubierta con chocolate o arequipe",
    precio: 22,
    categoria: "Tortas",
    imagenes: [
      "assets\\images\\Productos\\Tortas\\Chocolatico.png",
    ],
    detalles:
      "Deliciosa torta de chocolate disponible con relleno y cobertura de chocolate o arequipe. Disponible en tres tamaños: Pequeño 8 porciones ($22), Mediano 12 porciones ($26), Grande 20 porciones ($48).",
tamaño: `8 porciones 22$
12 porciones 26$
20 porciones 48$`,
  },
  {
    id: 7,
    nombre: "Cheese Cake",
    descripcion: "Cremoso cheesecake con compota de frutos rojos",
    precio: 40,
    categoria: "Cheesecakes",
    imagenes: [
      "assets\\images\\Productos\\Tortas\\Cheese cake.png",
    ],
    recomendado: true,
    detalles:
      "Auténtico cheesecake cremoso y suave con base de galleta, cubierto con deliciosa compota de frutos rojos y decorado con fresas frescas y crema chantilly.",
    tamaño: "15 porciones",
  },
  {
    id: 8,
    nombre: "Flor de otoño",
    descripcion: "Bizcocho húmedo relleno de crema pastelera y quesillo, decorado con topping de arequipe",
    precio: 40,
    categoria: "Cheesecakes",
    imagenes: [
      "assets\\images\\Productos\\Tortas\\Flor de otoño.png",
      "assets\\images\\Productos\\Tortas\\Flor de otoño2.png"
    ],
    recomendado: true,
    detalles:
      "Bizcocho húmedo relleno de crema pastelera y quesillo, decorado con topping de arequipe.",
  tamaño: "Mini 4 porciones 16$, Mediana 8 porciones 22$, Grande 15 porciones 35$, Flor de 30 porciones 70$",
},
]

// Variables globales
let categoriaActual = "Todos"
let productoSeleccionado = null
let currentImageIndex = 0

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  initializePage()
  setupModal()
  setupTouchInteractions()
  setupSearch()
})

function initializePage() {
  generateFilters()
  displayProducts(productos)
}

// Luego modifica la función generateFilters():
function generateFilters() {
  const categorias = ["Todos", ...CATEGORIAS_DISPONIBLES]
  const filtersContent = document.getElementById("filtersContent")

  if (!filtersContent) return

  filtersContent.innerHTML = categorias
    .map(
      (categoria) =>
        `<button class="filter-btn ${categoria === categoriaActual ? "active" : ""}" 
                 onclick="filterByCategory('${categoria}')">
            ${categoria}
         </button>`,
    )
    .join("")
}

function filterByCategory(categoria) {
  categoriaActual = categoria

  // Update active buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  event.target.classList.add("active")

  // Filter products
  const filteredProducts = categoria === "Todos" ? productos : productos.filter((p) => p.categoria === categoria)
  displayProducts(filteredProducts)
}

function displayProducts(productArray) {
  const productsGrid = document.getElementById("productsGrid")
  if (!productsGrid) return

  productsGrid.innerHTML = productArray
    .map(
      (producto) => `
        <div class="product-card" onclick="openModal(${producto.id})">
            <div class="product-image-container">
                <img src="${producto.imagenes[0]}" alt="${producto.nombre}" class="product-image">
                <div class="product-badge">${producto.categoria}</div>
                ${producto.imagenes.length > 1 ? '<div class="multiple-images-indicator"><i class="fas fa-images"></i></div>' : ""}
                ${
                  producto.recomendado
                    ? `<div class="recommendation-star" tabindex="0" role="button" aria-label="Producto recomendado" data-product-id="${producto.id}">
                     <i class="fas fa-star"></i>
                   </div>
                   <div class="recommendation-badge">Recomendación de la Casa</div>`
                    : ""
                }
            </div>
            <div class="product-content">
                <h3 class="product-title">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-footer">
                    <span class="product-price">$${producto.precio.toLocaleString()}</span>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

function setupSearch() {
  const searchInput = document.getElementById("searchInput")
  const searchButton = document.getElementById("searchButton")

  if (!searchInput || !searchButton) return

  searchInput.addEventListener("input", (e) => {
    const term = e.target.value.trim()
    if (term.length >= 2 || term.length === 0) {
      searchProducts(term)
    }
  })

  searchButton.addEventListener("click", () => {
    const term = searchInput.value.trim()
    searchProducts(term)
  })

  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const term = searchInput.value.trim()
      searchProducts(term)
    }
  })
}

function searchProducts(term) {
  if (!term) {
    const filteredProducts =
      categoriaActual === "Todos" ? productos : productos.filter((p) => p.categoria === categoriaActual)
    displayProducts(filteredProducts)
    return
  }

  const filteredProducts = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(term.toLowerCase()) ||
      producto.descripcion.toLowerCase().includes(term.toLowerCase()) ||
      producto.categoria.toLowerCase().includes(term.toLowerCase()),
  )

  displayProducts(filteredProducts)

  if (filteredProducts.length === 0) {
    document.getElementById("productsGrid").innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
        <i class="fas fa-search" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
        <h3 style="color: var(--text-gray); margin-bottom: 0.5rem;">No se encontraron productos</h3>
        <p style="color: var(--text-light);">Intenta con otros términos de búsqueda</p>
      </div>
    `
  }
}

function setupTouchInteractions() {
  document.addEventListener("click", (e) => {
    if (e.target.closest(".recommendation-star")) {
      const star = e.target.closest(".recommendation-star")
      handleStarTouch(star)
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      if (e.target.classList.contains("recommendation-star")) {
        e.preventDefault()
        handleStarTouch(e.target)
      }
    }
  })
}

function handleStarTouch(starElement) {
  const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0

  if (isTouchDevice) {
    starElement.classList.add("touched")
    setTimeout(() => {
      starElement.classList.remove("touched")
    }, 3000)
    event.stopPropagation()
  }
}

function createImageGallery(imagenes) {
  if (imagenes.length === 1) {
    return `
      <div class="modal-image-section">
        <img src="${imagenes[0]}" alt="Producto" class="modal-image">
      </div>
    `
  }

  return `
    <div class="modal-image-section">
      <div class="image-gallery">
        <div class="main-image-container">
          <img src="${imagenes[0]}" alt="Producto" class="modal-image" id="mainImage">
          ${
            imagenes.length > 1
              ? `
            <button class="gallery-nav gallery-prev" onclick="changeImage(-1)">
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="gallery-nav gallery-next" onclick="changeImage(1)">
              <i class="fas fa-chevron-right"></i>
            </button>
            <div class="image-counter">
              <span id="currentImageNumber">1</span> / ${imagenes.length}
            </div>
          `
              : ""
          }
        </div>
        ${
          imagenes.length > 1
            ? `
          <div class="thumbnail-container">
            ${imagenes
              .map(
                (img, index) => `
              <img src="${img}" 
                   alt="Vista ${index + 1}" 
                   class="thumbnail ${index === 0 ? "active" : ""}" 
                   onclick="selectImage(${index})"
                   data-index="${index}">
            `,
              )
              .join("")}
          </div>
        `
            : ""
        }
      </div>
    </div>
  `
}

function changeImage(direction) {
  if (!productoSeleccionado || productoSeleccionado.imagenes.length <= 1) return

  currentImageIndex += direction

  if (currentImageIndex >= productoSeleccionado.imagenes.length) {
    currentImageIndex = 0
  } else if (currentImageIndex < 0) {
    currentImageIndex = productoSeleccionado.imagenes.length - 1
  }

  updateMainImage()
}

function selectImage(index) {
  if (!productoSeleccionado || index >= productoSeleccionado.imagenes.length) return

  currentImageIndex = index
  updateMainImage()
}

function updateMainImage() {
  const mainImage = document.getElementById("mainImage")
  const currentImageNumber = document.getElementById("currentImageNumber")
  const thumbnails = document.querySelectorAll(".thumbnail")

  if (mainImage) {
    mainImage.src = productoSeleccionado.imagenes[currentImageIndex]
  }

  if (currentImageNumber) {
    currentImageNumber.textContent = currentImageIndex + 1
  }

  thumbnails.forEach((thumb, index) => {
    thumb.classList.toggle("active", index === currentImageIndex)
  })
}

function openModal(productId) {
  productoSeleccionado = productos.find((p) => p.id === productId)
  if (!productoSeleccionado) return

  currentImageIndex = 0
  const modalBody = document.getElementById("modalBody")
  if (!modalBody) return

  modalBody.innerHTML = `
    <div class="modal-grid">
        ${createImageGallery(productoSeleccionado.imagenes)}
        
        <div class="modal-info">
            <h2 class="modal-title">
                ${productoSeleccionado.nombre}
                ${productoSeleccionado.recomendado ? '<i class="fas fa-star" style="color: var(--primary-pink); animation: pulse 2s infinite;"></i>' : ""}
            </h2>
            
            <div class="modal-price-section">
                <span class="modal-price">$${productoSeleccionado.precio.toLocaleString()}</span>
            </div>
            
            <div>
                <h4 class="modal-section-title">Descripción</h4>
                <p class="modal-description">${productoSeleccionado.detalles}</p>
            </div>
            
            <div>
                <h4 class="modal-section-title">Tamaño</h4>
                <p class="modal-description">${productoSeleccionado.tamaño}</p>
            </div>
        </div>
    </div>
  `

  const modalOverlay = document.getElementById("modalOverlay")
  if (modalOverlay) {
    modalOverlay.classList.add("active")
    document.body.style.overflow = "hidden"
  }
}

function closeModal() {
  const modalOverlay = document.getElementById("modalOverlay")
  if (modalOverlay) {
    modalOverlay.classList.remove("active")
    document.body.style.overflow = ""
  }
  productoSeleccionado = null
  currentImageIndex = 0
}

function setupModal() {
  const modalOverlay = document.getElementById("modalOverlay")
  const modalClose = document.getElementById("modalClose")

  if (!modalOverlay || !modalClose) return

  modalClose.addEventListener("click", closeModal)

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      closeModal()
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      closeModal()
    }
    if (e.key === "ArrowLeft" && modalOverlay.classList.contains("active")) {
      changeImage(-1)
    }
    if (e.key === "ArrowRight" && modalOverlay.classList.contains("active")) {
      changeImage(1)
    }
  })
}

// Make functions globally available
window.filterByCategory = filterByCategory
window.openModal = openModal
window.changeImage = changeImage
window.selectImage = selectImage
