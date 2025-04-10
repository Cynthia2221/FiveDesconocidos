const protocol = import.meta.env.VITE_HTTPS == "true" ? "https" : "http";
const API_HOST = import.meta.env.VITE_API_HOST;
const API_PORT = import.meta.env.VITE_API_PORT;
const BASE_URL = `${protocol}://${API_HOST}:${API_PORT}`;

export const registerUser = async (userData) => {
  const { name, password } = userData;

  const response = await fetch(`${BASE_URL}/api/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Basic " + btoa(`${name}:${password}`),
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Error en el registro");
  }

  return await response.json();
};
  
