<script lang="ts">
	import { BASE_URL } from '@/config/global';
  import logo from "../../assets/images/logo.png";

  let { Posts } = $props();


  const action = (node: any) => {
    node.addEventListener("click", () => {
      const mobileMenu = node.querySelector("#mobile-menu");
      mobileMenu?.classList.toggle("hidden");
    });
  };

  const navLinks = [
  { label: 'Inicio', href: `${BASE_URL}` },
  { label: 'Nosotros', href: `${BASE_URL}nosotros` },
  { label: 'Servicios', href: `${BASE_URL}servicios` },
  { label: 'Productos', href: `${BASE_URL}productos` },
];

  
</script>

<header class="bg-slate-800 fixed top-0 left-0 w-full z-50 shadow-lg" use:action>
  <div class="container mx-auto flex justify-between items-center p-4">
    <!-- Logo -->
    <a href="{BASE_URL}" class="text-xl font-bold text-blue-500">
      <img src={logo.src} class="w-32" alt="logo" />
    </a>

    <!-- Menú principal -->
    <nav class="hidden md:flex space-x-4">
     
      {#each navLinks as {href, label}}
      <a href="{href}" class="hover:text-gray-300 text-blue-400">{label}</a>
      {/each}
    </nav>

    <!-- Botón Menú móvil -->
    <button
      aria-label="Abrir menú"
      class="md:hidden focus:outline-none text-white"
      id="menu-toggle"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  </div>

  <!-- Menú móvil -->
  <div
    class="md:hidden bg-slate-800 text-white fixed top-0 left-0 w-full p-4 shadow-lg z-40 hidden"
    id="mobile-menu"
  >
  
    <ul class="space-y-3">
      {#each navLinks as {href, label}}
       <li><a href="{href}" class="hover:text-gray-300 text-blue-400">{label}</a></li>
      {/each}
    </ul>
   
  </div>
</header>
