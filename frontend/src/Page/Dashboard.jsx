import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addEmployee, deleteEmployee, getEmployees, updateEmployee } from "../api/empyapi";

export const Dashboard = () => {
    const [data,setData]=useState([]);
    const [search,setSearch]=useState("");
    const [modalOpen,setModalOpen]=useState(false);
    const [editData,setEditData]=useState(null);

    const [form, setForm] = useState({ employeeid: "", name: "", email: "", department: "", position: "" });

    const fetchData=async()=>{
        const token=localStorage.getItem("token");
        try {
            const res=await getEmployees(token);
            setData(res);
        } catch {
            toast.error("Failed to fetch employee data");
        }
    };

    useEffect(()=>{

        fetchData();
        
    }, []);

    const handleFormSubmit=async (e) => {
        e.preventDefault();
        const token=localStorage.getItem("token");

        try {
            if(editData){
                await updateEmployee(token,editData._id,form);
                toast.success("Employee data updated");
            } else {
                await addEmployee(token,form);
                console.log(form);

                toast.success("Employee data added");
            }
            setModalOpen(false);
            setForm({employeeid:"",name:"",email:"",department:"",position:""});
            setEditData(null);
            fetchData();
        } catch {
            toast.error("Something went wrong");
        }
    };

    const handleDelete=async(id)=>{

        const token=localStorage.getItem("token");

        if (!window.confirm("Are you sure you want to delete this employee Data?")) return;
        try {
            await deleteEmployee(token, id);
            toast.success("Employee deleted Data Successfully");
            fetchData();
        } catch {
            toast.error("Failed to delete employee Data");
        }
    };


    const openModal=(emp=null)=>{
        setEditData(emp);
        setForm(emp || {employeeid:"",name:"",email:"",department:"",position:""});
        setModalOpen(true);
    };



    const filteredEmployees=data.filter(emp =>
        emp.name.toLowerCase().includes(search.toLowerCase())
    );


    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <ToastContainer />
            <div className="w-full  bg-white p-4 md:p-8 rounded-2xl shadow-lg">

                <div className="flex flex-row items-center justify-between gap-4 mb-8">
                    <h2 className="text-3xl font-bold text-red-800 text-left">Employee Dashboard</h2>

                    <div className="flex gap-3 items-center">
                        <input
                            type="text"
                            placeholder="Search By Employee name"
                            className="w-64 md:w-96 px-4 py-2 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-green-300 transition"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />

                        <button
                            onClick={() => openModal()}
                            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                        >
                            Add Employee
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                        <thead className="bg-green-200 text-gray-700 font-semibold">
                            <tr>
                                <th className="px-8 py-4">Employee ID</th>
                                <th className="px-8 py-4">Name</th>
                                <th className="px-8 py-4">Email</th>
                                <th className="px-8 py-4">Department</th>
                                <th className="px-8 py-4">Position</th>
                                <th className="px-8 py-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredEmployees.map((res, idx) => (
                                <tr
                                    key={res._id}
                                    className={`border-t hover:bg-green-50 transition ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        }`}
                                >
                                    <td className="px-8 py-4">{res.employeeid}</td>
                                    <td className="px-8 py-4">{res.name}</td>
                                    <td className="px-8 py-4">{res.email}</td>
                                    <td className="px-8 py-4">{res.department}</td>
                                    <td className="px-8 py-4">{res.position}</td>
                                    <td className="px-8 py-4 flex gap-3">
                                        <button
                                            onClick={() => openModal(res)}
                                            className="text-blue-600 hover:text-blue-800 font-medium"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(res._id)}
                                            className="text-red-600 hover:text-red-800 font-medium"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {!filteredEmployees.length && (
                                <tr>
                                    <td
                                        colSpan={5}
                                        className="text-center text-gray-400 py-6 italic"
                                    >
                                        No employees found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                </div>
            </div>

            {modalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
                    <div className="bg-white p-8 rounded-xl w-full max-w-sm">
                        <h3 className="text-xl font-bold mb-4">
                            {editData ? "Edit Employee" : "Add Employee"}
                        </h3>
                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="employeeid"
                                placeholder="Please Enter Employee ID"
                                value={form.employeeid}
                                onChange={e => setForm({ ...form, employeeid: e.target.value })}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <input
                                type="text"
                                name="name"
                                placeholder="Please Enter Name"
                                value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Please Enter Email"
                                value={form.email}
                                onChange={e => setForm({ ...form, email: e.target.value })}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                disabled={!!editData}

                            />

                            <input
                                type="text"
                                name="department"
                                placeholder="Please Enter Department"
                                value={form.department}
                                onChange={e => setForm({ ...form, department: e.target.value })}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />

                            <input
                                type="text"
                                name="position"
                                placeholder="Please Enter Position"
                                value={form.position}
                                onChange={e => setForm({ ...form, position: e.target.value })}
                                required
                                className="w-full border border-gray-300 rounded px-3 py-2"
                            />
                            <div className="flex items-center justify-end gap-4 mt-2">
                                <button
                                    type="button"
                                    onClick={() => setModalOpen(false)}
                                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                >
                                    {editData?"Update":"Add"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};
