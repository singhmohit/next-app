"use client";

import { ChangeEvent, useId, useState } from "react";

export default function Customer() {
    const [customerList, setCustomerList] = useState([
        { id: 1, name: 'Mohit' },
        { id: 2, name: 'Singh' }
    ]);

    const [customerName, setCustomerName] = useState('');
    const [isEdit, setIsEdit] = useState(false);
    const [editInfo, setEditInfo] = useState({});

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCustomerName(event.target.value);
    }
    const handleDelete = (id: number) => {
        const newList = customerList.filter(item => item.id !== id);
        setCustomerList(newList);
    }
    const handleAdd = () => {
        setCustomerList((pre) => ([...pre, {
            id: customerList.length + 1,
            name: customerName
        }]));

        setCustomerName('');
    }

    const openEdit = (id: number) => {
        setIsEdit(true);
        const update = customerList.filter(item => item.id === id)[0];
        setEditInfo(update);
    }

    return (
        <div className="p-3">
            <input type="text" id="custname" name="custname" value={customerName}
                placeholder="Enter Customer Name" onChange={(e) => handleChange(e)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            <button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 rounded">
                Add
            </button>

            <h5>List of Customers</h5>
            <ul>
                {customerList && customerList.map(({ id, name }: { id: number, name: string }) => (
                    <li key={id}>
                        <span>ID: {id} </span>
                        <span> Customer Name: {name} </span>
                        <button onClick={() => openEdit(id)} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Edit
                        </button>
                        <button onClick={() => handleDelete(id)} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-black py-2 px-4 border border-red-500 hover:border-transparent rounded">
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            {/* {
                isEdit && (
                    <>
                        <h5>Edit Customer</h5>
                        <input type="text" id="custname" name="updatename" value={editInfo.name}
                            placeholder="Enter Customer Name" onChange={(e) => handleChange(e)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            Save
                        </button>
                    </>
                )
            } */}
        </div>
    )
}