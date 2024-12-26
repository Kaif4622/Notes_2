import React from 'react';

function Table() {
    const data = [
        { id: 1, name: 'John Doe', age: 30 },
        { id: 2, name: 'Jane Doe', age: 25 },
        { id: 3, name: 'Peter Jones', age: 35 },
    ];

    return (
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead className="bg-blue-500 text-white">
                <tr>
                    <th className="py-2 px-4 text-left">ID</th>
                    <th className="py-2 px-4 text-left">Name</th>
                    <th className="py-2 px-4 text-left">Age</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr
                        key={item.id}
                        className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                    >
                        <td className="py-2 px-4 border-b border-gray-300">{item.id}</td>
                        <td className="py-2 px-4 border-b border-gray-300">{item.name}</td>
                        <td className="py-2 px-4 border-b border-gray-300">{item.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
