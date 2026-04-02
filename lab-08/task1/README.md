# Task 1: Next.js Blog with SSR and SSG

## Описание

Блог на Next.js с Static Site Generation (SSG) и Incremental Static Regeneration (ISR).

## Реализованный функционал

- **Home Page (SSG + ISR)** - список всех постов, генерируется при build и обновляется каждые 60 сек
- **Dynamic Post Pages (SSG)** - отдельные страницы для каждого поста с `getStaticPaths` и `fallback: "blocking"`
- **Types** - Post и Author интерфейсы
- **Mock Data** - 3+ поста в lib/api.ts

## Структура

```
src/
├── pages/index.tsx          # SSG home с ISR
├── pages/posts/[id].tsx     # Динамические SSG маршруты
├── types/index.ts           # Post, Author интерфейсы
└── lib/api.ts               # Mock данные
```

## Преимущества SSG

✅ Максимальная скорость (предварительно отрендеренный HTML)  
✅ Низкая нагрузка на сервер  
✅ ISR автоматически обновляет контент  
✅ SEO-friendly

## Запуск

```bash
npm install
npm run dev
```

Доступно на http://localhost:3000
