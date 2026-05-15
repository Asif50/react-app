import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
// import './index.css'
import App from './App.jsx'
import Counter from './components/counter/Counter.jsx'
// import ImageComp from './components/imagetask/imageComp.jsx'
import {Provider} from 'react-redux'
// import App1 from './App1.jsx'
import myReduxStore from './components/redux/store/Store.js'
// import 'bootstrap/dist/css/bootstrap.min.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      { <Provider store={myReduxStore}>
        <App />
      </Provider>}
    </BrowserRouter>
  </StrictMode>
)
