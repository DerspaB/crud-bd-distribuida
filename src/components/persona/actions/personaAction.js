export const personaAction = () => {
  const setOpenModal = (value) => ({ type: "setOpenModal", payload: value });
  const setDeleteModal = (value) => ({
    type: "setDeleteModal",
    payload: value,
  });
  const setPersonaCurrent = (value) => ({
    type: "setPersonaCurrent",
    payload: value,
  });

  return { setOpenModal, setPersonaCurrent, setDeleteModal };
};
