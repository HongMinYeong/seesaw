import LifeCycleClass from './LifeCycleClass';
import LifeCycleFunc from './LifeCycleFunc';
import PostList from './PostList';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <LifeCycleFunc />
      <hr />
      <LifeCycleClass />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
