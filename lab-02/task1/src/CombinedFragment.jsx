import React from 'react';
import FragmentLayout from './FragmentLayout';
import ItemList from './ItemList';



function CombinedFragment() {


    const items = [
        { id: 1, name: "Apple" },
        { id: 2, name: "Banana" },
        { id: 3, name: "Cherry" }
    ];

    return(
        <>
            <h2>Combined Fragment</h2>
            <FragmentLayout />
            <ItemList items={items} />
            <p>Total: {items.length} items</p>
        </>
    )
}

export default CombinedFragment;