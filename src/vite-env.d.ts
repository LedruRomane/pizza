/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_URL_DEPLOY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
