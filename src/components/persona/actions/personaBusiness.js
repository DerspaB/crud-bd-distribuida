import { usePersona } from "../context/usePersona";
import { personaAction } from "./personaAction";

export const PersonaBusiness = () => {
  const { dispatch } = usePersona();
  const { state } = usePersona();
  const { setOpenModal, setPersonaCurrent, setDeleteModal } = personaAction();

  const handleOpenModal = (value) => dispatch(setOpenModal(value));
  const handleDeleteModal = (value) => dispatch(setDeleteModal(value));

  const handleCreateOpenModal = () => {
    dispatch(
      setPersonaCurrent({
        id: "",
        nombre: "",
        apellido: "",
        email: "",
        telefono: "",
      })
    );
    handleOpenModal(true);
  };

  const handleSetPersonaCurrent = (value) => {
    dispatch(setPersonaCurrent(value));
  };

  const openEdit = (persona) => {
    handleSetPersonaCurrent(persona);
    handleOpenModal(true);
  };

  const handleChangePersona = (e) => {
    dispatch(
      setPersonaCurrent({
        ...state.personaCurrent,
        [e.target.name]: e.target.value,
      })
    );
  };

  return {
    handleOpenModal,
    handleChangePersona,
    handleCreateOpenModal,
    handleSetPersonaCurrent,
    openEdit,
    handleDeleteModal,
  };
};
