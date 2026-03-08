import axios from "axios"
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast, { Toaster } from 'react-hot-toast';

import { Modal,
  ModalContent,
   ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
 } from "@heroui/react";
import { useContext, useRef, useState } from "react";
import PostCard from "../PostCard/PostCard";
import { authContext } from "../../Context/AuthContext";


export default function Feed() {

const {isOpen, onOpen, onOpenChange} = useDisclosure();

const [isUploaded, setIsUploaded]  = useState(false)

 const textInput = useRef(null);
 const imageInput = useRef(null);

 function handleImagePreview(e) {
  console.log("change", e.target.files[0]);
  const path = URL.createObjectURL(e.target.files[0])
  setIsUploaded(path)
 }

 function handleRemoveImage() {
  setIsUploaded(false)
  imageInput.current.value =""
 }

 function prepareData(){
  const formData = new FormData()

  if(textInput.current.value){
     formData.append("body", textInput.current.value);
  }

  if (imageInput.current.files[0]) {
     formData.append("image", imageInput.current.files[0])
  }
 
  return formData
 }

function addNewPost() {
   return axios.post(`https://route-posts.routemisr.com/posts`,prepareData(),{
     headers:{
         Authorization: `Bearer ${localStorage.getItem("token")}`
    }
    })
  
   

  }


   const query = useQueryClient()

   const {isPending, isError, isSuccess, mutate} = useMutation ({
    mutationFn: addNewPost,
    onSuccess: ()=>{

      toast.success("post created succesfully 🎉",
  {
  duration: 4000,
  position: 'top-center',
  className :"text-green-700"
  }
 )

      setIsUploaded (null);
      query.invalidateQueries({
        queryKey:["getPosts"]
        
      })
      
if (textInput.current) textInput.current.value = "";
if (imageInput.current) imageInput.current.value = "";


 

//  onOpenChange(false)
      
    },
    onError: (err)=> {
     toast.error("failed to creat post")
    },
    // onSettled: ()=>{}
  })

  


const { data, isLoading } = useQuery({
    queryKey: ["getPosts"], 
  });


const allPosts = data?.data?.data?.posts || [];


const authData = useContext(authContext);


const logedUserId = authData?.user?._id || authData?.userId;

const myOnlyPosts = allPosts.filter(post => {
    return post?.user?._id === logedUserId;
});
   



// const userId = allPosts.user._id
    // console.log("postsinfo", postInfo);
    // console.log("Logged User ID:", logedUserId);
// console.log("Post Author ID:", userId);


  return (
    <div>
          <section className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-2 shadow-sm xl:hidden">
            <div className="grid grid-cols-2 gap-2">
                <button className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition bg-[#e7f3ff] text-[#1877f2]"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-newspaper" aria-hidden="true">
                <path d="M15 18h-5"></path>
                <path d="M18 14h-8"></path>
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path>
                <rect width="8" height="4" x="10" y="6" rx="1"></rect>
                </svg>
                Feed
                </button>
                <button className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition bg-slate-50 text-slate-700 hover:bg-slate-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkles" aria-hidden="true">
                    <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z">
                        </path><path d="M20 2v4"></path>
                        <path d="M22 4h-4"></path>
                        <circle cx="4" cy="20" r="2"></circle>
                        </svg>
                        My Posts
                        </button>
                        <button className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition bg-slate-50 text-slate-700 hover:bg-slate-100">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-earth" aria-hidden="true">
                            <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                            <circle cx="12" cy="12" r="10"></circle>
                            </svg>
                            Community
                            </button>
                            <button className="flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-bold transition bg-slate-50 text-slate-700 hover:bg-slate-100">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bookmark" aria-hidden="true">
                                <path d="M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z"></path>
                                </svg>
                                Saved
                                </button>
                                </div>
                                </div>
                                <div className="space-y-3 xl:hidden">
                                    <button type="button" className="inline-flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left shadow-sm">
                                        <span className="inline-flex items-center gap-2 text-sm font-extrabold text-slate-900">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users text-[#1877f2]" aria-hidden="true">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                            <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            </svg>
                                            Suggested Friends</span>
                                            <span className="inline-flex items-center gap-2">
                                                <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-bold text-slate-600">
                                                    5</span>
                                                    <span className="text-xs font-bold text-[#1877f2]">
                                                        Show</span>
                                                        </span>
                                                        </button>
                                                        </div>
                                                     
                                                         <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                                                            <div className="mb-3 flex items-start gap-3">
                                                                <img alt="hadeer" className="h-11 w-11 rounded-full object-cover" src=""/>
                                                                <div className="flex-1"><p className="text-base font-extrabold text-slate-900">
                                                                    hadeer</p>
                                                                    <div className="mt-1 inline-flex items-center gap-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-700">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-earth" aria-hidden="true">
                                                                        <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"></path>
                                                                        <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"></path>
                                                                        <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path>
                                                                        <circle cx="12" cy="12" r="10"></circle>
                                                                        </svg>
                                                                        <select className="bg-transparent outline-none">
                                                                            <option value="public">Public</option>
                                                                            <option value="following">Followers</option>
                                                                            <option value="only_me">Only me</option>
                                                                            </select>
                                                                            </div>
                                                                            </div>
                                                                            </div>

                                                                             
                                                                            <div className="relative">
                                                                                <textarea rows="4" placeholder="What's on your mind, hadeer?" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-[17px] leading-relaxed text-slate-800 outline-none transition focus:border-[#1877f2] focus:bg-white">
                                                                                    </textarea>
                                                                                    </div>
                                                                                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3">
                                                                                        <div className="relative flex items-center gap-2">
                                                                                            
                                                                                                <button type="button" className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100">
                                                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-smile text-amber-500" aria-hidden="true">
                                                                                                    <circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                                                                                                    <line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line>
                                                                                                    </svg>
                                                                                                    <span className="hidden sm:inline">Feeling/activity</span>
                                                                                                    </button>
                                                                                                    </div>
                                                                                                    <div className="flex items-center gap-3">
                                                                                                        <button type="button" onClick={onOpen} disabled="" className="flex items-center gap-2 rounded-lg bg-[#1877f2] px-5 py-2 text-sm font-extrabold text-white shadow-sm transition-colors hover:bg-[#166fe5] disabled:opacity-60">
                                                                                                                Post
  
                                                                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send" aria-hidden="true">
                                                                                                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                                                                                   <path d="m21.854 2.147-10.94 10.939"></path>
                                                                                                     </svg>
                                                                                                               </button>

                                                                                                             
                </div>
                                                                                       </div>
                                                                                
                                                            </div>
                                                       

       


            
      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center text-slate-500 shadow-sm">
       {isLoading ? (
        <p>Loading ... </p>
     ) : myOnlyPosts.length > 0 ? (
        myOnlyPosts.map((post) => <PostCard key={post._id} postInfo={post} />)
     ) : (
        <p className=" font-bold text-gray-400 text-2xl">No Posts Yet </p>
     )}
          </div>
            
          </div>
        </section> 
         <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Creat your post</ModalHeader>
              <ModalBody>
                <textarea 
                ref={textInput}
                rows="4"
                 placeholder="What's on your mind, hadeer?"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-[17px] leading-relaxed text-slate-800 outline-none transition focus:border-[#1877f2] focus:bg-white">
                      </textarea>
                {isUploaded && <div className=" relative">
                  <img 
                className="object-cover rounded-xl"
                src={isUploaded}
                alt="post" />
                <IoIosCloseCircleOutline onClick={handleRemoveImage} className=" absolute top-0.5 right-1 text-red-700 cursor-pointer text-2xl" />
                </div>}
                
              </ModalBody>
              <ModalFooter>
                <label className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100">
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-image text-emerald-600" aria-hidden="true">
                      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
                      <circle cx="9" cy="9" r="2"></circle>
                      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
                      </svg><span className="hidden sm:inline">Photo/video</span>
                      <input
                      ref={imageInput}
                       onChange={handleImagePreview} accept="image/*" className="hidden" type="file"/>
                    </label>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <button onClick={()=>{
                  onOpenChange()
                  mutate()
                }} 
                disabled={isPending}
                className="flex items-center gap-2 rounded-lg bg-[#1877f2] px-5 py-2 text-sm font-extrabold text-white shadow-sm transition-colors hover:bg-[#166fe5] disabled:opacity-60">
                    Post
  
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-send" aria-hidden="true">
                                                                                                    <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                                                                                                   <path d="m21.854 2.147-10.94 10.939"></path>
                                                                                                     </svg>


                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  )
}
