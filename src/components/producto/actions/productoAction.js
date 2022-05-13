export const productoAction = () => {
  const setOpenModal = (value) => ({ type: "setOpenModal", payload: value });
  const setDeleteModal = (value) => ({
    type: "setDeleteModal",
    payload: value,
  });
  const setProductoCurrent = (value) => ({
    type: "setProductoCurrent",
    payload: value,
  });
  const setRows = (value) => ({
    type: "setRows",
    payload: value,
  });

  return { setOpenModal, setProductoCurrent, setDeleteModal, setRows };
};
