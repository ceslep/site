<script lang="ts">
  let { Posts } = $props();

  const action = (node: any) => {
    node.addEventListener("click", () => {
      const mobileMenu = node.querySelector("#mobile-menu");
      console.log(mobileMenu);
      mobileMenu?.classList.toggle("hidden");
    });
  };
</script>

<header class=" bg-gradient-to-b from-blue-200 to to-blue-500" use:action>
  <div class="container mx-auto flex justify-between items-center p-4">
    <!-- Logo -->
    <a href="/" class="text-xl font-bold">Mi Sitio</a>

    <!-- Menú principal -->
    <nav class="hidden md:flex space-x-4"> 
      {#each Posts as post}
        <a href={`/info/${post.slug}`} class="hover:text-gray-300">{post.id}</a>
        <!-- content here -->
      {/each}

      <!--  <a href={`/info/}`} class="hover:text-gray-300">Inicio</a>
        <a href="/nosotros" class="hover:text-gray-300">Nosotros</a>
        <a href="/servicios" class="hover:text-gray-300">Servicios</a> -->
    </nav>

    <!-- Botón Menú móvil -->
    <button
      aria-label="Abrir menú"
      class="md:hidden focus:outline-none"
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
  class="md:hidden bg-blue-500 text-white fixed top-0 left-0 w-full p-4 shadow-lg z-50 hidden" 
  id="mobile-menu"
>
    {#each Posts as post}
      <a href={`/info/${post.slug}`} class="block py-2 px-4 hover:bg-blue-700"
        >{post.slug}</a
      >
    {/each}
  </div>
</header>
