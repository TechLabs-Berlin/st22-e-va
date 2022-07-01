import AppFrame from "../HigherOrderComponent/AppFrame";
import NewForm from "../Component/NewForm";

const FirstPage = () => {
    return <div>
    <NewForm/>
    </div>

}
export default AppFrame(FirstPage);