export const updateLocalStorege = (items) => {
    return localStorage.setItem("items", JSON.stringify(items));
};

