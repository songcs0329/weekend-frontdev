import Axios from 'axios';

const baseURl = `https://protected-beach-40061.herokuapp.com/boards`;

const getBoards = async () => {
    const res = await Axios.get(baseURl);
    return res.data;
};

const getBoard = async (id) => {
    const res = await Axios.get(`${baseURl}/${id}`);
    return res.data;
};

const postBoard = async ({title, author, contents}) => {
    const res = await Axios.post(baseURl, {
        title, author, contents
    });
    return res.data;
};

const deleteBoard = async (id) => {
    const res = await Axios.delete(`${baseURl}/${id}`);
    return res.data;
};

export {
    getBoards,
    getBoard,
    postBoard,
    deleteBoard
}