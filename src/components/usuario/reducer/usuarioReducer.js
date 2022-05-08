export const usuarioInitialState = {
  isModalOpen: false,
  isDeleteModal: false,
  usuarioCurrent: {
    _id: "",
    idPerson: "",
    nickname: "",
    password: "",
    status: false,
  },
  rows: [],
};

export const usuarioReducer = (state, action) => {
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
    case "setUsuarioCurrent":
      return {
        ...state,
        usuarioCurrent: action.payload,
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
