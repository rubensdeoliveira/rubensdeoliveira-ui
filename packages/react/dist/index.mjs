// src/index.tsx
import { jsx } from "react/jsx-runtime";
function Button({ children }) {
  return /* @__PURE__ */ jsx("button", { className: "bg-black p-10 dark:bg-white", children });
}
export {
  Button
};
