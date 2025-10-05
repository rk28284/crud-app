 const Baseurl = "https://crud-app-q4e0.onrender.com";
//const Baseurl = "http://localhost:8080";


export const loginUser=async (formData) => {
  try {
    const response = await fetch(`${Baseurl}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  const data = await response.json();
  if (!response.ok) throw new Error(data.message);
  return data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const registerUser=async (formData) => {
    try {
        const response = await fetch(`${Baseurl}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.message);
        return data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
  
};
