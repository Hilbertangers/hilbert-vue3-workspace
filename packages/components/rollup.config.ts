import { defineConfig } from 'rollup'
import vue from 'rollup-plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import styles from 'rollup-plugin-styles'
import fs from 'fs'
import path from 'path'

import glob from 'fast-glob'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// 复制字体文件到输出目录并修正CSS中的字体路径
function copyFonts() {
  const fontsSrc = path.join(__dirname, 'src/Screenshots/fonts')
  const fontsDestEs = path.join(__dirname, 'es/Screenshots/fonts')
  const fontsDestLib = path.join(__dirname, 'lib/Screenshots/fonts')
  const cssFileEs = path.join(__dirname, 'es/Screenshots/index.css')
  const cssFileLib = path.join(__dirname, 'lib/Screenshots/index.css')

  if (fs.existsSync(fontsSrc)) {
    // 创建目标目录
    fs.mkdirSync(fontsDestEs, { recursive: true })
    fs.mkdirSync(fontsDestLib, { recursive: true })

    // 复制字体文件
    const files = fs.readdirSync(fontsSrc)
    files.forEach(file => {
      const srcFile = path.join(fontsSrc, file)
      const destEsFile = path.join(fontsDestEs, file)
      const destLibFile = path.join(fontsDestLib, file)

      if (fs.statSync(srcFile).isFile()) {
        fs.copyFileSync(srcFile, destEsFile)
        fs.copyFileSync(srcFile, destLibFile)
      }
    })

    // 修正CSS文件中的字体路径
    const cssFiles = [cssFileEs]
    if (fs.existsSync(cssFileLib)) {
      cssFiles.push(cssFileLib)
    }

    cssFiles.forEach(cssFile => {
      if (fs.existsSync(cssFile)) {
        let cssContent = fs.readFileSync(cssFile, 'utf-8')
        // 将 url(iconfont-*.woff) 替换为 url(fonts/iconfont.woff)
        cssContent = cssContent.replace(/url\(iconfont-[^)]+\.woff\)/g, 'url(fonts/iconfont.woff)')
        cssContent = cssContent.replace(/url\(iconfont-[^)]+\.ttf\)/g, 'url(fonts/iconfont.ttf)')
        fs.writeFileSync(cssFile, cssContent, 'utf-8')
      }
    })
  }
}

const inputs = Object.fromEntries(
  glob
    .sync('src/**/index.ts', { cwd: __dirname })
    .filter(p => p !== 'src/index.ts')
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
        // 保留字体文件的原始路径，不要添加hash
        reduceVars: true,
      }),
      {
        name: 'copy-fonts',
        writeBundle: copyFonts,
      },
    ],
  },
  {
    input: 'src/index.ts',
    external: ['vue'],
    output: [
      {
        file: 'es/index.js',
        format: 'es',
        assetFileNames: '[name][extname]',
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
      styles({
        mode: 'extract',
        sourceMap: false,
        minimize: true,
      }),
    ],
  },
])
