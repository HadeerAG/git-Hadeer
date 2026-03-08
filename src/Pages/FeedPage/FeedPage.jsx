import { NavLink, Outlet } from "react-router-dom";


export default function FeedPage() {
  return (
   <>
   <section className="grid gap-4 xl:grid-cols-[240px_minmax(0,1fr)_300px]">

   <aside className="hidden h-fit space-y-3 xl:sticky xl:top-21 xl:block">
    <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
        <NavLink to = "/" className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-bold transition  text-slate-700 hover:bg-slate-100 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-newspaper" aria-hidden="true">
        <path d="M15 18h-5"></path>
        <path d="M18 14h-8"></path>
        <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path>
        <rect width="8" height="4" x="10" y="6" rx="1"></rect>
        </svg>
        Feed
        </NavLink>
        <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-bold transition text-slate-700 hover:bg-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles" aria-hidden="true">
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
            <path d="M20 2v4"></path>
            <path d="M22 4h-4"></path>
            <circle cx="4" cy="20" r="2"></circle>
            </svg>
            My Posts
            </button>
            <NavLink to = "posts" className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-bold transition text-slate-700 hover:bg-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-earth" aria-hidden="true">
                <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
                <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                <circle cx="12" cy="12" r="10"></circle>
                </svg>
                Community
                </NavLink>
                <button className="mt-1 flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-bold transition text-slate-700 hover:bg-slate-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bookmark" aria-hidden="true">
                    <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z">
                        </path></svg>
                        Saved
                        </button>
                        </div>
                        </aside>



        <Outlet/>

   <aside className="hidden h-fit xl:sticky xl:top-21 xl:block">
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users text-[#1877f2]" aria-hidden="true">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <circle cx="9" cy="7" r="4"></circle>
                </svg>
                <h3 className="text-base font-extrabold text-slate-900">Suggested Friends</h3>
                </div>
                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">5</span>
                </div>
                <div className="mb-3">
                    <label className="relative block">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" aria-hidden="true">
                        <path d="m21 21-4.34-4.34"></path>
                        <circle cx="11" cy="11" r="8"></circle>
                        </svg>
                        <input placeholder="Search friends..." className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-700 outline-none focus:border-[#1877f2] focus:bg-white" value=""/>
                        </label>
                        </div>
                        <div className="space-y-3">
                            <div className="rounded-xl border border-slate-200 p-2.5">
                                <div className="flex items-center justify-between gap-2">
                                    <button type="button" className="flex min-w-0 items-center gap-2 rounded-lg px-1 py-1 text-left transition hover:bg-slate-50">
                                        <img alt="Ahmed Bahnasy" className="h-10 w-10 rounded-full object-cover" src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/1771018057253-2285ec56-8e3c-4ea3-9ee4-c235037ffffe-Screenshot-2026-02-13-at-11.27.15---PM.png"/>
                                        <div className="min-w-0">
                                            <p className="truncate text-sm font-bold text-slate-900 hover:underline">Ahmed Bahnasy</p>
                                            <p className="truncate text-xs text-slate-500">@bahnasy20222</p>
                                            </div>
                                            </button>
                                            <button className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold transition disabled:opacity-60 bg-[#e7f3ff] text-[#1877f2] hover:bg-[#d8ebff]">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus" aria-hidden="true">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="9" cy="7" r="4"></circle>
                                                <line x1="19" x2="19" y1="8" y2="14"></line>
                                                <line x1="22" x2="16" y1="11" y2="11"></line>
                                                </svg>
                                                Follow
                                                </button>
                                                </div>
                                                <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                                                    <span className="rounded-full bg-slate-100 px-2 py-0.5">172 followers</span>
                                                    </div>
                                                    </div>
                                                    <div className="rounded-xl border border-slate-200 p-2.5">
                                                        <div className="flex items-center justify-between gap-2">
                                                            <button type="button" className="flex min-w-0 items-center gap-2 rounded-lg px-1 py-1 text-left transition hover:bg-slate-50">
                                                                <img alt="Ahmed Abd Al-Muti" className="h-10 w-10 rounded-full object-cover" src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/1771038591307-b70f2a83-d052-400d-a8ea-5c601b51e262-WhatsApp-Image-2026-01-21-at-05.00.10.jpeg"/>
                                                                <div className="min-w-0">
                                                                    <p className="truncate text-sm font-bold text-slate-900 hover:underline">Ahmed Abd Al-Muti</p>
                                                                    <p className="truncate text-xs text-slate-500">@ahmedmutti</p>
                                                                    </div>
                                                                    </button>
                                                                    <button className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold transition disabled:opacity-60 bg-[#e7f3ff] text-[#1877f2] hover:bg-[#d8ebff]">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus" aria-hidden="true">
                                                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                                        <circle cx="9" cy="7" r="4"></circle>
                                                                        <line x1="19" x2="19" y1="8" y2="14"></line>
                                                                        <line x1="22" x2="16" y1="11" y2="11"></line>
                                                                        </svg>
                                                                        Follow
                                                                        </button>
                                                                        </div>
                                                                        <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                    <span className="rounded-full bg-slate-100 px-2 py-0.5">99 followers</span>
                    </div>
                    </div>
                    <div className="rounded-xl border border-slate-200 p-2.5">
                        <div className="flex items-center justify-between gap-2">
                            <button type="button" className="flex min-w-0 items-center gap-2 rounded-lg px-1 py-1 text-left transition hover:bg-slate-50">
                                <img alt="Ahmed Bahnasy" className="h-10 w-10 rounded-full object-cover" src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png"/>
                                <div className="min-w-0">
                                    <p className="truncate text-sm font-bold text-slate-900 hover:underline">Ahmed Bahnasy</p>
                                    <p className="truncate text-xs text-slate-500">@bahnasy20222w2</p>
                                    </div>
                                    </button>
                                    <button className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold transition disabled:opacity-60 bg-[#e7f3ff] text-[#1877f2] hover:bg-[#d8ebff]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus" aria-hidden="true">
                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <line x1="19" x2="19" y1="8" y2="14"></line>
                                        <line x1="22" x2="16" y1="11" y2="11"></line>
                                        </svg>
                                        Follow</button>
                                        </div>
                                        <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                                            <span className="rounded-full bg-slate-100 px-2 py-0.5">79 followers</span>
                                            </div></div><div className="rounded-xl border border-slate-200 p-2.5">
                                                <div className="flex items-center justify-between gap-2">
                                                    <button type="button" className="flex min-w-0 items-center gap-2 rounded-lg px-1 py-1 text-left transition hover:bg-slate-50">
                                                        <img alt="Nourhan" className="h-10 w-10 rounded-full object-cover" src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/1771068100123-c9bbeba4-0e5f-4246-811e-add6e4890e40-DSC07722.webp"/>
                                                        <div className="min-w-0">
                                                            <p className="truncate text-sm font-bold text-slate-900 hover:underline">Nourhan</p>
                                                            <p className="truncate text-xs text-slate-500">@nourhan</p>
                                                            </div>
                                                            </button>
                                                            <button className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold transition disabled:opacity-60 bg-[#e7f3ff] text-[#1877f2] hover:bg-[#d8ebff]">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus" aria-hidden="true">
                                                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                                <circle cx="9" cy="7" r="4"></circle>
                                                                <line x1="19" x2="19" y1="8" y2="14"></line>
                                                                <line x1="22" x2="16" y1="11" y2="11"></line>
                                                                </svg>
                                                                Follow
                                                                </button>
                                                                </div>
                                                                <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                                                                    <span className="rounded-full bg-slate-100 px-2 py-0.5">55 followers</span>
                                                                    </div>
                                                                    </div>
                                                                    <div className="rounded-xl border border-slate-200 p-2.5">
                                                                        <div className="flex items-center justify-between gap-2">
                                                                            <button type="button" className="flex min-w-0 items-center gap-2 rounded-lg px-1 py-1 text-left transition hover:bg-slate-50">
                                                                                <img alt="mohamed" className="h-10 w-10 rounded-full object-cover" src="https://pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev/linkedPosts/default-profile.png"/>
                                                                                <div className="min-w-0">
                                                                                    <p className="truncate text-sm font-bold text-slate-900 hover:underline">mohamed</p>
                                                                                    <p className="truncate text-xs text-slate-500">route user</p>
                                                                                    </div>
                                                                                    </button>
                                                                                    <button className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-bold transition disabled:opacity-60 bg-[#e7f3ff] text-[#1877f2] hover:bg-[#d8ebff]">
                                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user-plus" aria-hidden="true">
                                                                                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                                                                        <circle cx="9" cy="7" r="4"></circle>
                                                                                        <line x1="19" x2="19" y1="8" y2="14"></line>
                                                                                        <line x1="22" x2="16" y1="11" y2="11"></line>
                                                                                        </svg>
                                                                                        Follow
                                                                                        </button>
                                                                                        </div>
                                                                                        <div className="mt-2 flex items-center gap-2 text-[11px] font-semibold text-slate-500">
                                                                                            <span className="rounded-full bg-slate-100 px-2 py-0.5">38 followers</span>
                                                                                            </div>
                                                                                            </div>
                                                                                            </div>
   <button className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100">View more</button>
   </div>
   </aside>  

   </section>
   </>
  )
}
