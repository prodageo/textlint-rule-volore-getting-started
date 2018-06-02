"use strict";
const TextLintTester = require("textlint-tester");
const tester = new TextLintTester();
// rule
import rule from "../src/volore-getting-started";
// const rule = require("../src/volore-getting-started");
// ruleName, rule, { valid, invalid }
tester.run("volore-getting-started", rule, {
    valid: [
        // no problem
        "text"
    ],
    invalid: [
        // single match
        {
            text: "It is bugs.",
            errors: [
                {
                    message: "Found bugs.",
                    line: 1,
                    column: 7
                }
            ]
        },
        // multiple match
        {
            text: `It has many bugs.

One more bugs`,
            errors: [
                {
                    message: "Found bugs.",
                    line: 1,
                    column: 13
                },
                {
                    message: "Found bugs.",
                    line: 3,
                    column: 10
                }
            ]
        },

    ]
});
