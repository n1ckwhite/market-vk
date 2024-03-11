module.exports = {
  extends: [
      'airbnb',
      'airbnb/hooks',
      'airbnb-typescript',
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
      'plugin:sonarjs/recommended',
      'plugin:unicorn/recommended',
  ],
  plugins: ['@typescript-eslint', 'jsx-a11y', 'react', 'sonarjs', 'unicorn'],
  settings: {
      'import/resolver': {
          typescript: {
              alwaysTryTypes: true, // Например `@types/yandex-maps` без этого нормально не проверяется
          },
      },
  },
  env: {
      browser: true,
      es6: true,
      jest: true,
      'node': true,
  },
  globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaFeatures: {
          jsx: true,
      },
      ecmaVersion: 13,
      include: ['.'],
      project: ['./tsconfig.json', './tsconfig.node.json'],
      sourceType: 'module',
  },
  rules: {
      // 0 = off, 1 = warn, 2 = error
      'no-duplicate-imports': 1, // убираем дубли импортов
      'import/exports-last': 0, // не требуем экспорты в конце файла
      'import/extensions': 0, // отключаем расширения файлов кроме assets
      'import/imports-first': 1, // требуем импорты вначале файла
      'import/no-duplicates': 0, // Импорты вида `date-fns` и `date-fns/locale/ru` рассматриваются как дубли. Отключаем
      'import/prefer-default-export': 0, // не требуем default экспорты
      'import/newline-after-import': 1, // отделяем блок с импортами пустой строкой
      'import/order': [
          1,
          {
              'newlines-between': 'always', // группы разделяются строкой
              groups: ['builtin', 'external', 'type', 'internal', 'parent', 'sibling', 'index', 'object'],
          },
      ],
      semi: [2, 'never'], // убираем semi
      'no-extra-semi': 0,
      '@typescript-eslint/ban-ts-comment': 0, // да, ts-ignore писать не надо, но бывают исключения, не хотим в подобных случаях ещё и eslint отключать
      '@typescript-eslint/no-extra-semi': 2,
      '@typescript-eslint/padding-line-between-statements': [
          'error',
          { "blankLine": 'always', "prev": "*", "next": "return" },
          { "blankLine": 'always', "prev": "*", "next": "if" }
      ], // отступы перед return и if (https://eslint.org/docs/latest/rules/padding-line-between-statements)
      '@typescript-eslint/semi': [2, 'never'],
      'unicorn/no-empty-file': 1, // не используем пустые файлы
      // Не мутируем входные параметры. Исключения - draft в immer и acc в Array.reduce()
      'no-param-reassign': [2, { props: true, ignorePropertyModificationsFor: ['draft', 'acc', 'state'] }],
      'react/display-name': 0, // Используем displayName в memo
      // пустая строка между тегами в вёрстке, плохо дружит с prettier
      // (https://github.com/jsx-eslint/eslint-plugin-react/issues/2793)
      // 'react/jsx-newline': 'error',
      'react/jsx-props-no-spreading': 0,
      'react/jsx-sort-props': [2, { callbacksLast: true }], // хотим стандарт сортировки, пусть дефолт - алфавит, главное колбеки в конце
      'react/prop-types': 0, // не используем propTypes
      'react/react-in-jsx-scope': 0, // для React 17+ не актуально (https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports)
      'react/require-default-props': 0, // не требуем default props, потому что проверяем типы с помощью typescript
      'react/function-component-definition': [
          2,
          {
              namedComponents: 'arrow-function',
              unnamedComponents: 'function-expression',
          },
      ],
      '@typescript-eslint/naming-convention': [
          2,
          {
              format: ['PascalCase'],
              prefix: ['I'],
              selector: 'interface',
              filter: {
                  regex: 'Window|ProcessEnv',
                  match: false,
              }
          },
          {
              format: ['PascalCase'],
              prefix: ['T'],
              selector: 'typeAlias',
          },
          {
              format: ['PascalCase'],
              selector: 'typeLike',
          },
      ],
      'max-len': ["error", { "code": 120 }],
      'max-lines': [2, 300], // хотим иметь небольшие файлы, max 300 строк
      'sonarjs/no-duplicate-string': 0, // не хотим жёстко выносить в переменные дубликаты строк
      'unicorn/consistent-destructuring': 0, // не требуем деструктуризацию, иногда без неё получается компактнее
      'unicorn/expiring-todo-comments': 0, // работает не стабильно, проще отказаться
      'unicorn/filename-case': 0, // не имеем единого кейса для всех файлов
      'unicorn/no-array-for-each': 0, // не хотим принудительно использовать for .. of, вместо forEach
      'unicorn/no-document-cookie': 0, // не хотим предупреждения про использование document.cookie
      'unicorn/prefer-dom-node-text-content': 0, // понимаем чем отличается innerText от textContent, нам нужен именно innerText
      'unicorn/prefer-set-has': 0, // не хотим использовать Set-ы, в кейсах где достаточно массивов и объектов
      'unicorn/no-array-reduce': 0, // мнения разделились, но наибольшая часть предпочитает использовать reduce, чем стараться его избегать
      'unicorn/no-null': 0, // не хотим заменять null на undefined
      'unicorn/number-literal-case': 0, // используем правило от prettier
      'unicorn/explicit-length-check': 0, // не хотим всегда проверять length
      'unicorn/consistent-function-scoping': 0, // пока не хотим, потому что, например заставляет выкидывать из скоупа компонента хендлеры отправки событий
      'unicorn/prefer-node-protocol': 0, // не на всех кейсах хорошо работает
      'unicorn/prefer-object-from-entries': 0, // не хотим Object.fromEntries вместо reduce, далеко не всегда это удобно
      'unicorn/prevent-abbreviations': 0, // не хотим писать полные слова вместо устоявшихся аббревиатур arr => array, props - properties и т.п.
      'unicorn/switch-case-braces': 0, // не хотим каждый case в switch оборачивать в блок {}
      'unicorn/text-encoding-identifier-case': 0, // не хотим везде charset utf-8 заменять на utf8, иногда это невалидное значение
      'unicorn/no-array-callback-reference': 0, // не хотим везде charset utf-8 заменять на utf8, иногда это невалидное значение
      'react/button-has-type': 0,
      'jsx-a11y/control-has-associated-label': 0,
      'jsx-a11y/no-autofocus': 0,
      'no-restricted-exports': 0,
      'no-console': ["error", { allow: ["warn", "error"] }],
      'jsx-a11y/label-has-associated-control': 0,
      'import/no-extraneous-dependencies': ["error", {"devDependencies": ["vite.config.ts"]}],
      'import/no-cycle': 0 // разрешаю циклические зависимости
  },
}
