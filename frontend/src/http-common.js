// const BASE_URL = "https://localhost:8080/api";
const BASE_URL = "https://0469e835-68e4-497b-b14e-ff98ab667c7a.escritorios.ieselrincon.es:443/api";

const customFetch = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const config = {
    ...options,
    headers,
  };

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, config);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Error in the request");
    }

    return data;
  } catch (error) {
    throw error;
  }
};

export default customFetch;