import React from 'react';
import Widget from './Widget';

function Category({ category }) {
  return (
    <div>
      <h2>{category.name}</h2>
      {category.widgets.map(widget => (
        <Widget key={widget.id} widget={widget} category={category.name} />
      ))}
    </div>
  );
}

export default Category;
