import { useState, useMemo, useCallback } from "react";
import { FixedSizeList as List } from "react-window";
import type { Item } from "../utils/generateItems.ts";
import { generateItems } from "../utils/generateItems.ts";

interface VirtualListProps {
  itemCount?: number;
  height?: number;
}

interface RowProps {
  index: number;
  style: React.CSSProperties;
}

export function VirtualList({ itemCount = 10000, height = 500 }: VirtualListProps) {
  const [filter, setFilter] = useState("");

  // Generate items once
  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  // Filter items
  const filteredItems = useMemo(() => {
    if (!filter) return items;
    return items.filter(item =>
      item.title.toLowerCase().includes(filter.toLowerCase()) ||
      item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  }, []);

  return (
    <div className="virtual-list-container">
      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={handleFilterChange}
        className="filter-input"
      />
      <div className="list-info">
        Showing {filteredItems.length} of {items.length} items
      </div>
      <List
        height={height}
        itemCount={filteredItems.length}
        itemSize={80}
        width="100%"
      >
        {({ index, style }: RowProps) => {
          const item = filteredItems[index];
          return (
            <div style={style} className="list-item">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <span className="category">{item.category}</span>
            </div>
          );
        }}
      </List>
    </div>
  );
}
