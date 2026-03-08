import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate, useParams } from "react-router";


export default function UpdatePost() {

    const { id } = useParams(); 
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [text, setText] = useState("");
  const [preview, setPreview] = useState(null);

  const [content, setContent] = useState("");
  const [imagePreview, setImagePreview] = useState(null);


  const [selectedFile, setSelectedFile] = useState(null); 
  const imageInput = useRef()




  function editPosts(){
    return axios.get(`https://route-posts.routemisr.com/posts/${id}`,{
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
  }

 
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getSinglePost", id],
    queryFn: editPosts ,
   
    onSuccess: (res) => {
      setText(res.data.post.body);
      if (res.data.data.post.image) setPreview(res.data.post.image);
    }
  });

  function handleEditPost(formData) {
    return axios.put(`https://route-posts.routemisr.com/posts/${id}`, formData, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
  }

  const { mutate, isPending } = useMutation({
    mutationFn: handleEditPost,
    onSuccess: () => {
      toast.success("Post updated!");
      queryClient.invalidateQueries(["getPosts"]); 
      navigate("/home/posts"); 

    },
    onError: (err) =>{
toast.error("Update failed")
console.log(err);
console.error("API Error Response:", err.response?.data)

    } 
  });

  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("body", content);
    if (selectedFile) {
      formData.append("image", selectedFile);
    }
    mutate(formData);
  };


  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const path = URL.createObjectURL(file);
      setImagePreview(path); 
    }
  }

  
  function handleRemoveImage() {
    setImagePreview(null);
    setSelectedFile(null);
    if (imageInput.current) imageInput.current.value = "";
  }

useEffect(() => {
  const postData = data?.data?.data?.post; 

  if (postData) {

    if (!content) {
      setContent(postData.body || "");
    }


    if (!selectedFile && !imagePreview) {
      setImagePreview(postData.image || null);
    }
  }
}, [data]); 

  if (isLoading) return <div className="text-center p-10">Loading Post Data...</div>;
  if (isError) return <div className="p-10 text-center">Error loading post</div>;

  
  return (
   <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-5">Edit Your Post</h2>
      
      <form onSubmit={handleUpdate} className="space-y-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-4 border rounded-xl bg-slate-50 focus:bg-white outline-blue-500"
          rows="5"
        />

        {imagePreview && (
          <div className="relative group">
            <img 
              src={imagePreview} 
              alt="Preview" 
              className="w-full h-64 object-cover rounded-xl border border-slate-200" 
            />
            <button
              type="button"
              onClick={handleRemoveImage}
              className="absolute top-2 right-2 bg-white rounded-full text-red-600 hover:text-red-800 transition-colors shadow-md"
            >
              <IoIosCloseCircleOutline size={32} />
            </button>
          </div>
        )}
        

        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <label className="flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600">
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
              <circle cx="9" cy="9" r="2"></circle>
              <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path>
            </svg>
            <span>{imagePreview ? "Change Photo" : "Add Photo"}</span>
            <input
              ref={imageInput}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
              type="file"
            />
          </label>
          <button 
            type="button" 
            onClick={() => navigate(-1)} 
            className="px-6 py-2 bg-gray-200 rounded-lg"
          >
            Cancel
          </button>
          <button 
            type="submit" 
            disabled={isPending}
            className="px-6 py-2 bg-[#1877f2] text-white rounded-lg font-bold"
          >
            {isPending ? "Updating..." : "Save Changes"}
          </button>
        </div>
      </form>
    </div>
  )
}
