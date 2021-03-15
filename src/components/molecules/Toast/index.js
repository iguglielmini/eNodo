import React, { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

const initialState = {
  isVisible: false,
  title: '',
  message: '',
  type: 'success',
  duration: 3800,
};

const ToastContext = createContext(initialState);

const { Provider, Consumer } = ToastContext;

function generateUEID() {
  const first = Math.random() * 46656 || 0;
  const second = Math.random() * 46656 || 0;

  const firstS = `000${first.toString(36)}`.slice(-3);
  const secondS = `000${second.toString(36)}`.slice(-3);

  return firstS + secondS;
}

const ToastProvider = ({ children }) => {
  const [reducerState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_TOAST':
        return {
          ...state,
          ...action.payload,
          isVisible: true,
          uuid: generateUEID(),
        };
      case 'REMOVE_TOAST':
        return {
          ...state,
          isVisible: false,
        };
      default:
        return state;
    }
  }, initialState);

  const open = (data) => {
    dispatch({ type: 'ADD_TOAST', payload: data });
  };

  const close = () => {
    dispatch({ type: 'REMOVE_TOAST' });
  };

  return (
    <Provider
      value={{
        state: reducerState,
        dispatch,
        open,
        close,
      }}
    >
      {children}
    </Provider>
  );
};

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useToast() {
  const context = useContext(ToastContext);

  return { open: context.open, close: context.close };
}

export const ToastConsumer = ({ children }) => (
  <Consumer>{context => children(context)}</Consumer>
);

const withToast = Comp => (props => (
  <ToastConsumer>
    {context => <Comp toast={context} {...props} />}
  </ToastConsumer>
));

export {
  useToast, ToastContext, ToastProvider, withToast
};
