import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
				  css: {
					strong: {
					  color: '#1e3a8a', // Cambiar el color del texto
					  fontWeight: '700', // Peso de la fuente
					  backgroundColor: '#e0f2fe', // Fondo de negrita
					  padding: '0.1rem 0.3rem', // Espaciado interno
					  borderRadius: '0.2rem', // Bordes redondeados
					},
				  },
				},
			  },
		},
	},
	plugins: [typography],
}
