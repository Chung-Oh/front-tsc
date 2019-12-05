# TypeScript in Practice

**Basic**

- Compile .ts files from src/ to public/:

`tsc src/posts.ts --outDir public`

- Make compile only once:

`tsc -w` or `tsc --watch`

**Debugger**

1. Client-side build file map for debugger:

`tsc --sourceMap`

2. Go to tsconfig.json and add:

`"compilerOPtions": {
	"sourceMap": true,
}`
