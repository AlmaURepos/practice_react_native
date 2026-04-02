import { useMemo } from "react";
import type { Item } from "../utils/generateItems.ts";
import { generateItems } from "../utils/generateItems.ts";

interface RegularListProps {
  itemCount?: number;
}

export function RegularList({ itemCount = 10000 }: RegularListProps) {
  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  return (
    <div className="regular-list">
      {items.map(item => (
        <div key={item.id} className="list-item">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <span className="category">{item.category}</span>
        </div>
      ))}
    </div>
  );
}
