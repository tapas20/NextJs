import { useRouter } from "next/router";

const Page = () => {
  const {query} = useRouter();
  console.log(query.username);

  return (
    <div>
      <h1>Settings page for {query.username}</h1>
    </div>
  );
};

export default Page;
