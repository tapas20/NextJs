import { useRouter } from "next/router";

const UserName = () => {
  const {query} = useRouter();
  console.log("Router", query.name);

  return (
    <div>
      <h1>This is [{query.name}] route</h1>
    </div>
  );
};

export default UserName;
