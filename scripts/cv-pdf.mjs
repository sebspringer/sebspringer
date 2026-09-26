// Renders scripts/cv-template.html to public/cv.pdf with headless Edge.
// Called via execFileSync (no shell) so the "Program Files (x86)" path needs no quoting.
import { execFileSync } from 'node:child_process'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const edge = 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe'

execFileSync(edge, [
  '--headless',
  '--disable-gpu',
  '--no-pdf-header-footer',
  `--print-to-pdf=${resolve('public/cv.pdf')}`,
  pathToFileURL(resolve('scripts/cv-template.html')).href,
])
