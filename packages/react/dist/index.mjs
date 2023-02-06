// src/index.tsx
import { jsx } from "react/jsx-runtime";
function Button({ children }) {
  return /* @__PURE__ */ jsx("button", { className: "bg-zinc-800 p-10 dark:bg-gray-900", children });
}
export {
  Button
};
