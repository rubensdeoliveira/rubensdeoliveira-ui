// ../tokens/dist/index.mjs
// src/index.tsx
import { jsx } from 'react/jsx-runtime'

const colors = {
  white: '#ffffff',
}
function App() {
  return /* @__PURE__ */ jsx('h1', {
    style: { color: colors.white },
    children: 'Hello world',
  })
}
export { App }
