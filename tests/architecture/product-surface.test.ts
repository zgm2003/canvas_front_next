import { readFile, readdir, stat } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = process.cwd()

async function sourceFiles(directory: string): Promise<string[]> {
  const entries = await readdir(directory)
  const files: string[] = []

  for (const entry of entries) {
    const path = resolve(directory, entry)
    const info = await stat(path)
    if (info.isDirectory()) {
      files.push(...(await sourceFiles(path)))
    } else if (/\.(ts|tsx)$/.test(entry)) {
      files.push(path)
    }
  }

  return files
}

describe('foundation product surface', () => {
  it('contains the required application boundaries', async () => {
    const required = [
      'src/main.tsx',
      'src/app/App.tsx',
      'src/app/AppProviders.tsx',
      'src/app/routes.ts',
      'src/shared/theme/appTheme.ts',
      'src/shared/ui/AppBootstrap.tsx',
      'docs/frontend-architecture.md',
    ]

    await expect(
      Promise.all(required.map((path) => stat(resolve(root, path)))),
    ).resolves.toHaveLength(required.length)
  })

  it('does not introduce retired product capabilities', async () => {
    const files = await sourceFiles(resolve(root, 'src'))
    const content = (await Promise.all(files.map((path) => readFile(path, 'utf8')))).join('\n')
    const packageJSON = await readFile(resolve(root, 'package.json'), 'utf8')

    for (const forbidden of [
      /webdav/i,
      /agent-chat/i,
      /plugin-manager/i,
      /seedance/i,
      /audio-generation/i,
      /video-generation/i,
      /prompt-source-presets/i,
    ]) {
      expect(content).not.toMatch(forbidden)
      expect(packageJSON).not.toMatch(forbidden)
    }
  })
})
