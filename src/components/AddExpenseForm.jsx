import { useState } from "react";

function AddExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.date || !formData.description || !formData.category || !formData.amount) {
      alert("Please fill in all fields");
      return;
    }

    onAddExpense({ ...formData, amount: parseFloat(formData.amount) });

    setFormData({
      date: "",
      description: "",
      category: "",
      amount: ""
    });
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;
