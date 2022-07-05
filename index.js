module.exports = {
    extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'eslint-config-prettier'],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint','eslint-plugin-prettier'],
    overrides: [
        {
            files: ['./.*.js'],
            globals: {
                module: 'readonly',
            },
        },
    ],
    rules: {
        "prettier/prettier": ["error"]
    }
};
