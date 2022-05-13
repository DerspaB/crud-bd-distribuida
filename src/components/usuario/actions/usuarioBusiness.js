import axios from "axios";
import { useUsuario } from "../context/useUsuario";
import { usuarioAction } from "./usuarioAction";

export const UsuarioBusiness = () => {
  const { state, dispatch } = useUsuario();
  const { setOpenModal, setUsuarioCurrent, setDeleteModal, setRows } =
    usuarioAction();

  const handleOpenModal = (value) => dispatch(setOpenModal(value));
  const handleDeleteModal = (value) => dispatch(setDeleteModal(value));

  const handleClickDelete = (id) => {
    dispatch(
      setUsuarioCurrent({
        ...state.usuarioCurrent,
        _id: id,
      })
    );
    handleDeleteModal(true);
  };

  const handleCreateOpenModal = () => {
    dispatch(
      setUsuarioCurrent({
        _id: "",
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

  const getUsers = () => {
    axios
      .get("http://localhost:8080/api/users/")
      .then((resp) => handleSetRows(resp.data.users))
      .catch((error) => console.log(error));
  };

  const createUser = () => {
    axios
      .post("http://localhost:8080/api/users/", {
        idPerson: state.usuarioCurrent.idPerson,
        nickname: state.usuarioCurrent.nickname,
        password: state.usuarioCurrent.password,
        status: state.usuarioCurrent.status,
      })
      .then(() => {
        handleOpenModal(false);
        getUsers();
      })
      .catch(console.log);
  };
  const editUser = () => {
    axios
      .put(`http://localhost:8080/api/users/${state.usuarioCurrent._id}`, {
        idPerson: state.usuarioCurrent.idPerson,
        nickname: state.usuarioCurrent.nickname,
        status: state.usuarioCurrent.status,
      })
      .then(() => {
        handleOpenModal(false);
        getUsers();
      })
      .catch(console.log);
  };
  const deleteUser = () => {
    axios
      .delete(`http://localhost:8080/api/users/${state.usuarioCurrent._id}`)
      .then(() => {
        handleDeleteModal(false);
        getUsers();
      })
      .catch(console.log);
  };

  const handleSetRows = (value) => dispatch(setRows(value));

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
    getUsers,
    createUser,
    editUser,
    deleteUser,
    handleClickDelete,
  };
};
