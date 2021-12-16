module.exports = {
    extends: [
        './rules/react/base',
        './rules/react/import',
    ].map(require.resolve),
    rules: {}
};
