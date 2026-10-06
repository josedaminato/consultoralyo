import { defineConfig } from "vite";

export default defineConfig({
  server: { port: 5173, host: true },
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        nosotros: "nosotros.html",
        servicios: "servicios.html",
        mediciones: "mediciones.html",
        capacitaciones: "capacitaciones.html",
        contacto: "contacto.html",
      },
    },
  },
});
