module.exports = {
    extends: [
        'airbnb-base',
        'prettier',
        'plugin:prettier/recommended'
    ],
    rules: {
        'prettier/prettier': [
          'error',
          {
            tabWidth: 2,
            singleQuote: true,
            trailingComma: 'all',
            printWidth: 110,
          },
        ]
    }
    
}