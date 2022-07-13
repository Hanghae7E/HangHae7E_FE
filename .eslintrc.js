const { off } = require("process");

module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "airbnb",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: "module",
        project: "./tsconfig.json"
    },
    plugins: [
        "react",
        "jsx-a11y",
        "@typescript-eslint",
        "import",
        "functional"
    ],
    settings: {
        react: {
            version: 'detect',
        },
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "linebreak-style": "off",
    }
}
