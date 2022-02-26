import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createTheme, ThemeProvider } from '@mui/material';


const theme = createTheme({
    palette: {
      primary: {
          main: '#07aa9e',
          contrastText: '#fff'
      },
      secondary: {
          main: '#b7b7a4'
      }
    }
  });

const feedback = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
}

const feedbackReducer = (state = feedback, action) => {
    if (action.type === 'ADD_FEELING') {
        return {...state, feeling: action.payload}
    } else if (action.type === 'ADD_UNDERSTAND') {
        return {...state, understanding: action.payload}
    } else if (action.type === 'ADD_SUPPORT') {
        return {...state, support: action.payload}
    } else if (action.type === "ADD_COMMENTS") {
        return {...state, comments: action.payload}
    } else if (action.type === 'CLEAR_FEEDBACK') {
        return feedback;
    }
    return state;
}



const storeInstance = createStore(
    combineReducers(
        {
        feedbackReducer
        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
