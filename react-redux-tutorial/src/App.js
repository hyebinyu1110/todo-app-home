import Todos from './components/Todo';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <div>
      <CounterContainer/>
      <hr />
      <Todos />

    </div>
  );
}

export default App;
