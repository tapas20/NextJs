import Image from "next/image";
// import MyImg from "../public/mr.jpg"

export default function Home() {
  return (
    <div>
      {/* <Image src={MyImg} alt="My Image" height={700} width={600}/> */}
      <Image src={"/mr.jpg"} alt="My Image" height={700} width={600}/>
    </div>
  );
}
