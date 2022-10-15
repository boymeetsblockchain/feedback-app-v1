import Card from "../shared/Card"
import Button from "../shared/Button"
import RatingSelect from "./RatingSelect"
import {useState,useContext,useEffect} from 'react'
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
  const{addFeedback,feedbackEdit,updateFeedback}= useContext(FeedbackContext)
  const[text,setText] = useState('')
  const[btn,setBtn] = useState(true)
  const[rating,setRating] = useState(10)
  const[message,setMessage] = useState('')
  
  useEffect(()=>{
     if(feedbackEdit.edit === true){
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
      setBtn(false)
     }
  },[feedbackEdit])
  const  HandleTextChange =(e)=>{
    if(text=== ''){
      setBtn(true)
      setMessage(null)
    }else if (text !=='' && text.trim().length < 10){
      setBtn(true)
      setMessage('please add atleast 10 characters')
    } else{
      setBtn(false)
      setMessage(null)
      setRating(10)
    }

   setText(e.target.value)

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    if(text.trim().length > 10){
      const newFeedBack ={
        text,
        rating
      }
      if(feedbackEdit.edit === true){
        updateFeedback(feedbackEdit.item.id, newFeedBack)
      }
      addFeedback(newFeedBack)
      setText('')
      setBtn(true)
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us</h2>
        <RatingSelect select={setRating} selected={rating}/>
        <div className="input-group">
          <input type="text" placeholder="write a review " 
           value={text} onChange={HandleTextChange}/>
           <Button type='submit' isDisabled={btn}>Send</Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm