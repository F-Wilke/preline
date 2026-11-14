import {mkdir,copyFile,cp,writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {resolve,dirname} from 'node:path';
import {execFileSync} from 'node:child_process';
const here=dirname(fileURLToPath(import.meta.url));
const out=resolve(here,'../../dist/premium-netz');
await mkdir(out,{recursive:true});
execFileSync(process.execPath,[resolve(here,'node_modules/@tailwindcss/cli/dist/index.mjs'),'-i',resolve(here,'styles.css'),'-o',resolve(out,'styles.css'),'--minify'],{cwd:here,stdio:'inherit'});
for(const file of ['index.html','app.js']) await copyFile(resolve(here,file),resolve(out,file));
await cp(resolve(here,'assets'),resolve(out,'assets'),{recursive:true});
for(const plugin of ['accordion','collapse','overlay']) await copyFile(resolve(here,'../../dist',`${plugin}.js`),resolve(out,`${plugin}.js`));
// Site output lives inside dist so the fork's published library files remain intact.
await writeFile(resolve(here,'../../dist/index.html'),'<!doctype html><meta http-equiv="refresh" content="0;url=./premium-netz/"><a href="./premium-netz/">Premium-Netz</a>');
console.log(`Built ${out}`);
