/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AmnisStateWeb',
      fileName: 'index',
    },
    rollupOptions: {
      output: {
        globals: {
          '@amnis/core': 'AmnisCore',
        },
      },
      external: [
        '@amnis/core',
        '@reduxjs/toolkit',
      ],
    },
  },
  test: {
    globals: true,
  },
});
