import { useFetch } from '../hooks/useFetch'
import ArticleList from '../components/ArticleList'
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Loading from '../components/loading';
function Home() {
  const {data: articles, isPending, error} = useFetch('https://slender-granite-actor.glitch.me/articles');

  const {dispatch, loading} = useContext(ThemeContext)

  useEffect(()=>{
    dispatch({type:'ChangeMode', payload: isPending})
  },[isPending])

  if(loading) {
    return <Loading/>
  }

  return (
    <div>
      {articles && <ArticleList articles={articles}/>}
    </div>
  )
}

export default Home