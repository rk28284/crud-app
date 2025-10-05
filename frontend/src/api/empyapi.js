const Baseurl = "https://crud-app-q4e0.onrender.com/api/employee";
//const Baseurl = "http://localhost:8080/api/employee";

export const getEmployees=async(token)=>{
  try {
    const res = await fetch(`${Baseurl}`,{
      headers: { Authorization: `Bearer ${token}` },
    });
if (!res.ok) throw new Error("Something went wrong");
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const addEmployee=async(token, data) => {
       console.log(data);
  try {
    const res = await fetch(`${Baseurl}/add`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
   
      
      body:JSON.stringify(data),
    });
if (!res.ok) throw new Error("Something went wrong");
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const updateEmployee=async(token, id, data)=>{
  try {
    const res = await fetch(`${Baseurl}/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
if (!res.ok) throw new Error("Something went wrong");
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const deleteEmployee=async(token, id)=>{
  try {
    const res = await fetch(`${Baseurl}/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
if (!res.ok) throw new Error("Something went wrong");
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
