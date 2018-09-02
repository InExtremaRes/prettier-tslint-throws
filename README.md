# Bug demonstration

For [prettier-tslint#10](https://github.com/azz/prettier-tslint/issues/10)

## Steps to reproduce

```
npm install
node_modules/.bin/prettier-tslint check '**/*.ts'
```

## Notes

It fails for me using

1. Linux
2. Node.js v10.9.0

In this project, if I remove the `tabWidth` option in `.prettierrc` it doesn't throw for
me anymore. Nonetheless in another, more complex project, removing that option still causes
some failures for other rules like `prefer-const`, `typedef`, `ordered-imports`.
