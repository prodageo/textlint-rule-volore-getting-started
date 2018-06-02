See [Developer Guide](https://github.com/prodageo/textlint-rule-volore-getting-started/blob/master/dev_guide.md).

# textlint-rule-volore-getting-started

sandbox for learning textlint rule

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-volore-getting-started

## Usage

Via `.textlintrc`(Recommended)

```json
{
    "rules": {
        "volore-getting-started": true
    }
}
```

Via CLI

```
textlint --rule volore-getting-started README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester "textlint-tester").

    npm test

## License

ISC © fbab
