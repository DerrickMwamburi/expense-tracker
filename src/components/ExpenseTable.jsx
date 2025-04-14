function ExpenseTable({ expenses, onDeleteExpense }) {
    return (
      <table className="expense-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount ($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: 'center' }}>
                No expenses found.
              </td>
            </tr>
          ) : (
            expenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.date}</td>
                <td>{expense.description}</td>
                <td>{expense.category}</td>
                <td>Ksh {Number(expense.amount).toLocaleString()}</td>
                <td>
                  <button className="delete-btn" onClick={() => onDeleteExpense(index)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  }
  
  export default ExpenseTable;
  