const loggerMiddleware = store => next => action => {
    // 미들웨어 기본구조
    console.group(action && action.type); // 액션타입으로 log를 그룹화함.
    console.log('이전 상태', store.getState());
    console.log('액션', action);
    next(action);
    console.log('다음 상태', store.getState()); // 업데이트된 상태
    console.groupEnd(); // 그룹 끝

};

export default loggerMiddleware;