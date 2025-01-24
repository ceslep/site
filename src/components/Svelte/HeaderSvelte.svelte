<script lang="ts">
	import { BASE_URL } from '@/config/global';

  console.log({BASE_URL});
  let { Posts } = $props();


  const action = (node: any) => {
    node.addEventListener("click", () => {
      const mobileMenu = node.querySelector("#mobile-menu");
      mobileMenu?.classList.toggle("hidden");
    });
  };

  
</script>

<header class="bg-slate-800 fixed top-0 left-0 w-full z-50 shadow-lg" use:action>
  <div class="container mx-auto flex justify-between items-center p-4">
    <!-- Logo -->
    <a href="/newsite/" class="text-xl font-bold text-blue-500">
      <img src="/newsite/assets/images/logo.png" class="w-32" alt="logo" />
    </a>

    <!-- Menú principal -->
    <nav class="hidden md:flex space-x-4">
      <a href="/newsite/" class="hover:text-gray-300 text-blue-400">Inicio</a>
      <a href="/newsite/nosotros" class="hover:text-gray-300 text-blue-400">Nosotros</a>
      <a href="/newsite/servicios" class="hover:text-gray-300 text-blue-400">Servicios</a>
      <a href="/newsite/ventas" class="hover:text-gray-300 text-blue-400">Ventas</a>
      {#each Posts as post}
        <!-- Puedes agregar los enlaces dinámicos aquí -->
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
    <ul>
      <li><a href="/newsite/" class="hover:text-gray-300 text-blue-400">Inicio</a></li>
      <li><a href="/newsite/nosotros" class="hover:text-gray-300 text-blue-400">Nosotros</a></li>
      <li><a href="/newsite/servicios" class="hover:text-gray-300 text-blue-400">Servicios</a></li>
      <li><a href="/newsite/ventas" class="hover:text-gray-300 text-blue-400">Ventas</a></li>
    </ul>
    {#each Posts as post}
      <!-- Enlaces dinámicos -->
    {/each}
  </div>
</header>
