import { defineConfig } from 'vite';
import { resolve } from 'node:path';
import { routes } from './src/content/routes.mjs';
export default defineConfig({root:'.generated',publicDir:'../public',build:{outDir:'../dist',emptyOutDir:true,rollupOptions:{input:[...Object.values(routes).map(route=>resolve('.generated'+route+'index.html')),resolve('.generated/404.html')]}}});
