import API from "../api";

export const createExpense = async (expense) => {
    try {
        const response = await API.post('/api/expenses',{
            description: expense.description,
            amount: expense.amount,
            date: expense.date,
            category: expense.category
        }
        )
        return response.data;
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
}


export const getExpense = async () => {
    try {
        const response = await API.get('/api/expenses');
        return response.data;
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
};



export const updateExpense = async (id, expense) => {
    try {
        const response = await API.put(`/api/expenses/${id}`,
            {
                description: expense.description,
                amount: expense.amount,
                date: expense.date,
                category: expense.category
            }
        );
        return response.data;
    } catch (error) {
        console.error("Error updating expense:", error);
        throw error;
    }
};

export const deleteExpense = async (id) => {
    try {
        const response = await API.delete(`/api/expenses/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
}