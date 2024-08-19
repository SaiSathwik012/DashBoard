const initialState = {
    categories: [
      {
        name: "CSPM Executive Dashboard",
        widgets: [
          { id: 1, title: "Widget 1", content: "Random text for widget 1" },
          { id: 2, title: "Widget 2", content: "Random text for widget 2" }
        ]
      },
      {
        name: "Other Dashboard",
        widgets: []
      }
    ]
  };
  
  function dashboardReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_WIDGET':
        return {
          ...state,
          categories: state.categories.map(category =>
            category.name === action.payload.category
              ? {
                  ...category,
                  widgets: [...category.widgets, action.payload.widget]
                }
              : category
          )
        };
      case 'REMOVE_WIDGET':
        return {
          ...state,
          categories: state.categories.map(category =>
            category.name === action.payload.category
              ? {
                  ...category,
                  widgets: category.widgets.filter(widget => widget.id !== action.payload.id)
                }
              : category
          )
        };
      default:
        return state;
    }
  }
  
  export default dashboardReducer;
  