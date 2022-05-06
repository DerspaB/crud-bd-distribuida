export const productoInitialState = {
  isModalOpen: false,
  isDeleteModal: false,
  productoCurrent: { id: "", nombreProducto: "", categoria: "", precio: "" },
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
    default:
      return state;
  }
};
