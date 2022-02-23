import {createAction, handleActions} from "redux-actions";
import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

const INCREASE='counter/INCREASE';
const DECREASE='counter/DECREASE';
const INCREASE_ASYNC='counter/INCREASE_ASYNC';
const DECREASE_ASYNC='counter/DECREASE_ASYNC';

export const increase=createAction(INCREASE);
export const decrease=createAction(DECREASE);
export const increaseAsync=createAction(INCREASE_ASYNC,()=>undefined);
export const decreaseAsync=createAction(DECREASE_ASYNC,()=>undefined);

function* increaseSaga(){
    yield delay(1000);
    yield put(increase());
}
function* decreaseSage(){
    yield delay(1000);
    yield put(decrease());
}

export function* counterSaga(){
    // takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리
    yield takeEvery(INCREASE_ASYNC,increaseSaga);
    // takeLatest는 기존에 진행 중인 작업이 있으면 취소하고 가장 마지막으로 실행된 작업만 수행
    yield takeLatest(DECREASE_ASYNC,decreaseSage);
}

const initialize=0;

const counter=handleActions(
    {
        [INCREASE]:state=>state+1,
        [DECREASE]:state=>state-1
    },
    initialize
);

export default counter;

