const comma = (value) => (value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))

export {comma}