import {atom} from 'recoil';
import { getBoards } from '../apis/boardApis';

export const boardState = atom({
    key: "boardState",
    default: getBoards()
});