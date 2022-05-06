import { useUsuario } from "../context/useUsuario";
import { usuarioAction } from "./usuarioAction";

export const UsuarioBusiness = () => {
  const { state, dispatch } = useUsuario();
  const { setOpenModal, setUsuarioCurrent, setDeleteModal } = usuarioAction();

  const handleOpenModal = (value) => dispatch(setOpenModal(value));
  const handleDeleteModal = (value) => dispatch(setDeleteModal(value));

  const handleCreateOpenModal = () => {
    dispatch(
      setUsuarioCurrent({
        id: "",
        idPerson: "",
        nickname: "",
        password: "",
        status: "",
      })
    );
    handleOpenModal(true);
  };

  const handleSetProductoCurrent = (value) => {
    dispatch(setUsuarioCurrent(value));
  };

  const openEdit = (producto) => {
    handleSetProductoCurrent(producto);
    handleOpenModal(true);
  };

  const handleChangeUsuario = (e) => {
    dispatch(
      setUsuarioCurrent({
        ...state.usuarioCurrent,
        [e.target.name]: e.target.value,
      })
    );
  };

  return {
    handleOpenModal,
    handleChangeUsuario,
    handleCreateOpenModal,
    handleSetProductoCurrent,
    openEdit,
    handleDeleteModal,
  };
};
