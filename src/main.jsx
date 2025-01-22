import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import './index.css'
import { store } from './redux/store.jsx'
import Todolist from './To do List/todolist.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>
      <Todolist />

  </Provider>
    
    
  
    
  </StrictMode>
);
