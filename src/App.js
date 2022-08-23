import './App.css';
import { store } from './app/store.js'
import { Provider } from 'react-redux'
import Counter from './features/counter/Counter';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header>
          Redux App
      </header>
      <main>
        <Counter />
      </main>
    </div>
    </Provider>
  );
}

export default App;
