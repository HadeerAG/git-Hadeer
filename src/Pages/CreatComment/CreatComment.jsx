import { useMutation, useQueryClient} from "@tanstack/react-query"
import axios from "axios"
import { useForm } from "react-hook-form"
import {  MoonLoader } from "react-spinners"



export default function CreatComment({postId}) {


const {register, handleSubmit, reset} = useForm({
  defaultValues:{
    content:"",
    image:""
  }
})

const formData = new FormData()
 



function addNewComment() {
   return axios.post(`https://route-posts.routemisr.com/posts/${postId}/comments`,formData,{
     headers:{
         Authorization: `Bearer ${localStorage.getItem("token")}`
    }
    })
  
   

  
  }

   const {isPending, isError,  mutate} = useMutation({
    mutationFn: addNewComment,
    onSuccess: ()=>{
      query.invalidateQueries({
        queryKey:["getPosts"]
      })
      query.invalidateQueries({
        queryKey:["getPostDetails"]
      })
      reset()
      console.log("DONE");
      
    },
    onError: ()=> {},
    onSettled: ()=>{}
  })

  

function handleAddComment(values) {
  console.log("values", values);
  
   if (!values.content && !values.image[0]) return

    if (values.content) {
          formData.append("content", values.content)
    }

    if (values.image[0]) {
          formData.append("image",values.image[0])
    }

    mutate();
}



const query = useQueryClient()




  return (
    <div>
       <form onSubmit={handleSubmit(handleAddComment)}>
        <div class="flex items-start gap-2">
                              <img alt="hadeer" class="h-9 w-9 rounded-full object-cover" src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png"/>
                              <div class="w-full rounded-2xl border border-slate-200 bg-[#f0f2f5] px-2.5 py-1.5 focus-within:border-[#c7dafc] focus-within:bg-white" data-comment-mention-root="true">
                                <textarea {...register("content")} placeholder="Comment as hadeer..." rows="1" class="max-h-35 min-h-10 w-full resize-none bg-transparent px-2 py-1.5 text-sm leading-5 outline-none placeholder:text-slate-500">
                                  </textarea>
                                  <div class="mt-1 flex items-center justify-between">
                                    <div class="flex items-center gap-1">
                                      <label class="inline-flex cursor-pointer items-center justify-center rounded-full p-2 text-slate-500 transition hover:bg-slate-200 hover:text-emerald-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image" aria-hidden="true">
                                        <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                                        <circle cx="9" cy="9" r="2"></circle>
                                        <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                                        </svg>
                                        <input {...register("image")} accept="image/*" class="hidden" type="file"/>
                                        </label>
                                        <button type="button" class="inline-flex items-center justify-center rounded-full p-2 text-slate-500 transition hover:bg-slate-200 hover:text-amber-500">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                          <line x1="9" x2="9.01" y1="9" y2="9"></line>
                                          <line x1="15" x2="15.01" y1="9" y2="9"></line>
                                          </svg>
                                          </button>
                                          </div>
                                          <button disabled={isPending} type="submit" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-sm transition hover:bg-[#166fe5] disabled:cursor-not-allowed disabled:bg-[#9ec5ff] disabled:opacity-100">
                                            {isPending? <MoonLoader color="ffff" size={15} /> : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal" aria-hidden="true">
                                            <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"></path><path d="M6 12h16"></path>
                                             </svg>}
                                          </button>
                                          
                                          
                          </div>
                          
                          
                         
                          </div>
            
            {isError && <div className=" border rounded-2xl border-red-600 text-red-700 p-3"> failed to send comment </div>}
            </div>
       </form>
    </div>
  )
}
