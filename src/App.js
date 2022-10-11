import { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const [expenses, setExpenses] = useState([]);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => [expense, ...prevExpenses]);
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
