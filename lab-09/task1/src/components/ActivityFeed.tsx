export const ActivityFeed = () => {
  console.log('ActivityFeed rendered');

  return (
    <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd' }}>
      <h3>Activity Feed</h3>
      <ul>
        <li>User logged in</li>
        <li>Data synchronized</li>
        <li>Profile updated</li>
      </ul>
    </div>
  );
};
