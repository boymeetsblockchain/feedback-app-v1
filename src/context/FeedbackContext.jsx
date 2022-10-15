import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";
const FeedbackContext = createContext();
export const FeedbackProvider = ({children})=>{
 const [feedback,setFeedback]= useState(FeedbackData)
 const deleteFeedback =(id)=>{
  if(window.confirm("Are you sure you want to delete this feedback?")){
    setFeedback(feedback.filter((item)=> item.id !== id))
}
}
const addFeedback =(newFeedback)=>{
  newFeedback.id= Math.floor(Math.random() * 100000000)
  setFeedback([newFeedback, ...feedback])
}
const [feedbackEdit , setFeedbackEdit]= useState({
  item:{},
  edit:false
})
 const editFeedback =(item)=>{
  setFeedbackEdit({
   item,
   edit:true
  })
 }
 const updateFeedback =(id, updItem)=>{
  setFeedback(feedback.map((item)=>(item.id===id ? {...updItem,...updItem } : item)))
 }
  return <FeedbackContext.Provider value={{
    feedback,
    feedbackEdit,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback,
  }}>write a review 
Send
3 Reviews
Average Rating:9
10

    {children}
  </FeedbackContext.Provider>
}
export default FeedbackContext