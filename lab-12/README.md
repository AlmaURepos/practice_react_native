## Lab 12

### Саммари

Lab 12 выполнена на базе проекта из [lab-11/ProfileApp](lab-11/ProfileApp), который был скопирован в [lab-12/ProfileApp](lab-12/ProfileApp) и доработан под требования Step 5 (Styling & Responsive Layouts).

Реализовано:
- Responsive grid layout через `GridLayout` и `Card`
- Safe area + адаптивный заголовок через `ResponsiveHeader`
- Адаптивный layout для контента через `AdaptiveLayout`
- Обновленные экраны с использованием новых компонентов
- Platform-specific стили через `Platform.select`
- Pull-to-refresh сохранен в списке товаров

### Команды запуска (локально)

```bash
cd lab-12/ProfileApp
npm install
npx expo start
```

Запуск на web:

```bash
cd lab-12/ProfileApp
npm run web
```

TypeScript проверка:

```bash
cd lab-12/ProfileApp
npx tsc --noEmit
```

