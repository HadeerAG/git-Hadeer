import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function CommentsDetails({postId, commentsCount}) {


    function getPostComments() {
      return axios.get(`https://route-posts.routemisr.com/posts/${postId}/comments?page=1&limit=10`, {
         headers:{
             Authorization: `Bearer ${localStorage.getItem("token")}`
        }
        })
    }
    
    const{isError:isErrorComments, isLoading, data:CommentsData, error:commentsError} = useQuery({
        queryKey:"getPostComments",
        queryFn: getPostComments
      })
    
      console.log("comments", CommentsData);
      const comments = CommentsData?.data?.data.comments

      if (isLoading) {
    return  <div class="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <div class="flex items-center gap-2">
                <p class="text-lg font-extrabold  tracking-wide text-slate-700">Loading Comments ...</p>
                
                </div>
                    </div>
  }

      

  return (
    <div className="border-t border-slate-200 bg-[#f7f8fa] px-4 py-4 mx-2">

       <div class="mb-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2">
            <div class="flex items-center gap-2">
                <p class="text-sm font-extrabold  tracking-wide text-slate-700">Comments</p>
                <span class="rounded-full bg-[#e7f3ff] px-2 py-0.5 text-[11px] font-bold text-[#1877f2]">{commentsCount}</span>
                </div>
                {/* <select class="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs font-bold text-slate-700 outline-none ring-[#1877f2]/20 focus:border-[#1877f2] focus:bg-white focus:ring-2">
                <option value="relevant">Most relevant</option>
                <option value="newest">Newest</option>
                </select> */}
                                     </div>

                {comments?.map(comment => 
                    <div class="space-y-2 my-3">
                    <div class="relative flex items-start gap-2">
                        <img alt={comment.commentCreator.name} class="mt-0.5 h-8 w-8 rounded-full object-cover" src={comment.commentCreator.photo}/>
                        <div class="min-w-0 flex-1">
                            <div class="relative inline-block max-w-full rounded-2xl bg-[#f0f2f5] px-3 py-2">
                                <div class="flex items-start justify-between gap-2">
                                    <div>
                                        <p class="text-xs font-bold text-slate-900">{comment.commentCreator.name}</p>
                                        <p class="text-xs text-slate-500">@{comment.commentCreator.username} </p>
                                        </div>
                                        </div>
                                        <p class="mt-1 whitespace-pre-wrap text-sm text-slate-800">{comment.content}</p>
                                        </div>
                                        <div class="mt-1.5 flex items-center justify-between px-1">
                                            <div class="flex items-center gap-4">
                                                <span class="text-xs font-semibold text-slate-400">{comment.createdAt.split("T")[0]}</span>
                                                <button class="text-xs font-semibold hover:underline disabled:opacity-60 text-slate-500">Like {comment.likes.length}</button>
                                                <button class="text-xs font-semibold transition hover:underline disabled:opacity-60 text-slate-500 hover:text-[#1877f2]">Reply</button>
                                                </div>
                                                </div>
                                                </div>
                                                </div>
                                                
                        </div>
                )}
    </div>

  )
}

{/* <div class="relative flex items-start gap-2">
                                                                                <img alt="Youssef Osama" class="mt-0.5 h-8 w-8 rounded-full object-cover" src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png"><div class="min-w-0 flex-1"><div class="relative inline-block max-w-full rounded-2xl bg-[#f0f2f5] px-3 py-2"><div class="flex items-start justify-between gap-2"><div><p class="text-xs font-bold text-slate-900">Youssef Osama</p><p class="text-xs text-slate-500">@youssefosama2 · 2h</p></div></div><p class="mt-1 whitespace-pre-wrap text-sm text-slate-800">Comments</p></div><div class="mt-1.5 flex items-center justify-between px-1">
                                                                                <div class="flex items-center gap-4">
                                                                                <span class="text-xs font-semibold text-slate-400">2h</span><button class="text-xs font-semibold hover:underline disabled:opacity-60 text-slate-500">Like (0)</button><button class="text-xs font-semibold transition hover:underline disabled:opacity-60 text-slate-500 hover:text-[#1877f2]">Reply</button></div></div></div></div><div class="relative flex items-start gap-2"><img alt="Youssef Osama" class="mt-0.5 h-8 w-8 rounded-full object-cover" src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png"><div class="min-w-0 flex-1"><div class="relative inline-block max-w-full rounded-2xl bg-[#f0f2f5] px-3 py-2"><div class="flex items-start justify-between gap-2"><div><p class="text-xs font-bold text-slate-900">Youssef Osama</p><p class="text-xs text-slate-500">@youssefosama2 · 2h</p></div></div><p class="mt-1 whitespace-pre-wrap text-sm text-slate-800">Comments</p></div><div class="mt-1.5 flex items-center justify-between px-1">
                                                                                <div class="flex items-center gap-4">
                                                                                <span class="text-xs font-semibold text-slate-400">2h</span><button class="text-xs font-semibold hover:underline disabled:opacity-60 text-slate-500">Like (0)</button><button class="text-xs font-semibold transition hover:underline disabled:opacity-60 text-slate-500 hover:text-[#1877f2]">Reply</button></div></div></div></div><div class="relative flex items-start gap-2"><img alt="Youssef Osama" class="mt-0.5 h-8 w-8 rounded-full object-cover" src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png"><div class="min-w-0 flex-1"><div class="relative inline-block max-w-full rounded-2xl bg-[#f0f2f5] px-3 py-2"><div class="flex items-start justify-between gap-2"><div><p class="text-xs font-bold text-slate-900">Youssef Osama</p><p class="text-xs text-slate-500">@youssefosama2 · 2h</p></div></div><p class="mt-1 whitespace-pre-wrap text-sm text-slate-800">Comments</p></div><div class="mt-1.5 flex items-center justify-between px-1"><div class="flex items-center gap-4"><span class="text-xs font-semibold text-slate-400">2h</span><button class="text-xs font-semibold hover:underline disabled:opacity-60 text-slate-500">Like (0)</button><button class="text-xs font-semibold transition hover:underline disabled:opacity-60 text-slate-500 hover:text-[#1877f2]">Reply</button></div></div></div></div></div><div class="mt-3"><div class="flex items-start gap-2"><img alt="hadeer" class="h-9 w-9 rounded-full object-cover" src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png"><div class="w-full rounded-2xl border border-slate-200 bg-[#f0f2f5] px-2.5 py-1.5 focus-within:border-[#c7dafc] focus-within:bg-white" data-comment-mention-root="true"><textarea placeholder="Comment as hadeer..." rows="1" class="max-h-[140px] min-h-[40px] w-full resize-none bg-transparent px-2 py-1.5 text-sm leading-5 outline-none placeholder:text-slate-500"></textarea><div class="mt-1 flex items-center justify-between"><div class="flex items-center gap-1"><label class="inline-flex cursor-pointer items-center justify-center rounded-full p-2 text-slate-500 transition hover:bg-slate-200 hover:text-emerald-600"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image" aria-hidden="true"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg><input accept="image/*" class="hidden" type="file"></label><button type="button" class="inline-flex items-center justify-center rounded-full p-2 text-slate-500 transition hover:bg-slate-200 hover:text-amber-500"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-smile" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line></svg></button></div><button class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-sm transition hover:bg-[#166fe5] disabled:cursor-not-allowed disabled:bg-[#9ec5ff] disabled:opacity-100" disabled=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal" aria-hidden="true">
      <path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"></path>
      <path d="M6 12h16"></path></svg></button></div></div></div> */}
