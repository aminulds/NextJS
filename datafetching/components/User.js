
function User({ user }) {
  return <>
    <p>{user.name}</p>
    <p>{user.email}</p>
    <p>{user.website}</p>
  </>;
}

export default User;
