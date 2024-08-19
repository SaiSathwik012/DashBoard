import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from '../actions';

function AddWidgetForm() {
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const newWidget = { id: Date.now(), title, content };
    dispatch(addWidget(category, newWidget));
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={e => setCategory(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Widget Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Widget Content"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <button type="submit">Add Widget</button>
    </form>
  );
}

export default AddWidgetForm;
