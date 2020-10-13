import { Button } from '@material-ui/core';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { getBoard, deleteBoard } from '../apis/boardApis';
import { boardState } from '../state/BoardState';

const BoardDetailPage = () => {
    const [detail, setDetail] = useState({});
    const history = useHistory();
    const {id} = useParams();

    // const [boards, setBoards] = useRecoilState(boardState);
    const setBoards = useSetRecoilState(boardState);

    useEffect(() => {
        getBoard(id).then(data => setDetail(data));
    }, [id]);

    const onDeleteHandler = async () => {
        const res = await deleteBoard(id);
        setBoards(res);
        history.goBack();
    };



    return (
        <>
            <div>
                <Button
                    onClick={history.goBack}
                >
                    뒤로가기
                </Button>
                <Button
                    onClick={onDeleteHandler}
                >
                    삭제
                </Button>
            </div>
            <div>
                {detail.id}
            </div>
            <div>
                제목: {detail.title}
            </div>
            <div>
                작성자: {detail.author}
            </div>
            <div>
                {detail.contents}
            </div>
            <div>
                작성일: {detail.createdAt}
            </div>
        </>
    );
};

export default BoardDetailPage;