import AppFrame from "../HigherOrderComponent/AppFrame";
import Questionnaire from "../Component/Questionnaire";


const NewPageSurvey = () => {
    return <div>
        Welcome 
        <Questionnaire/>
    </div>

}
export default AppFrame(NewPageSurvey);