import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { routerForBrowser } from 'redux-little-router';

export const Demo: FC = ({ children }) => {
  const { reducer } = routerForBrowser({
    routes: {},
  });
  const reducers = combineReducers({ router: reducer });
  const store = createStore(reducers);

  // @ts-ignore
  return <Provider store={store}>{children}</Provider>;
};
