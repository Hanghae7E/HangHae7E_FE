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
    ignorePatterns: ['.eslintrc.js', 'craco.config.js'],
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "linebreak-style": "off",
        "import/order": [
            "error",
            {
                groups: [
                    "builtin",
                    "external",
                    "internal",
                    [
                        "parent",
                        "sibling"
                    ],
                    "index"
                ],
                pathGroups: [
                    {
                        pattern: "react",
                        group: "external",
                        position: "before"
                    },
                    {
                        pattern: "@/Api/**",
                        group: "internal",
                        position: "after"
                    },
                    {
                        pattern: "@/assets/**",
                        group: "internal",
                        position: "after"
                    },
                    {
                        pattern: "@/Components/**",
                        group: "internal",
                        position: "after"
                    },
                    {
                        pattern: "@/Hooks/**",
                        group: "internal",
                        position: "after"
                    },
                    {
                        pattern: "@/Pages/**",
                        group: "internal",
                        position: "after"
                    },
                    {
                        pattern: "@/TypeInterface/**",
                        group: "internal",
                        position: "after"
                    },
                    {
                        pattern: "@/util/**",
                        group: "internal",
                        position: "after"
                    },
                ],
                pathGroupsExcludedImportTypes: ["react"],
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                },
                "newlines-between": "always",
            }
        ]
    }
}

// module.exports = {
//     env: {
//         browser: true,
//         es2021: true
//     },
//     extends: [
//         "airbnb",
//         "eslint:recommended",
//         "plugin:react/recommended",
//         "plugin:@typescript-eslint/recommended"
//     ],
//     parser: "@typescript-eslint/parser",
//     parserOptions: {
//         ecmaFeatures: {
//             jsx: true
//         },
//         ecmaVersion: 12,
//         sourceType: "module",
//         project: "./tsconfig.json"
//     },
//     plugins: [
//         "react",
//         "jsx-a11y",
//         "@typescript-eslint",
//         "import",
//         "functional"
//     ],
//     settings: {
//         react: {
//             version: 'detect',
//         },
//     },
//     ignorePatterns: ['.eslintrc.js'],
//     rules: {
//        "quotes": ['off', 'single'],
//        "react/react-in-jsx-scope": "off",
//        "react/jsx-filename-extension": "off",
//        "import/no-unresolved": "off",
//        "import/extensions": "off",
//        "linebreak-style": "off",
//        "space-in-brackets": "off",
//        "@typescript-eslint/explicit-module-boundary-types": "off",
//        "@typescript-eslint/no-empty-interface" : "off",
//        "@typescript-eslint/no-empty-function" : "off",
//        "@typescript-eslint/no-explicit-any" : "off",
//        "@typescript-eslint/no-this-alias" : "off",
//        "@typescript-eslint/no-unused-vars" : "off",
//        "react/jsx-uses-react": "off",
//        "react/prop-types": "off",
//        "react/require-default-props": "off",
//        "react/no-unsafe-optional-chaining": "off",
//        "jsx-a11y/label-has-associated-control": ["error", {
//             "required": {
//             "some": ["nesting", "id"]
//         }}],
//        "jsx-a11y/label-has-for": ["error", {
//             "required": {
//             "some": ["nesting", "id"]
//         }}],
//        "operator-linebreak": ["error","after",{"overrides": {":": "before"}}],
//        "object-curly-newline": "off"

//   }
// }