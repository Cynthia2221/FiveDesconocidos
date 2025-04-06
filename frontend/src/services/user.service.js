export const registerUser = async (userData) => {
    const { name, password } = userData;
  
    const response = await fetch("http://localhost:8080/api/users", {
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
  