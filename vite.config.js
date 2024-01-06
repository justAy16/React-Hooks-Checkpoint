import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';
import tailwindcss from 'tailwindcss';


export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@headlessui/react': '@headlessui/react',
      '@heroicons/react': '@heroicons/react',
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
