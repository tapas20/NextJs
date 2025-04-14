// import { useEffect, useState } from "react";
import Link from "next/link";
import useSWR from "swr";
import Styles from "../../styles/Users.module.css"

const fetcher = (...arg) => fetch(...arg).then((res) => res.json());

const User = () => {
  // const [users, setUser] = useState([]);

  // console.log("User", users);

  // useEffect(() => {
  //   async function fetchUser() {
  //     const data = await fetch("https://dummyjson.com/users");
  //     setUser(await data.json());
  //   }
  //   fetchUser();
  // }, []);

  const { data, error } = useSWR("https://dummyjson.com/users/", fetcher);
  console.log("Data", data);

  if(error) {
    return <div>Error Happens</div>
  }

  if(!data) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>USER</h1>
      {/* {users && users.users && users.users.map((user) => <li>{<Link href={`users/${user.id}`} key={user.id}>{user.firstName}</Link>}</li> )} */}
      {data.users && data.users.map((user) => <div className={Styles["text-color"]}>{<Link href={`users/${user.id}`} key={user.id}>{user.firstName}</Link>}</div> )}

    </div>
  );
};

export default User;
