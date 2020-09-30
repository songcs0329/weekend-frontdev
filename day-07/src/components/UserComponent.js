const userlistComponent = (users) => {
    const list = users
        .map((user) => {
            return `<li>${user.name} :: ${user.age}</li>`;
        })
        .join("");
    return `<ul>${list}</ul>`;
};

module.exports = userlistComponent;
