import { createRoot } from 'react-dom/client'
import App from './App'
import './assets/main.css'
import { Provider } from 'react-redux'
import { store } from './services/state/store'

createRoot(document.getElementById('root')!).render(
    <Provider store={store} >
        <App />
    </Provider>
)
