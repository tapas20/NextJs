import { useRouter } from "next/router";

const Index = () => {
  const {query} = useRouter();
  console.log(query.username);

  return (
    <div>
      <h1>Indexq page for {query.username}</h1>
    </div>
  );
};

export default Index;
