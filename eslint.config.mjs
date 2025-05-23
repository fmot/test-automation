import js from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettierConfig, // Prettierと競合するESLintルールを無効化
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: {
      prettier: prettierPlugin, // Prettierプラグインを登録
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        // Node.js globals
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        global: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        // Browser globals
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        sessionStorage: 'readonly',
        // Jest globals
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
      },
    },
    rules: {
      // Prettierのルールは緩く
      'prettier/prettier': 'warn',

      // 基本的なルールも緩く設定
      'no-unused-vars': 'warn', // エラーではなく警告
      'no-console': 'off', // console.logを許可
      'no-debugger': 'warn', // debuggerも警告のみ

      // スタイル系のルールを緩く/無効化
      'comma-dangle': 'off', // 末尾カンマを強制しない
      quotes: 'off', // クォートのスタイルを強制しない
      semi: 'off', // セミコロンを強制しない
      indent: 'off', // インデントを強制しない（Prettierに任せる）
      'linebreak-style': 'off', // 改行コードを強制しない
      'no-multi-spaces': 'off', // 複数スペースを許可
      'no-trailing-spaces': 'off', // 末尾スペースを許可
      'object-curly-spacing': 'off', // オブジェクトの波括弧スペースを強制しない
      'arrow-parens': 'off', // アロー関数の括弧を強制しない
      'prefer-template': 'off', // テンプレートリテラルを強制しない
      'no-multiple-empty-lines': 'off', // 複数空行を許可

      // その他の厳格なルールを無効化
      'prefer-const': 'off', // constを強制しない
      'no-var': 'off', // varの使用を許可
      eqeqeq: 'off', // === を強制しない
      curly: 'off', // 波括弧を強制しない
      'consistent-return': 'off', // 一貫したreturnを強制しない
      'no-shadow': 'off', // 変数のシャドウイングを許可
      'no-unused-expressions': 'off', // 未使用の式を許可
    },
  },
  {
    files: ['**/*.test.js', '**/__tests__/**/*.js'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly',
        beforeAll: 'readonly',
        afterAll: 'readonly',
        jest: 'readonly',
      },
    },
  },
];
