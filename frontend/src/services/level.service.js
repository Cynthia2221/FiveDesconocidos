import fetchAPI from "../http-common";

const getAll = async () => {
  try {
    const response = await fetchAPI("/levels", {
      method: "GET",
    });
    return response;
  } catch (error) {
    console.error("Error in the request getAll: ", error);
    return null;
  }
};

const show = async (id) => {
  try {
    const response = await fetchAPI(`/levels/${id}`, {
      method: "GET",
    });
    return response;
  } catch (error) {
    console.log("Error in the request show: ", error);
    return null;
  }
};

const create = async (data) => {
  try {
    const response = await fetchAPI("/levels", {
      method: "POST",
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.error("Error in the creation:", error);
    return null;
  }
};

const update = async (id, data) => {
  try {
    const response = await fetchAPI(`/levels/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    return response;
  } catch (error) {
    console.error("Error in the update:", error);
    return null;
  }
};

const remove = async (id) => {
  try {
    const response = await fetchAPI(`/levels/${id}`, {
      method: "DELETE",
    });
    return response;
  } catch (error) {
    console.error("Error in the delete:", error);
    return null;
  }
};

const LevelService = {
  getAll,
  show,
  create,
  update,
  remove,
};

export default LevelService;
