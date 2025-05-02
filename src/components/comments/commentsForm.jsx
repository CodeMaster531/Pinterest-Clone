import EmojiPicker from "emoji-picker-react"
import { useState } from "react"
const CommentsForm = () => {
    const [open, setOpen] = useState(false)
  return (
    <form className='commentForm'>
      <input type="text" placeholder='Add a Comment' />
      <div className="emoji">
        <div onClick={()=>setOpen(prev=>(!prev))}>💀</div>
        {open && <div className='emojiPicker'>
        <EmojiPicker/>
        </div>}
      </div>
    </form>
  )
}

export default CommentsForm