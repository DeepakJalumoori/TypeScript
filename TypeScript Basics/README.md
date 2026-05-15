# TypeScript Basics

This repository is a small TypeScript learning workspace with focused examples for core language features. Each file in `src/` covers a specific topic such as types, interfaces, functions, generics, object patterns, type narrowing, unions, and object-oriented programming.

## What’s Inside

- `src/index.ts` - simple entry point example
- `src/typesInTs.ts` - type annotations and inference
- `src/function.ts` - function basics, return types, optional and default parameters
- `src/interfaces.ts` - interface usage
- `src/Generics.ts` - generic types and functions
- `src/unionAndany.ts` - union types and `any`
- `src/typeNarrowing.ts` - narrowing techniques
- `src/object.ts` - object typing patterns
- `src/oop.ts` - object-oriented TypeScript examples
- `src/ArrayEnums.ts` - arrays and enums
- `src/moreTypes.ts` - additional TypeScript type examples

## Requirements

- Node.js
- TypeScript compiler

## Install

If you do not already have TypeScript installed locally, install it in this folder:

```bash
npm install --save-dev typescript
```

## Run the Examples

Compile the project:

```bash
npx tsc
```

Run the compiled output:

```bash
node dist/index.js
```

## Project Structure

```text
TypeScript Basics/
├── package.json
├── README.md
├── tsconfig.json
├── src/
│   ├── ArrayEnums.ts
│   ├── function.ts
│   ├── Generics.ts
│   ├── index.ts
│   ├── interfaces.ts
│   ├── moreTypes.ts
│   ├── object.ts
│   ├── oop.ts
│   ├── typeNarrowing.ts
│   ├── typesInTs.ts
│   └── unionAndany.ts
└── dist/
```

## Notes

- `tsconfig.json` outputs compiled files to `dist/`.
- `strict` mode is enabled, so the examples are written with explicit types where useful.
