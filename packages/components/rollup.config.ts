import { defineConfig } from 'rollup'
import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import styles from 'rollup-plugin-styles'

import glob from 'fast-glob'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const inputs = Object.fromEntries(
  glob
    .sync('src/**/index.ts', { cwd: __dirname })
    .map(p => [p.replace(/^src\//, '').replace('.ts', ''), p])
)

export default defineConfig([
  {
    input: inputs,
    external: ['vue'],
    output: [
      {
        dir: 'es',
        format: 'es',
        preserveModules: true,
        entryFileNames: '[name].js',
        assetFileNames: '[name][extname]',
      },
      {
        dir: 'lib',
        format: 'cjs',
        preserveModules: true,
        entryFileNames: '[name].js',
        exports: 'named',
        assetFileNames: '[name][extname]',
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      vue(),
      esbuild({
        include: /\.[jt]sx?$|\.vue$/,
        loaders: { '.vue': 'ts' },
      }),
      styles({
        mode: 'extract',
        sourceMap: false,
        minimize: true,
      }),
    ],
  },
  {
    input: 'src/index.ts',
    external: ['vue'],
    output: [
      {
        file: 'es/index.js',
        format: 'es',
      },
      {
        file: 'lib/index.js',
        format: 'cjs',
        exports: 'named',
      },
    ],
    plugins: [
      nodeResolve(),
      commonjs(),
      vue(),
      esbuild({
        include: /\.[jt]sx?$|\.vue$/,
        loaders: { '.vue': 'ts' },
      }),
      styles(),
    ],
  },
])
