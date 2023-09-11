import { useRef } from 'react'

export type CodeViewProps = {
  code: string
}

export function CodeView({ code }: CodeViewProps) {
  const codeRef = useRef<HTMLPreElement>(null)

  const handleCopy = () => {
    if (codeRef.current) {
      const codeToCopy = codeRef.current.innerText
      const tempTextArea = document.createElement('textarea')
      tempTextArea.value = codeToCopy
      document.body.appendChild(tempTextArea)
      tempTextArea.select()
      document.execCommand('copy')
      document.body.removeChild(tempTextArea)
      alert('Código copiado com sucesso!')
    }
  }

  return (
    <div className="rdoui-bg-gray-100 rdoui-p-4 rdoui-rounded-lg rdoui-border rdoui-border-gray-300 rdoui-relative">
      <button
        className="rdoui-bg-blue-500 rdoui-text-white rdoui-px-2 rdoui-py-1 rdoui-rounded rdoui-absolute rdoui-top-0 rdoui-right-0 rdoui-m-2 copy-button"
        onClick={handleCopy}
      >
        Copiar
      </button>
      <pre ref={codeRef}>
        <code className="rdoui-text-gray-800">{code}</code>
      </pre>
    </div>
  )
}
