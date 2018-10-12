module.exports = {
    "root": true,
    "env": {
        "node": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "extends": "standard",
    "rules": {
        "indent": ["error", 4],
        "no-unused-vars": "off"
    }
}