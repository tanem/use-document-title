import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import terser from '@rollup/plugin-terser'
import pkg from './package.json' assert { type: 'json' }

const CJS_DEV = 'CJS_DEV'
const CJS_PROD = 'CJS_PROD'
const ES = 'ES'
const UMD_DEV = 'UMD_DEV'
const UMD_PROD = 'UMD_PROD'

const input = './compiled/index.js'

const getGlobals = (bundleType) => {
  const baseGlobals = {
    'react-dom': 'ReactDOM',
    react: 'React',
  }

  switch (bundleType) {
    case UMD_DEV:
    case UMD_PROD:
      return baseGlobals
    default:
      return {}
  }
}

const getExternal = (bundleType) => {
  const peerDependencies = Object.keys(pkg.peerDependencies)
  const dependencies = Object.keys(pkg.dependencies)

  // Hat-tip: https://github.com/rollup/rollup-plugin-babel/issues/148#issuecomment-399696316.
  const makeExternalPredicate = (externals) => {
    if (externals.length === 0) {
      return () => false
    }
    const pattern = new RegExp(`^(${externals.join('|')})($|/)`)
    return (id) => pattern.test(id)
  }

  switch (bundleType) {
    case CJS_DEV:
    case CJS_PROD:
    case ES:
      return makeExternalPredicate([...peerDependencies, ...dependencies])
    default:
      return makeExternalPredicate(peerDependencies)
  }
}

const isProduction = (bundleType) =>
  bundleType === CJS_PROD || bundleType === UMD_PROD

const getPlugins = (bundleType) => [
  nodeResolve(),
  commonjs(),
  babel({
    babelHelpers: 'runtime',
    babelrc: false,
    exclude: 'node_modules/**',
    inputSourceMap: true,
    presets: [['@babel/env', { loose: true, modules: false }], '@babel/react'],
    plugins: ['@babel/transform-runtime'],
  }),
  replace({
    'process.env.NODE_ENV': JSON.stringify(
      isProduction(bundleType) ? 'production' : 'development',
    ),
    preventAssignment: true,
  }),
  isProduction(bundleType) &&
    terser({
      output: { comments: false },
      compress: {
        keep_infinity: true,
        pure_getters: true,
      },
      warnings: true,
      ecma: 5,
      toplevel: false,
    }),
]

const getCjsConfig = (bundleType) => ({
  input,
  external: getExternal(bundleType),
  output: {
    file: `dist/use-document-title.cjs.${
      isProduction(bundleType) ? 'production' : 'development'
    }.js`,
    format: 'cjs',
    sourcemap: true,
  },
  plugins: getPlugins(bundleType),
})

const getEsConfig = () => ({
  input,
  external: getExternal(ES),
  output: {
    file: pkg.module,
    format: 'es',
    sourcemap: true,
  },
  plugins: getPlugins(ES),
})

const getUmdConfig = (bundleType) => ({
  input,
  external: getExternal(bundleType),
  output: {
    file: `dist/use-document-title.umd.${
      isProduction(bundleType) ? 'production' : 'development'
    }.js`,
    format: 'umd',
    globals: getGlobals(bundleType),
    name: 'useDocumentTitle',
    sourcemap: true,
  },
  plugins: getPlugins(bundleType),
})

export default [
  getCjsConfig(CJS_DEV),
  getCjsConfig(CJS_PROD),
  getEsConfig(),
  getUmdConfig(UMD_DEV),
  getUmdConfig(UMD_PROD),
]
