import { useEffect , useState } from 'react'
import './App.css'

function App() {
  
  const [posts,setPosts] = useState([])

  const fetchData = useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  },[])

  const renderedList = posts.map(post=>{
    return <div key={post.id}>{post.title}</div>
  })

  return (
    <>
      <div>
        {renderedList}
      </div>
    </>
  )
}

export default App
