const {join, dirname} = require('path');

module.exports = {
    "extends": "tslint:recommended",
    "defaultSeverity": "error",
    "rulesDirectory": [
        join(dirname(require.resolve("tslint-eslint-rules")), "dist/rules"),
    ],
    "rules": {
        "align": {
            "options": ["arguments", "elements", "members", "parameters", "statements"]
        },
        "array-type": {
            "options": "array-simple"
        },
        "arrow-parens": {
            "options": ["ban-single-arg-parens"]
        },
        "arrow-return-shorthand": {
            "options": ["multiline"]
        },
        "await-promise": true,
        "completed-docs": {
            "options": ["enums", "functions", "methods"]
        },
        "indent": {
            "options": ["tabs", 4]
        },
        "jsdoc-format": {
            "options": ["check-multiline-start"]
        },
        "linebreak-style": {
            "options": ["LF"]
        },
        "max-line-length": {
            "options": [200]
        },
        "member-access": {
            "options": ["check-accessor", "check-constructor", "check-parameter-property"]
        },
        "member-ordering": false,
        "no-boolean-literal-compare": true,
        "no-duplicate-variable": {
            "options": ["check-parameters"]
        },
        "no-floating-promises": true,
        "no-implicit-dependencies": true,
        "no-inferred-empty-object-type": true,
        "no-invalid-template-strings": true,
        "no-irregular-whitespace": true,
        "no-namespace": false,
        "no-redundant-jsdoc": true,
        "no-return-await": true,
        "no-unnecessary-qualifier": true,
        "no-unused-variable": true,
        "object-curly-spacing": [true, "always", { "objectsInObjects": false }],
        "prefer-readonly": true,
        "prefer-template": {
            "options": ["allow-single-concat"]
        },
        "quotemark": {
            "options": ["single", "avoid-escape", "avoid-template"]
        },
        "space-within-parens": {
            "options": [1]
        },
        "type-literal-delimiter": true,
        "variable-name": {
            "options": ["ban-keywords", "check-format", "allow-pascal-case", "allow-leading-underscore"]
        }
    }
}