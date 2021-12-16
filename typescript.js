module.exports = {
    extends: [
        './rules/typescript/base',
    ].map(require.resolve),
    rules: {}
};
