import Image from "next/image";
// import MyImg from "../public/mr.jpg"
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const session = useSession();

  if (session.data === null) {
    return <button onClick={signIn}>Login</button>;
  }

  console.log(session);

  return (
    <div>
      {/* <Image src={MyImg} alt="My Image" height={700} width={600}/> */}
      {/* <Image src={"/mr.jpg"} alt="My Image" height={700} width={600}/> */}

      <h1>Hello {session?.data?.user?.name}</h1>
      <button onClick={signOut}>LogOut</button>
    </div>
  );
}
