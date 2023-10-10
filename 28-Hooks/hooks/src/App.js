import UseCallbackEx from './components/UseCallbackEx';
import UseCallbackEx2 from './components/UseCallbackEx2';
import UseMemo from './components/UseMemo';
import UseReducer from './components/UseReducer';
import Faq from './components/Faq';
function App() {
  return (
    <div className="App">
      <UseMemo />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={7} />
      <hr />
      <UseReducer />
      <hr />
      <Faq />
      <hr />
    </div>
  );
}

export default App;
