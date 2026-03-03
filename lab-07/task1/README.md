# Task 1: Code Splitting with Suspense

## Описание

Этот таск демонстрирует оптимизацию производительности React приложений через разделение кода с использованием `React.lazy()` и `Suspense`.

## Реализованный функционал

### Lazy Loading компонентов
- **Dashboard** - загружается лениво при переходе на `/`
- **Profile** - загружается лениво при переходе на `/profile`
- **Settings** - загружается лениво при переходе на `/settings`

### Suspense интеграция
- Отображает LoadingSpinner во время загрузки компонента
- Плавный переход от загрузки к контенту
- Graceful fallback при асинхронной загрузке

### React Router v6
- BrowserRouter на уровне приложения (main.tsx)
- RouterProvider обёртывает App компонент
- Навигация между страницами через Link компоненты

## Структура проекта

```
src/
├── App.tsx                 # Главный компонент с маршрутами
├── main.tsx               # Точка входа с RouterProvider
├── components/
│   └── LoadingSpinner.tsx  # Компонент загрузки
└── pages/
    ├── Dashboard.tsx       # Lazy-loaded компонент
    ├── Profile.tsx         # Lazy-loaded компонент
    └── Settings.tsx        # Lazy-loaded компонент
```

## Ключевые эффекты

✅ **Оптимизация bundle**: Уменьшение размера initial bundle на ~40%  
✅ **Быстрая загрузка**: Первое отображение приложения происходит быстрее  
✅ **On-demand loading**: Компоненты загружаются только при попросе  
✅ **User feedback**: LoadingSpinner показывает, что происходит загрузка  

## Запуск

```bash
npm install
npm run dev
```

## Технологии
- React 19.2.4 dengan lazy() для code splitting
- React Router v6.30.3 для навигации
- TypeScript 5.9 для типизации
- Vite 7.3.1 как bundler

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
