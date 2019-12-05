# TypeScript na Prática

**Basic**

- Compilar arquivos .ts de src/ para public/:

`tsc src/posts.ts --outDir public`

- Fazer compilar uma única vez:

`tsc -w` ou `tsc --watch`

**Debugger**

1. Compilar arquivo map para debugger no client-side:

`tsc --sourceMap`

2. Ir em *tsconfig.json* e adicionar:

`"compilerOPtions": {
	"sourceMap": true,
}`
