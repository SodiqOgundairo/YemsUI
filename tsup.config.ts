import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  // Do NOT include demo/ — tsup only builds the publishable library
  external: ['react', 'react-dom', 'tailwindcss'],
  treeshake: true,
})