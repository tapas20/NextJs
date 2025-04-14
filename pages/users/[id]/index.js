import { useState, useEffect } from "react";
import { useRouter } from "next/router";


const UserDetails = () => {
    const [userInfo, setUserInfo] = useState("");
    const router = useRouter();
    useEffect(() => {
      const id = router.query.id;
      async function getUserbyId() {
        const data = await fetch(`https://dummyjson.com/users/${id}`);
        setUserInfo(await data.json());
      }
      getUserbyId(id);
    }, [router.query.id]);


  return (
    <>
      <div>UserName: {userInfo?.firstName}</div>
      <div>UserEmail: {userInfo?.email}</div>
    </>
  );
};

export default UserDetails;
