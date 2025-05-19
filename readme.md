# Git Control

### Step 1: Set Up Jest and Write Tests

Install Jest and any necessary dependencies:

```bash
// install jest
npm install --save-dev jest
// install types to get help while using jest
npm install --save-dev @types/jest
```

If you like you to use `import` and `export` setup babel compiler

```bash
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

In babel.config.js

```js
module.exports = {
  presets: [["@babel/preset-env", { targets: { node: "current" } }]]
};
```

Write your unit tests in a `__tests__` directory or with a `.test.js` or `.spec.js` extension alongside your source code.

### Step 3: Run Tests Locally

Run your tests locally to ensure they pass:

```bash
npx jest
```

### Step 4: Create a GitHub Repository

Create a new GitHub repository or use an existing one.

### Step 5: Push Code to GitHub

Push your code, including the test files, to your GitHub repository.

### Step 6: Configure GitHub Actions for Continuous Integration

Create a `.github/workflows` directory in your repository and add a YAML file, e.g., `ci.yml`. Configure GitHub Actions to run your tests on each push:

```yaml
name: Continuous Integration

on:
  push:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Set up Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "20"

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test
```

### Step 7: Commit and Push GitHub Actions Configuration

Commit and push the GitHub Actions configuration file (`ci.yml`) to your repository.

### Step 8: Check GitHub Actions

GitHub Actions will now automatically run your tests whenever you push new code to the repository.

