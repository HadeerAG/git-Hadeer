
export default function TopComment({postInfo}) {
    // console.log("TopComment", postInfo);
    const {topComment} = postInfo;
    const {commentCreator, content} =  topComment;
    const {photo,username:topcomentUser} = commentCreator;
  return (
    <div>
       <div class="mx-4 mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-3">
            <p class="mb-2 text-[11px] font-bold uppercase tracking-wide text-slate-500">Top Comment</p>
                <div class="flex items-start gap-2">
                    <img alt={topcomentUser} class="h-8 w-8 rounded-full object-cover" src={photo}/>
                        <div class="min-w-0 flex-1 rounded-2xl bg-white px-3 py-2">
                        <p class="truncate text-xs font-bold text-slate-900">{topcomentUser}</p>
                            <p class="mt-0.5 whitespace-pre-wrap text-sm text-slate-700">{content}</p>
      </div>
      </div>
      <button class="mt-2 text-xs font-bold text-[#1877f2] hover:underline">View all comments</button>
            </div>
    </div>
  )
}
