# Task 2: Error Handling with Error Boundaries

## Описание

Этот таск демонстрирует обработку ошибок в React приложениях путём реализации Error Boundaries для перехвата ошибок в lazy-loaded компонентах.

## Реализованный функционал

### Error Boundary компонент
- **getDerivedStateFromError()** - static метод для перехвата ошибок
- **componentDidCatch()** - логирование ошибок в консоль
- **resetError()** - функция для восстановления после ошибки
- **State управление** - отслеживание ошибок и их сброс

### Fallback UI
- **ErrorFallback компонент** - отображает сообщение об ошибке
- **Кнопка "Reload Page"** - позволяет перезагрузить приложение
- **Кнопка "Try Again"** - восстанавливает состояние без полной перезагрузки

### Интеграция с Suspense
- ErrorBoundary обёртывает Suspense
- Защита как от ошибок загрузки, так и от runtime ошибок
- Graceful degradation вместо white screen of death

## Структура проекта

```
src/
├── ErrorBoundary.tsx       # Class-based компонент обработки ошибок
├── ErrorFallback.tsx       # UI компонент ошибки
├── App.tsx                 # Приложение с ErrorBoundary обёрткой
├── main.tsx               # Точка входа
└── pages/
    ├── Dashboard.tsx
    ├── Profile.tsx
    └── Settings.tsx
```

## Архитектура обработки ошибок

```
Ошибка в компоненте
    ↓
getDerivedStateFromError() ловит ошибку
    ↓
componentDidCatch() логирует детали
    ↓
ErrorBoundary рендерит fallback UI
    ↓
Пользователь кликает "Try Again"
    ↓
resetError() восстанавливает состояние
```

## Ключевые преимущества

✅ **Предотвращение краша** - приложение не разваливается при ошибках  
✅ **User-friendly UI** - пользователь видит понятное сообщение об ошибке  
✅ **Быстрое восстановление** - кнопка "Try Again" для повторной попытки  
✅ **Логирование** - ошибки логируются для отладки  

## Запуск

```bash
npm install
npm run dev
```

## Технологии
- React 19.2.4 с поддержкой Error Boundaries
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
