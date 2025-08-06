//// Datos de productos
const productos = [
  {
    id: 1,
    nombre: "Torta de Chocolate Premium",
    descripcion: "Deliciosa torta de chocolate con ganache y decoración artesanal",
    precio: 45000,
    categoria: "Tortas",
    imagen: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=400&fit=crop&crop=center",
    recomendado: true,
    detalles:
      "Torta de chocolate húmeda de 3 capas con ganache de chocolate belga, relleno de dulce de leche y decoración personalizada. Perfecta para celebraciones especiales. Incluye mensaje personalizado.",
    ingredientes: ["Chocolate belga", "Harina de trigo", "Huevos frescos", "Mantequilla", "Dulce de leche", "Azúcar"],
    tamaño: "25cm de diámetro (8-10 porciones)",
    disponible: true,
  },
  {
    id: 2,
    nombre: "Cupcakes Variados",
    descripcion: "Set de 12 cupcakes con diferentes sabores y decoraciones",
    precio: 24000,
    categoria: "Cupcakes",
    imagen: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&h=400&fit=crop&crop=center",
    detalles:
      "Caja de 12 cupcakes artesanales con sabores variados: vainilla, chocolate, red velvet y limón. Cada uno decorado con buttercream y toppers temáticos.",
    ingredientes: [
      "Harina de trigo",
      "Huevos",
      "Mantequilla",
      "Azúcar",
      "Esencias naturales",
      "Colorantes alimentarios",
    ],
    tamaño: "12 unidades en caja decorativa",
    disponible: true,
  },
  {
    id: 3,
    nombre: "Cheesecake de Frutos Rojos",
    descripcion: "Cremoso cheesecake con base de galleta y coulis de frutos rojos",
    precio: 38000,
    categoria: "Cheesecakes",
    imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&h=400&fit=crop&crop=center",
    recomendado: true,
    detalles:
      "Cheesecake cremoso y suave con base de galleta graham, cobertura de frutos rojos frescos y coulis casero. Una experiencia única de sabor y textura.",
    ingredientes: ["Queso crema", "Galletas graham", "Frutos rojos", "Azúcar", "Huevos", "Crema de leche"],
    tamaño: "20cm de diámetro (6-8 porciones)",
    disponible: true,
  },
  {
    id: 4,
    nombre: "Macarons Franceses",
    descripcion: "Delicados macarons franceses en colores y sabores variados",
    precio: 18000,
    categoria: "Macarons",
    imagen: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&h=400&fit=crop&crop=center",
    detalles:
      "Caja de 12 macarons franceses artesanales con sabores como vainilla, chocolate, frambuesa, pistacho y caramelo. Perfectos para regalar o disfrutar.",
    ingredientes: ["Harina de almendra", "Azúcar glass", "Claras de huevo", "Colorantes naturales", "Ganache variado"],
    tamaño: "12 unidades en caja elegante",
    disponible: false,
  },
  {
    id: 5,
    nombre: "Torta Red Velvet",
    descripcion: "Clásica torta red velvet con frosting de queso crema",
    precio: 42000,
    categoria: "Tortas",
    imagen: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&h=400&fit=crop&crop=center",
    detalles:
      "Auténtica torta red velvet de terciopelo rojo con su característico color y sabor suave, cubierta con frosting de queso crema y decoración elegante.",
    ingredientes: ["Harina de trigo", "Cacao", "Colorante rojo", "Queso crema", "Mantequilla", "Azúcar"],
    tamaño: "25cm de diámetro (8-10 porciones)",
    disponible: true,
  },
  {
    id: 6,
    nombre: "Brownies Gourmet",
    descripcion: "Brownies húmedos con nueces y chocolate chips",
    precio: 15000,
    categoria: "Brownies",
    imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=400&fit=crop&crop=center",
    detalles:
      "Brownies súper húmedos y chocolatosos con trozos de nueces y chocolate chips. Perfectos para acompañar con helado o disfrutar solos.",
    ingredientes: ["Chocolate negro", "Mantequilla", "Huevos", "Azúcar", "Nueces", "Chocolate chips"],
    tamaño: "Bandeja de 9 porciones",
    disponible: true,
  },
  {
    id: 7,
    nombre: "Pie de Limón",
    descripcion: "Refrescante pie de limón con merengue tostado",
    precio: 32000,
    categoria: "Pies",
    imagen: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=400&h=400&fit=crop&crop=center",
    recomendado: true,
    detalles:
      "Pie de limón con base crujiente, relleno cremoso de limón natural y merengue suizo tostado. Perfecto balance entre dulce y ácido.",
    ingredientes: ["Masa quebrada", "Limones frescos", "Huevos", "Azúcar", "Mantequilla", "Merengue suizo"],
    tamaño: "22cm de diámetro (6-8 porciones)",
    disponible: true,
  },
  {
    id: 8,
    nombre: "Cookies Artesanales",
    descripcion: "Galletas caseras con chispas de chocolate y avena",
    precio: 12000,
    categoria: "Cookies",
    imagen: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=400&fit=crop&crop=center",
    detalles:
      "Galletas artesanales crujientes por fuera y suaves por dentro, con chispas de chocolate y avena. Receta familiar tradicional.",
    ingredientes: ["Harina de trigo", "Avena", "Chocolate chips", "Mantequilla", "Azúcar morena", "Huevos"],
    tamaño: "Bolsa de 15 unidades",
    disponible: true,
  },
  {
    id: 9,
    nombre: "Tiramisú Clásico",
    descripcion: "Auténtico tiramisú italiano con café y mascarpone",
    precio: 35000,
    categoria: "Postres",
    imagen: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop&crop=center",
    detalles:
      "Tiramisú tradicional italiano con capas de bizcochos de soletilla empapados en café espresso, crema de mascarpone y cacao en polvo.",
    ingredientes: ["Mascarpone", "Café espresso", "Bizcochos soletilla", "Huevos", "Azúcar", "Cacao en polvo"],
    tamaño: "Porción individual o familiar",
    disponible: true,
  },
]

