import axios from "axios";
import { useProducto } from "../context/useProducto";
import { productoAction } from "./productoAction";

export const ProductoBusiness = () => {
  const { state, dispatch } = useProducto();
  const { setOpenModal, setProductoCurrent, setDeleteModal, setRows } =
    productoAction();

  const handleOpenModal = (value) => dispatch(setOpenModal(value));
  const handleDeleteModal = (value) => dispatch(setDeleteModal(value));

  const handleCreateOpenModal = () => {
    dispatch(
      setProductoCurrent({
        _id: "",
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
  const handleSetRows = (value) => dispatch(setRows(value));

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

  const handleClickDelete = (id) => {
    dispatch(
      setProductoCurrent({
        ...state.productoCurrent,
        _id: id,
      })
    );
    handleDeleteModal(true);
  };

  const getProduct = () => {
    axios
      .get("http://localhost:8080/api/products")
      .then((resp) => handleSetRows(resp.data.products))
      .catch((error) => console.log(error));
  };

  const createProduct = () => {
    axios
      .post("http://localhost:8080/api/products", {
        nombreProducto: state.productoCurrent.nombreProducto,
        categoria: state.productoCurrent.categoria,
        precio: state.productoCurrent.precio,
      })
      .then(() => {
        handleOpenModal(false);
        getProduct();
      })
      .catch(console.log);
  };
  const editProduct = () => {
    axios
      .put(`http://localhost:8080/api/products/${state.productoCurrent._id}`, {
        nombreProducto: state.productoCurrent.nombreProducto,
        categoria: state.productoCurrent.categoria,
        precio: state.productoCurrent.precio,
      })
      .then(() => {
        handleOpenModal(false);
        getProduct();
      })
      .catch(console.log);
  };
  const deleteProduct = () => {
    axios
      .delete(`http://localhost:8080/api/products/${state.productoCurrent._id}`)
      .then(() => {
        handleDeleteModal(false);
        getProduct();
      })
      .catch(console.log);
  };

  return {
    handleOpenModal,
    handleChangeProducto,
    handleCreateOpenModal,
    handleSetProductoCurrent,
    openEdit,
    handleDeleteModal,
    deleteProduct,
    editProduct,
    createProduct,
    handleClickDelete,
    getProduct,
  };
};
