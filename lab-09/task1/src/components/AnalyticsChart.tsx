import { useMemo } from 'react';

interface Props {
  items: string[];
}

export const AnalyticsChart = ({ items }: Props) => {
  const chartData = useMemo(() => {
    console.log('AnalyticsChart computed');
    return items.map((item, idx) => ({
      id: idx,
      label: item,
      value: Math.random() * 100
    }));
  }, [items]);

  console.log('AnalyticsChart rendered');

  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
      <h3>Analytics</h3>
      <ul>
        {chartData.map(data => (
          <li key={data.id}>{data.label}: {data.value.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
};
