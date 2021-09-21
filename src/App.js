import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import Posts from './components/Posts'
import PostForm from './components/PostForm'



function App() {
	return (
    <Provider store={store}>
		<div>
			<header>
				<h1>Redux Example</h1>
			</header>
      <PostForm />
      <hr />
      <Posts />
		</div>
    </Provider>
	);
}

export default App;