// Variables globales
let categoriaActual = "Todos"
let productoSeleccionado = null

// Funciones auxiliares
function createStarRating() {
  // Implementación de la función createStarRating
  return '<i class="fas fa-star"></i>'.repeat(5)
}

function showNotification(message, type) {
  // Implementación de la función showNotification
  console.log(`Notification (${type}): ${message}`)
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  inicializarPagina()
  setupModal()

  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  if (searchInput && searchButton) {
    // Búsqueda en tiempo real
    searchInput.addEventListener('input', (e) => {
      const termino = e.target.value.trim();
      if (termino.length >= 2 || termino.length === 0) {
        buscarProductos(termino);
      }
    });

    // Búsqueda al hacer click en el botón
    searchButton.addEventListener('click', () => {
      const termino = searchInput.value.trim();
      buscarProductos(termino);
    });

    // Búsqueda al presionar Enter
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const termino = searchInput.value.trim();
        buscarProductos(termino);
      }
    });
  }
})

function inicializarPagina() {
  generarFiltros()
  mostrarProductos(productos)
}

function generarFiltros() {
  const categorias = ["Todos", ...new Set(productos.map((p) => p.categoria))]
  const filtersContent = document.getElementById("filtersContent")

  filtersContent.innerHTML = categorias
    .map(
      (categoria) =>
        `<button class="filter-btn ${categoria === categoriaActual ? "active" : ""}" 
                 onclick="filtrarPorCategoria('${categoria}')">
            ${categoria}
         </button>`,
    )
    .join("")
}

function filtrarPorCategoria(categoria) {
  categoriaActual = categoria

  // Actualizar botones activos
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  event.target.classList.add("active")

  // Filtrar productos
  const productosFiltrados = categoria === "Todos" ? productos : productos.filter((p) => p.categoria === categoria)

  mostrarProductos(productosFiltrados)
}

