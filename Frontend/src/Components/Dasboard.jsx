import User from "./User";
// import Sidebar from "./Admin";
import Admin from "./Adminnav";
export default function Dasboard(props) {
  const role = props.user.role;
  return (
    <div>
      {role === "Admin" && <Admin />}
      {role === "User" && <User />}
    </div>
  );
}
