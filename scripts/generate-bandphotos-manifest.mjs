import { readdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const bandPhotosDir = path.join(rootDir, 'public', 'assets', 'bandphotos')
const manifestPath = path.join(bandPhotosDir, 'manifest.json')

const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

const files = (await readdir(bandPhotosDir, { withFileTypes: true }))
  .filter((entry) => entry.isFile())
  .map((entry) => entry.name)
  .filter((fileName) => imageExtensions.has(path.extname(fileName).toLowerCase()))
  .sort((a, b) => a.localeCompare(b))

await writeFile(manifestPath, `${JSON.stringify(files, null, 2)}\n`, 'utf8')

console.log(`Generated ${path.relative(rootDir, manifestPath)} with ${files.length} photo(s).`)
