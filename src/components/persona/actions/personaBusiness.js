import axios from "axios";
import { usePersona } from "../context/usePersona";
import { personaAction } from "./personaAction";

export const PersonaBusiness = () => {
  const { dispatch } = usePersona();
  const { state } = usePersona();
  const { setOpenModal, setPersonaCurrent, setDeleteModal, setRows } =
    personaAction();

  const handleOpenModal = (value) => dispatch(setOpenModal(value));
  const handleDeleteModal = (value) => dispatch(setDeleteModal(value));
  const handleSetRows = (value) => dispatch(setRows(value));

  const handleCreateOpenModal = () => {
    dispatch(
      setPersonaCurrent({
        _id: "",
        name: "",
        lastname: "",
        email: "",
        phone: "",
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

  const handleClickDelete = (id) => {
    dispatch(
      setPersonaCurrent({
        ...state.personaCurrent,
        _id: id,
      })
    );
    handleDeleteModal(true);
  };

  const getPerson = () => {
    axios
      .get("http://localhost:8080/api/persons")
      .then((resp) => handleSetRows(resp.data.persons))
      .catch((error) => console.log(error));
  };

  const createPerson = () => {
    axios
      .post("http://localhost:8080/api/persons", {
        name: state.personaCurrent.name,
        lastname: state.personaCurrent.lastname,
        email: state.personaCurrent.email,
        phone: state.personaCurrent.phone,
      })
      .then(() => {
        handleOpenModal(false);
        getPerson();
      })
      .catch(console.log);
  };
  const editPerson = () => {
    axios
      .put(`http://localhost:8080/api/persons/${state.personaCurrent._id}`, {
        name: state.personaCurrent.name,
        lastname: state.personaCurrent.lastname,
        email: state.personaCurrent.email,
        phone: state.personaCurrent.phone,
      })
      .then(() => {
        handleOpenModal(false);
        getPerson();
      })
      .catch(console.log);
  };
  const deletePerson = () => {
    axios
      .delete(`http://localhost:8080/api/persons/${state.personaCurrent._id}`)
      .then(() => {
        handleDeleteModal(false);
        getPerson();
      })
      .catch(console.log);
  };

  return {
    handleOpenModal,
    handleChangePersona,
    handleCreateOpenModal,
    handleSetPersonaCurrent,
    openEdit,
    handleDeleteModal,
    getPerson,
    createPerson,
    editPerson,
    deletePerson,
    handleClickDelete,
  };
};
