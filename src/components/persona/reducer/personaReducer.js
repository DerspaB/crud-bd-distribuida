export const personaInitialState = {
  isModalOpen: false,
  isDeleteModal: false,
  personaCurrent: {
    _id: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
  },
  rows: [],
};

export const personaReducer = (state, action) => {
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
    case "setPersonaCurrent":
      return {
        ...state,
        personaCurrent: action.payload,
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
