import AppFrame from "../HigherOrderComponent/AppFrame";
import SignUp from "../Component/SignUp";

const UserReg = () => {
  return <div>
      <SignUp/>
  </div>

}

export default AppFrame(UserReg);