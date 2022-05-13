export const productoInitialState = {
  isModalOpen: false,
  isDeleteModal: false,
  productoCurrent: { _id: "", nombreProducto: "", categoria: "", precio: "" },
  rows: [],
};

export const productoReducer = (state, action) => {
  switch (action.type) {
    case "setOpenModal":
      return {
        ...state,
        isModalOpen: action.payload,
      };
    case "setDeleteModal":
      return {
        ...state,
        isDeleteModal: action.payload,
      };
    case "setProductoCurrent":
      return {
        ...state,
        productoCurrent: action.payload,
      };
    case "setRows":
      return {
        ...state,
        rows: action.payload,
      };
    default:
      return state;
  }
};
