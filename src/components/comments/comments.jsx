import './comments.css'
import Image from '../image/image.jsx'
import EmojiPicker from 'emoji-picker-react'
import { useState } from 'react'

const Comments = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='comments'>
      <div className="commentList">
        <span className='commentCount'>
          4 comments
        </span>
        {/* Comments */}
        <div className="comment">
          <Image path='./general/noAvatar.png'/>
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className='commentTime'>2 days ago</span>
        </div>
      </div>
        <div className="comment">
          <Image path='./general/noAvatar.png'/>
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className='commentTime'>2 days ago</span>
        </div>
      </div>
        <div className="comment">
          <Image path='./general/noAvatar.png'/>
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className='commentTime'>2 days ago</span>
        </div>
      </div>
        <div className="comment">
          <Image path='./general/noAvatar.png'/>
          <div className="commentContent">
            <span className='commentUsername'>John Doe</span>
            <p className='commentText'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span className='commentTime'>2 days ago</span>
        </div>
      </div>
    </div>
    <form className='commentForm'>
      <input type="text" placeholder='Add a Comment' />
      <div className="emoji">
        <div onClick={()=>setOpen(prev=>(!prev))}>💀</div>
        {open && <div className='emojiPicker'>
        <EmojiPicker/>
        </div>}
      </div>
    </form>
    </div>
  )
}

export default Comments