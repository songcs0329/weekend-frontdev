const store = {
    users: [
        {
            name: "suho",
            age: 36,
        },
        {
            name: "changseok",
            age: 28,
        },
    ],
};
module.exports = {
    selectAll(table) {
        return store[table];
    },
};
