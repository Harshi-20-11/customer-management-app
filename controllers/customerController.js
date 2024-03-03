// customerController.js

const pool = require('../db');

// Controller function to fetch all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM customers');
    res.json(rows);
  } catch (error) {
    console.error('Error fetching customers', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller function for searching customers
exports.searchCustomers = async (req, res) => {
  const { q } = req.query;
  try {
    const { rows } = await pool.query('SELECT * FROM customers WHERE customer_name ILIKE $1 OR location ILIKE $1', [`%${q}%`]);
    res.json(rows);
  } catch (error) {
    console.error('Error searching customers', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller function for pagination
exports.getCustomersByPage = async (req, res) => {
  const { pageNo } = req.params;
  const limit = 20;
  const offset = (pageNo - 1) * limit;
  try {
    const { rows } = await pool.query('SELECT * FROM customers ORDER BY sno OFFSET $1 LIMIT $2', [offset, limit]);
    res.json(rows);
  } catch (error) {
    console.error('Error fetching customers by page', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Controller function for sorting
exports.sortCustomers = async (req, res) => {
  const { sortBy } = req.query;
  try {
    const { rows } = await pool.query('SELECT * FROM customers ORDER BY $1:raw', [sortBy]);
    res.json(rows);
  } catch (error) {
    console.error('Error sorting customers', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
