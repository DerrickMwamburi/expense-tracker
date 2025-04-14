import './App.css';
import { useState } from 'react';
import ExpenseTable from './components/ExpenseTable';
import AddExpenseForm from './components/AddExpenseForm';
import SearchBar from './components/SearchBar';

function App() {
  const [expenses, setExpenses] = useState([
    { date: '2025-03-01', description: 'Rent', category: 'Housing', amount: 15000 },
   { date: '2025-04-01', description: 'Cereals', category: 'Food', amount: 250 },
   { date: '2025-04-02', description: 'Internet Bill', category: 'Utilities', amount: 3500 },
   { date: '2025-04-03', description: 'Matatu to town', category: 'Transport', amount: 100 },
   { date: '2025-04-04', description: 'Netflix Subscription', category: 'Subscriptions', amount: 1200 },
   { date: '2025-04-05', description: 'Supplements', category: 'Health', amount: 850 },
   { date: '2025-04-06', description: 'Tuition Payment', category: 'Education', amount: 15000 },
   { date: '2025-04-07', description: 'Groceries', category: 'Shopping', amount: 4300 },
   { date: '2025-04-08', description: 'Savings Transfer', category: 'Savings', amount: 5000 },
   { date: '2025-04-09', description: 'KPLC Electricity Bill', category: 'Utilities', amount: 2800 },
   { date: '2025-04-10', description: 'Charity Donation', category: 'Donations', amount: 1000 },
   { date: '2025-04-11', description: 'Movie Ticket', category: 'Entertainment', amount: 750 },
   { date: '2025-04-12', description: 'Random Snacks', category: 'For Fun', amount: 450 },
    { date: '2025-04-13', description: 'New Shoes', category: 'Shopping', amount: 5000 },
    { date: '2025-04-14', description: 'Gym Membership', category: 'Health', amount: 3000 },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  function handleDeleteExpense(indexToRemove) {
    const updatedExpenses = expenses.filter((_, index) => index !== indexToRemove);
    setExpenses(updatedExpenses);
  }

  let sortedExpenses = [...expenses];

  if (sortBy === 'description') {
    sortedExpenses.sort((a, b) => a.description.localeCompare(b.description));
  } else if (sortBy === 'category') {
    sortedExpenses.sort((a, b) => a.category.localeCompare(b.category));
  }

  const filteredExpenses = sortedExpenses.filter((expense) =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>EXPENSE TRACKER</h1>

      <AddExpenseForm onAddExpense={handleAddExpense} />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      <div className="sort-bar">
        <label>Sort by: </label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="">None</option>
          <option value="description">Description</option>
          <option value="category">Category</option>
        </select>
      </div>

      <ExpenseTable expenses={filteredExpenses} onDeleteExpense={handleDeleteExpense} />

      <footer className="footer">
        created by <strong>DERRICK</strong>
      </footer>
    </div>
  );
}

export default App;
