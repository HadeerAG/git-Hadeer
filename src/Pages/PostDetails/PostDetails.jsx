import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, Outlet, useParams } from "react-router";
import { BeatLoader } from "react-spinners";
import CreatComment from "../CreatComment/CreatComment";
import CommentsDetails from "../CommentsDetails/CommentsDetails";

export default function PostDetails() {

const {id} = useParams()

  function getPostDetails() {
   return axios.get(`https://route-posts.routemisr.com/posts/${id}`,{
     headers:{
         Authorization: `Bearer ${localStorage.getItem("token")}`
    }
    })
  }

  const{isError, isLoading, data, error} = useQuery({
    queryKey:["getPostDetails"],
    queryFn: getPostDetails
  })

   if (isLoading) {
        return <div className="flex place-content-center items-center my-10">
        <BeatLoader size={10} />
        </div>
    }

    if(isError){
        return <h2 className="flex place-content-center items-center my-10">{error}</h2>
    }



// console.log("data",data);

const postDetail = data.data?.data.post

const {body, commentsCount, createdAt, likesCount, privacy,  user, image, sharesCount}= postDetail;
// const { commentCreator, content, createdAt:topcommentdate } = topComment || {};
// const [_id, name, photo, username ] = user;



  

  return (
    <div>
      <div className="mx-auto my-5 max-w-3xl space-y-4">
        <Link to ="/home/posts" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-left" aria-hidden="true">
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
          </svg>
          Back
          </Link>
          <article className="overflow-visible rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="p-4">
              <div className="flex items-center gap-3">
                <a className="shrink-0" href="" data-discover="true">
                <img alt={user.name} className="h-11 w-11 rounded-full object-cover" src={user?.photo}/>
                </a>
                <div className="min-w-0 flex-1">
                  <a className="truncate text-sm font-bold text-foreground hover:underline" href="#/profile/69952410056bdb7627d8a4cf" data-discover="true">
                  {user.name}
                  </a>
                  <div className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
                    @{user.username}
                    <button type="button" className="rounded px-0.5 py-0.5 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-700 hover:underline">
                      {createdAt.split("T")[0]}
                      </button>
                      <span className="mx-1">·</span>
                      <span className="inline-flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-earth" aria-hidden="true">
                        <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                        <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
                        <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                        <circle cx="12" cy="12" r="10">
                          </circle>
                          </svg>
                          {privacy}
                          </span>
                          </div>
                          </div>
                          <div className="relative">
                            <button className="rounded-full p-1.5 text-slate-500 hover:bg-slate-100 hover:text-slate-700">
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-ellipsis" aria-hidden="true">
                              <circle cx="12" cy="12" r="1"></circle>
                              <circle cx="19" cy="12" r="1"></circle>
                              <circle cx="5" cy="12" r="1"></circle>
                              </svg>
                              </button>
                              </div>
                              </div>
                              <div className="mt-3">
                                <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">{body}</p>
                               {image &&  <img alt={body} className="object-cover" src={image}/>}
</div>
</div>
<div className="px-4 pb-2 pt-3 text-sm text-slate-500">
  <div className="flex flex-wrap items-center justify-between gap-2">
    <div className="flex items-center gap-2">
      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#1877f2] text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-up" aria-hidden="true">
        <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
        <path d="M7 10v12"></path>
        </svg>
        </span>
        <button type="button" className="font-semibold transition cursor-default">
          {likesCount} likes
          </button>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs sm:gap-3 sm:text-sm">
            <span className="inline-flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-repeat2 lucide-repeat-2" aria-hidden="true">
            <path d="m2 9 3-3 3 3"></path>
            <path d="M13 18H7a2 2 0 0 1-2-2V6"></path>
            <path d="m22 15-3 3-3-3"></path>
            <path d="M11 6h6a2 2 0 0 1 2 2v10"></path>
            </svg>
            {sharesCount} shares
            </span>
            <span>{commentsCount} comments</span>
            <button className="rounded-md px-2 py-1 text-xs font-bold text-[#1877f2] hover:bg-[#e7f3ff]">View details</button>
            </div>
            </div>
            </div>
            <div className="mx-4 border-t border-slate-200"></div>
            <div className="grid grid-cols-3 gap-1 p-1">
              <button className="cursor-pointer flex items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm text-slate-600 hover:bg-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-thumbs-up" aria-hidden="true">
                <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"></path>
                <path d="M7 10v12"></path>
                </svg>
                <span>Like</span>
                </button>
                <button className="cursor-pointer flex items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm text-slate-600 hover:bg-slate-100">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-message-circle" aria-hidden="true">
                  <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                  </svg>
                  <span>Comment</span>
                  </button>
                  <button className="cursor-pointer flex items-center justify-center gap-1.5 rounded-md p-2 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 sm:gap-2 sm:text-sm text-slate-600 hover:bg-slate-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-share2 lucide-share-2" aria-hidden="true">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line>
                    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line>
                    </svg>
                    <span>Share</span>
                    </button>
                    </div>

                  <div className="mx-4 mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                            <CreatComment postId = {id} />
                          </div>

                     {/* <div className="mx-4 mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
                      <p className="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-500">Top Comment</p>
                      <div className="flex items-start gap-2">
                        <img alt={commentCreator?.name} className="h-8 w-8 rounded-full object-cover" src={commentCreator?.photo}/>
                        <div className="min-w-0 flex-1 rounded-2xl bg-white px-3 py-2">
                          <div class="flex items-start justify-between gap-2"><div><p class="text-xs font-bold text-slate-900">{commentCreator?.name}</p>
                          <p class="text-xs text-slate-500">@{commentCreator?.username}· {topcommentdate.split("T")[0]}</p>
                          </div>
                          
                          </div>
                          <p class="mt-0.5 whitespace-pre-wrap text-sm text-slate-700">{content}</p>
                          
                          </div>
                          </div>
                           
                         
                           
                          </div> */}




                          
                           
                           
                                   {commentsCount>1 &&  <CommentsDetails postId = {id} commentsCount ={commentsCount} />}
                            

                           
                            
                          
                          
                          </article>
                          </div>
    </div>
  )


}

 {/* <button class="mt-2 text-xs font-bold text-[#1877f2] hover:underline">View all comments</button> */}
