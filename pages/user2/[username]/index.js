import { useRouter } from "next/router";
import { useEffect } from "react";

// const useAuth = () => ({ user: null, loading: false });
const useAuth = () => ({ user: { name: "Tapas" }, loading: false });

const Index = () => {
  const router = useRouter();
  const user = useAuth();

  useEffect(() => {
    if (user.user == null) {
      router.replace("/");
    }
  }, []);

  console.log(router.query.username);

  return (
    <div>
      <h1>Index page for {router.query.username}</h1>
      {/* <button onClick={e => router.push(`/user2/${router.query.username}/setting`)}>Click Me</button> */}
      <button
        onClick={(e) =>
          router.push({
            pathname: "/user2/[username]/setting",
            query: { username: router.query.username },
          })
        }
      >
        Click Me
      </button>
      <hr />
      <button onClick={(e) => router.replace("/")}>GO Home</button>{" "}
      {/* router.replace is used when you don't let the user go back to its
      previous page. */}
      <button onClick={(e) => router.reload()}>Reload</button>
    </div>
  );
};

export default Index;
