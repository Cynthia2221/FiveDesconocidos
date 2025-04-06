const API_URL = "http://localhost:8080/api/site";

export const loginUser = async (name, password) => {
  const basicAuth = btoa(`${name}:${password}`);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Basic ${basicAuth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Login failed");
    }

    return data; // { user, token }
  } catch (error) {
    throw error;
  }
};
