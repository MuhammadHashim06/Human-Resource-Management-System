import User from "./User";
// import Sidebar from "./Admin";
import Admin from "./Adminnav";
export default function Dasboard(props) {
  console.log(props);
  // const { user } = props.location.state;
  // const role = props.ROLE;
  const user=JSON.parse(sessionStorage.getItem('user'))
  return (
    <div>
      {user.ROLE === "Admin" && <Admin data={user} />}
      {user.ROLE === "Employee" && <User data={user} />}
    </div>
  );
}
