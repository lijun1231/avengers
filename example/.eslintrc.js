module.exports = {
    root: true,
    extends: 'hfe',
    plugins: [
        'html'
    ],
    parserOptions: {
        'sourceType': 'module'
    },
    'rules': {
        'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
        'space-before-function-paren': 0,
        'no-shadow': 0,
        'no-unused-expressions': 0,
        'no-invalid-this': 0,
        'no-empty-function': 0,
        'comma-dangle': 0,
        'no-param-reassign': 0,
        'no-else-return': 0,
        'padded-blocks': 0,
        'no-implicit-coercion': 0,
        'no-empty': 0
    }
}
