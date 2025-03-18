import { useEffect , useState } from 'react'
import './App.css'

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

function App() {
  
  const [posts,setPosts] = useState<Post[]>([])

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))

      //Or using Async Await
      // const fetchData = async () => {
      //   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      //   const json = await response.json();
      //   setPosts(json);
      // };
    
      // fetchData();

  },[])

  const renderedList = posts.map(post=>{
    return <div key={post.id}>{post.title}</div>
  })

  return (
   
      <div>
        {renderedList}
      </div>
   
  )
}

export default App
