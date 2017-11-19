module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true,
  },
  "parser": "babel-eslint",
  "rules": {
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "never",
      "imports": "never",
      "exports": "never",
      "functions": "ignore",
    }],
    "arrow-body-style": ["off", "as-needed"],
    "global-require": ["off"],
    "import/prefer-default-export": ["off", {}],
    "import/no-named-as-default": ["off", {}],
    "react/jsx-filename-extension": ["error", {
      "extensions": [".js", ".jsx"]
    }],
    "react/prefer-stateless-function": ["off", {
      "ignorePureComponents": false
    }]
  },
  "plugins": [
      "react",
      "import"
  ]
};
