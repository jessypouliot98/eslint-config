module.exports = {
    plugins: [
        '@typescript-eslint',
    ],
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],
    parser: '@typescript-eslint/parser',
    rules: {
        ['@typescript-eslint/ban-types']: ['off'],
        ['@typescript-eslint/no-empty-function']: ['off'],
        ['@typescript-eslint/no-namespace']: ['off'],
        ['@typescript-eslint/no-explicit-any']: ['warn'],
    }
}
