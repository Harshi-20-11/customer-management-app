const baseURL = 'http://localhost:5000/api/customers';

export const getAllCustomers = async () => {
    try {
        const response = await fetch(baseURL);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching customers:', error);
    }
};

export const searchCustomers = async (searchTerm) => {
    try {
        const response = await fetch(`${baseURL}/search?q=${searchTerm}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error searching customers:', error);
    }
};

export const getCustomersByPage = async (pageNo) => {
    try {
        const response = await fetch(`${baseURL}/page/${pageNo}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error fetching customers by page:', error);
    }
};

export const sortCustomers = async (sortBy) => {
    try {
        const response = await fetch(`${baseURL}/sort?sortBy=${sortBy}`);
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Error sorting customers:', error);
    }
};
