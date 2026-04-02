# Task 2: SSR User Dashboard

## Описание

User Dashboard на Next.js с Server-Side Rendering (SSR) для персонального контента.

## Реализованный функционал

- **Dashboard (SSR)** - персональные данные, уведомления, аналитика на каждый запрос
- **User Notifications** - со статусом read/unread
- **Analytics** - случайные значения для демонстрации динамики
- **Mock Data Service** - User, Notification интерфейсы и функции в lib/api.ts

## Структура

```
src/
├── pages/dashboard.tsx      # SSR dashboard с getServerSideProps
└── lib/api.ts               # User, Notification, функции
```

## Преимущества SSR

✅ Свежие данные на каждый запрос  
✅ Персональный контент (user-specific)  
✅ Возможность проверки аутентификации  
✅ Real-time информация

## Запуск

```bash
npm install
npm run dev
```

Доступно на http://localhost:3000/dashboard

