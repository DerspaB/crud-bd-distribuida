import { useProducto } from "../context/useProducto";
import { productoAction } from "./productoAction";

export const ProductoBusiness = () => {
  const { state, dispatch } = useProducto();
  const { setOpenModal, setProductoCurrent, setDeleteModal } = productoAction();

  const handleOpenModal = (value) => dispatch(setOpenModal(value));
  const handleDeleteModal = (value) => dispatch(setDeleteModal(value));

  const handleCreateOpenModal = () => {
    dispatch(
      setProductoCurrent({
        id: "",
        nombreProducto: "",
        categoria: "",
        precio: "",
      })
    );
    handleOpenModal(true);
  };

  const handleSetProductoCurrent = (value) => {
    dispatch(setProductoCurrent(value));
  };

  const openEdit = (producto) => {
    handleSetProductoCurrent(producto);
    handleOpenModal(true);
  };

  const handleChangeProducto = (e) => {
    dispatch(
      setProductoCurrent({
        ...state.productoCurrent,
        [e.target.name]: e.target.value,
      })
    );
  };

  return {
    handleOpenModal,
    handleChangeProducto,
    handleCreateOpenModal,
    handleSetProductoCurrent,
    openEdit,
    handleDeleteModal,
  };
};
