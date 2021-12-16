module.exports = {
    extends: [
        'eslint:recommended',
    ],
    rules: {
        ['indent']: ['error', 'tab', { SwitchCase: 1 }],
        ['quotes']: ['error', 'single'],
        ['semi']: ['error', 'always'],
        ['newline-before-return']: ['error'],
        ['no-multi-spaces']: ['error'],
        ['no-multiple-empty-lines']: ['error', { max: 1 }],
        ['no-unused-vars']: ['off'],
        ['sort-imports']: ['off'],
        ['object-curly-spacing']: ['error', 'always'],
        ['comma-spacing']: ['error', { before: false, after: true }],
        ['comma-dangle']: ['error', 'always-multiline'],
        ['linebreak-style']: ['off'],
    },
};
