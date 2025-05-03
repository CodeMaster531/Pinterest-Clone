import './comments.css'

import { useQuery } from '@tanstack/react-query'
import apiRequest from '../../utils/apiRequest.js'
import Comment from './comment.jsx'
import CommentsForm from './commentsForm.jsx'


const Comments = ({id}) => {
  
  const { isPending, error, data } = useQuery({
    queryKey: ["comments", id],
    queryFn: () => apiRequest.get(`/comments/${id}`).then((res) => res.data),
  });

  if (isPending) return "Loading...";
  if (error) return "Something went wrong" + error.message;
  console.log(data)

  return (
    <div className='comments'>
      <div className="commentList">
        <span className='commentCount'>
          {data.length===0 ? "No Comments" : data.length + " Comments"}
        </span>
        {/* Comments */}
        {data.map((comment) => (
          <Comment  key={comment._id} comment={comment}/>
        ))}
    </div>
    <CommentsForm id={id}/>
    </div>
  )
}

export default Comments