export const addWidget = (category, widget) => ({
    type: 'ADD_WIDGET',
    payload: { category, widget }
  });
  
  export const removeWidget = (category, id) => ({
    type: 'REMOVE_WIDGET',
    payload: { category, id }
  });
  