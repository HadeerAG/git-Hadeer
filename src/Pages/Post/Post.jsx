import axios from "axios"
import PostCard from "../PostCard/PostCard";
import { BeatLoader } from "react-spinners";
import { useQuery } from "@tanstack/react-query";
import Feed from "../FeedSec/Feed";



export default function Post() {


    // const [allPosts, setAllPosts] = useState(null)
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(false)


//    const { userToken } = useContext(authContext)

    // function getPosts() {
    //     setLoading(true)
    //     axios.get("https://route-posts.routemisr.com/posts",{
    // headers:{
    //     Authorization: `Bearer ${localStorage.getItem("token")}`
    // }
    //   }).then(function (resp) {
    //     setAllPosts(resp.data.data.posts)
    //     console.log("response", resp.data.data.posts);
        
    //   }).catch(function(error){
    //     console.log("error", error);
    //     setError(true)
        
    //   }).finally(function(){
    //     setLoading(false)
    //   })
      
    // }


    // useEffect(()=>{
    //     getPosts();
    // },[])


    function getPosts(){
     return axios.get("https://route-posts.routemisr.com/posts",{
     headers:{
         Authorization: `Bearer ${localStorage.getItem("token")}`
    }
    })
  }

    const { data, isLoading, isError} = useQuery({
      queryKey:["getPosts"],
      queryFn: getPosts
    })
  


    if (isLoading) {
        return <div className="flex place-content-center items-center">
        <BeatLoader size={10} />
        </div>
    }

    if(isError){
        return <h2>Page not found please try again</h2>
    }

      //  console.log("data", data.data.data);
   
   const allPosts = data.data.data.posts

  return (
    <div className="space-y-4">
    {/* <Feed /> */}
     {allPosts?.map(post => <PostCard key={post.id} postInfo ={post} />)}
    </div>
  )
}
