import { Button, TextField } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import React from 'react';
import { useState } from 'react';
import { postBoard } from '../apis/boardApis';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { boardState } from '../state/BoardState';

const BoardCreatePage = () => {
    const history = useHistory();
    
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [contents, setContents] = useState("");

    // const [boards, setBoards] = useRecoilState(boardState);
    const setBoards = useSetRecoilState(boardState);
    
    const onsubmitHandler = async () => {
        const res = await postBoard({
            title, author, contents
        });
        if(!res.errorMessage) {
            setBoards(res);
            history.goBack();
        } else {
            alert(res.errorMessage)
        }
    };

    return (
        <>
            <div>
                <TextField
                value={title}
                label="제목"
                onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div>
                <TextField
                value={author}
                label="작성자"
                onChange={e => setAuthor(e.target.value)}
                />
            </div>
            <div>
                <textarea
                value={contents}
                onChange={e => setContents(e.target.value)}
                ></textarea>
            </div>
            <Button onClick={history.goBack}>취소</Button>
            <Button onClick={onsubmitHandler}>등록</Button>
        </>
    );
};

export default BoardCreatePage;