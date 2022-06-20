import AppFrame from "../HigherOrderComponent/AppFrame";
import Form from "../Component/Form";



const NewPageSurvey = () => {
    return <div>
        Welcome to E-va App
        <Form/>
        
    
    </div>

}
export default AppFrame(NewPageSurvey);