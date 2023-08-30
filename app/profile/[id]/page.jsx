
'use client'
import Profile from '@components/Profile'
import { useSession } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
const UserProfile = ({params}) => {
    const [myPosts, setMyPosts] = useState([])
    const router = useRouter();
  const searchParams = useSearchParams();
    
    const userName = searchParams.get("name");

    // const handleEdit =  (post)=>{
    //   router.push(`update-prompt?id=${post._id}`)
    // }
    // const handleDelete = async (post)=>{
    //   const hasConfirmed = confirm("Are you sure you want to delete this prompt?")
      
    //   if (hasConfirmed){
    //     try {
    //       await fetch(`/api/prompt/${post._id.toString()}`,{
    //         method:'DELETE'
    //       });
    //       const filteredPosts = myPosts.filter((p)=>p._id!==post._id);
    //       setMyPosts(filteredPosts);

    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }

    // }

    const fetchPosts = async ()=>{
        const response = await fetch(`/api/users/${params?.id}/posts`);
        const data = await response.json()
        console.log(data,"ksjdksj")
        setMyPosts(data)
    }

    useEffect(()=>{
        console.log("skdsjj")
       if (params?.id){ 
        fetchPosts();
        console.log("second");
       }
    },[params?.id])
    
  return (
    
    <Profile
    name={userName.charAt(0).toUpperCase() + userName.slice(1)}
    desc = "Welcom to your full Profile page"
    data = {myPosts}
    // handleEdit = {handleEdit}
    // handleDelete = {handleDelete}
    />
  )
}

export default UserProfile;