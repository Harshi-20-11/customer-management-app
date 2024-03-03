import React, { useState } from 'react';

function Table({ customers }) {
    const [sortBy, setSortBy] = useState(null);

    const handleSort = (criteria) => {
        setSortBy(criteria);
    };

    // Sorting function based on criteria
    const sortCustomers = (a, b) => {
        if (sortBy === 'date') {
            return new Date(a.created_at) - new Date(b.created_at);
        } else if (sortBy === 'time') {
            const timeA = new Date(a.created_at).getTime();
            const timeB = new Date(b.created_at).getTime();
            return timeA - timeB;
        }
        return 0;
    };

    // Apply sorting to customers array
    const sortedCustomers = sortBy ? customers.sort(sortCustomers) : customers;

    return (
        <table>
            <thead>
                <tr>
                    <th>Sno</th>
                    <th>Customer Name</th>
                    <th>Age</th>
                    <th>Phone</th>
                    <th>Location</th>
                    <th colSpan="2">
                        Created At
                        <button onClick={() => handleSort('date')}>Sort by Date</button>
                        <button onClick={() => handleSort('time')}>Sort by Time</button>
                    </th>
                </tr>
            </thead>
            <tbody>
                {sortedCustomers.map((customer, index) => (
                    <tr key={index}>
                        <td>{customer.sno}</td>
                        <td>{customer.customer_name}</td>
                        <td>{customer.age}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.location}</td>
                        <td>{new Date(customer.created_at).toLocaleDateString()}</td>
                        <td>{new Date(customer.created_at).toLocaleTimeString()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;


