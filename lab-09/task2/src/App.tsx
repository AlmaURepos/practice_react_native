import { VirtualList } from './components/VirtualList';
import { RegularList } from './components/RegularList';
import './index.css';

function App() {
  return (
    <div className="container">
      <h1>List Virtualization Performance Comparison</h1>
      <p>Compare virtualized vs non-virtualized lists with 10,000 items</p>

      <div className="comparison">
        <div className="list-container">
          <div className="list-title">Virtual List (Virtualized)</div>
          <VirtualList itemCount={10000} height={500} />
        </div>

        <div className="list-container">
          <div className="list-title">Regular List (Non-Virtualized)</div>
          <RegularList itemCount={10000} />
        </div>
      </div>

      <div style={{ marginTop: '30px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
        <h2>Performance Comparison</h2>
        <ul>
          <li><strong>Virtual List:</strong> Renders only visible items (~6-10 items at a time)</li>
          <li><strong>Regular List:</strong> Renders all 10,000 items in the DOM</li>
          <li><strong>Benefit:</strong> Virtual list provides smoother scrolling and lower memory usage</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
