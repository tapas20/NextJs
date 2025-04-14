const Users = (props) => {
  return (
    <>
      <div>Static Side Generation</div>
      <div>
        {props.data.users.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users/")).json();
  return {
    props: {
      data,
    },
  };
};

export default Users;
