# Lab 09 Task 2: List Virtualization

## Overview

Demonstrates efficient rendering of large datasets (10,000+ items) using virtual scrolling with react-window. Only visible items are rendered, dramatically improving performance.

## Components

- **VirtualList**: Uses FixedSizeList with filtering support
- **RegularList**: Non-virtualized comparison with same dataset
- **generateItems**: Creates 10,000 mock items across 5 categories

## Features

- Generate 10,000+ mock items
- Render only visible items in viewport
- Filter by title or category
- Side-by-side performance comparison
- Console metrics for render tracking

## Running the Project

```bash
cd task2
npm install
npm run dev
```

## Technologies

- React 18+
- TypeScript
- Vite
- react-window library

## Performance Benefits

- Virtual list renders ~6-10 items instead of 10,000
- Significantly reduced memory footprint
- Smoother scrolling performance
- Faster initial page load
