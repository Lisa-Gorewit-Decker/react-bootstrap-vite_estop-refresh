//
// /**
//  * This file allows TypeScript to understand:
//  * 1. .svg, .png, .jpg, and .webp imports
//  * 2. .module.css and .module.scss imports
//  * 3. Import.meta.env variables
//  */



interface ImportMetaEnv {
    // If you add custom environment variables later (like an API key),
    readonly VITE_API_URL: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}