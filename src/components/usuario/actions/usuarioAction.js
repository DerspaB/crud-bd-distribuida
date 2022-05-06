export const usuarioAction = () => {
  const setOpenModal = (value) => ({ type: "setOpenModal", payload: value });
  const setDeleteModal = (value) => ({
    type: "setDeleteModal",
    payload: value,
  });
  const setUsuarioCurrent = (value) => ({
    type: "setUsuarioCurrent",
    payload: value,
  });

  return { setOpenModal, setUsuarioCurrent, setDeleteModal };
};