function mostrarProductos(productosArray) {
  const productsGrid = document.getElementById("productsGrid")

  productsGrid.innerHTML = productosArray
    .map(
      (producto) => `
        <div class="product-card" onclick="abrirModal(${producto.id})">
            <div class="product-image-container">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image">
                <div class="product-badge">${producto.categoria}</div>
                ${!producto.disponible ? '<div class="product-unavailable">Agotado</div>' : ""}
                ${producto.recomendado ? 
                  `<div class="recommendation-star">
                     <i class="fas fa-star"></i>
                   </div>
                   <div class="recommendation-badge">Recomendación de la Casa</div>` 
                  : ""}
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

function abrirModal(productoId) {
  productoSeleccionado = productos.find((p) => p.id === productoId)
  if (!productoSeleccionado) return

  const modalBody = document.getElementById("modalBody")
  modalBody.innerHTML = `
        <div class="modal-grid">
            <div class="modal-image-section">
                <img src="${productoSeleccionado.imagen}" alt="${productoSeleccionado.nombre}" class="modal-image">
                <div class="modal-price-rating">
                    <span class="modal-price">$${productoSeleccionado.precio.toLocaleString()}</span>
                </div>
            </div>
            
            <div class="modal-info">
                <h2 class="modal-title">
                    ${productoSeleccionado.nombre}
                    ${productoSeleccionado.recomendado ? '<i class="fas fa-star modal-recommendation-star"></i>' : ''}
                </h2>
                
                <div>
                    <h4 class="modal-section-title">Descripción</h4>
                    <p class="modal-description">${productoSeleccionado.detalles}</p>
                </div>
                
                <div>
                    <h4 class="modal-section-title">Ingredientes</h4>
                    <div class="ingredients-list">
                        ${productoSeleccionado.ingredientes
                          .map((ingrediente) => `<span class="ingredient-tag">${ingrediente}</span>`)
                          .join("")}
                    </div>
                </div>
                
                <div>
                    <h4 class="modal-section-title">Tamaño</h4>
                    <p class="modal-description">${productoSeleccionado.tamaño}</p>
                </div>
                
                ${
                  productoSeleccionado.disponible
                    ? `
                    <div class="availability-notice">
                        ✅ Disponible para entrega inmediata o programada
                    </div>
                `
                    : `
                    <div class="availability-notice" style="background: linear-gradient(135deg, #fef2f2, #fee2e2); border-color: #fca5a5; color: #991b1b;">
                        ❌ Producto temporalmente agotado
                    </div>
                `
                }
            </div>
        </div>
    `

  const modalOverlay = document.getElementById("modalOverlay")
  modalOverlay.classList.add("active")
  document.body.style.overflow = "hidden"
}

function cerrarModal() {
  const modalOverlay = document.getElementById("modalOverlay")
  modalOverlay.classList.remove("active")
  document.body.style.overflow = ""
  productoSeleccionado = null
}

function setupModal() {
  const modalOverlay = document.getElementById("modalOverlay")
  const modalClose = document.getElementById("modalClose")

  modalClose.addEventListener("click", cerrarModal)

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      cerrarModal()
    }
  })

  // Cerrar modal con tecla Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("active")) {
      cerrarModal()
    }
  })
}

function toggleFavorite(productoId) {
  // Aquí puedes implementar la lógica de favoritos
  showNotification("Producto agregado a favoritos", "success")
}

function agregarAlCarrito(productoId) {
  // Aquí puedes implementar la lógica del carrito
  showNotification("Producto agregado al carrito", "success")
  cerrarModal()
}

function contactarPersonalizar() {
  // Aquí puedes implementar la lógica de contacto
  const mensaje = `Hola, me interesa personalizar el producto: ${productoSeleccionado.nombre}`
  const whatsappUrl = `https://wa.me/584141234567?text=${encodeURIComponent(mensaje)}`
  window.open(whatsappUrl, "_blank")
}

// Función de búsqueda (para implementar en el futuro)
function buscarProductos(termino) {
  if (!termino) {
    // Si no hay término de búsqueda, mostrar productos filtrados por categoría actual
    const productosFiltrados = categoriaActual === "Todos" ? productos : productos.filter((p) => p.categoria === categoriaActual);
    mostrarProductos(productosFiltrados);
    return;
  }

  const productosFiltrados = productos.filter(
    (producto) =>
      producto.nombre.toLowerCase().includes(termino.toLowerCase()) ||
      producto.descripcion.toLowerCase().includes(termino.toLowerCase()) ||
      producto.categoria.toLowerCase().includes(termino.toLowerCase()) ||
      producto.ingredientes.some(ingrediente => 
        ingrediente.toLowerCase().includes(termino.toLowerCase())
      )
  );
  
  mostrarProductos(productosFiltrados);
  
  // Mostrar mensaje si no hay resultados
  if (productosFiltrados.length === 0) {
    document.getElementById("productsGrid").innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 2rem;">
        <i class="fas fa-search" style="font-size: 3rem; color: var(--text-light); margin-bottom: 1rem;"></i>
        <h3 style="color: var(--text-gray); margin-bottom: 0.5rem;">No se encontraron productos</h3>
        <p style="color: var(--text-light);">Intenta con otros términos de búsqueda</p>
      </div>
    `;
  }
}
