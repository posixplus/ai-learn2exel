import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

export default [
  ...nextCoreWebVitals,
  { ignores: ['.next/**', 'node_modules/**'] },
  {
    rules: {
      // Content-heavy JSX; escaping every apostrophe in lesson prose is noise.
      'react/no-unescaped-entities': 'off',
      // localStorage hydration on mount. Legit pattern, revisit with useSyncExternalStore later.
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/refs': 'warn',
    },
  },
]
