import Header from "./components/Header";
import PostList from "./components/PostList";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { useState } from "react";


function App() {
  const [showAddPostForm, setShowAddPostForm] = useState(false); 

  const handleToggleForm = () => {
    setShowAddPostForm((prevState) => !prevState); 
  };

  return (
    <Provider store={store}>
          <Header showAddPostForm={showAddPostForm}
          handleToggleForm={handleToggleForm}
          />
          <PostList showAddPostForm={showAddPostForm}/>
        </Provider>
  );
}

export default App;
