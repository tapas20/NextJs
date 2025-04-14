const ServerSideRendering = (props) => {
  console.log("Data", props);
  return (
    <div>
      {props.data.users.map((user) => (
        <li key={user.id}>{user.firstName}</li>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => { // Fetching data on server side(You have to write the exact function name)
  // console.log("Server Side Rendering Data");
  const data = await (await fetch("https://dummyjson.com/users/")).json();
  return {
    props: {
      data,
    },
  };
};

export default ServerSideRendering;
