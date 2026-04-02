import { useState } from 'react';
import { UserCard } from './UserCard';
import { AnalyticsChart } from './AnalyticsChart';
import { Button } from './Button';
import { ActivityFeed } from './ActivityFeed';

interface User {
  id: number;
  name: string;
  email: string;
}

export const Dashboard = () => {
  const [count, setCount] = useState(0);
  const [user] = useState<User>({
    id: 1,
    name: 'John Doe',
    email: 'john@example.com'
  });
  const [items] = useState(['Item 1', 'Item 2', 'Item 3']);

  console.log('Dashboard rendered');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard - Renders: {count}</h1>
      <Button onClick={() => setCount(count + 1)} />
      <UserCard user={user} />
      <AnalyticsChart items={items} />
      <ActivityFeed />
    </div>
  );
};
