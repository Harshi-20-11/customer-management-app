import React, { useState, useEffect } from 'react';
import { getAllCustomers } from '../api/customerApi';
import Table from './Table';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

function App() {
    const [customers, setCustomers] = useState([]);
    const [filteredCustomers, setFilteredCustomers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(20); // Adjust the number of items per page as needed

    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = async () => {
        try {
            const data = await getAllCustomers();
            setCustomers(data);
            setFilteredCustomers(data); // Initialize filtered customers with all customers
        } catch (error) {
            console.error('Error fetching customers:', error);
        }
    };

    const handleSearch = (searchTerm) => {
        const filtered = customers.filter(customer =>
            customer.customer_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            customer.location.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCustomers(filtered);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Calculate indexes for pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredCustomers.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div>
            <h1>Customer Records</h1>
            <SearchBar onSearch={handleSearch} />
            <Table customers={currentItems} />
            <Pagination
                totalItems={filteredCustomers.length}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default App;

