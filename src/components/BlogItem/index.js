import './index.css'

const BlogItem = props => {
  const {eachitems} = props
  const {title, description, publishedDate} = eachitems
  return (
    <li className="listitems">
      <div>
        <h1 className="listheading">{title}</h1>
        <p className="listpara">{description}</p>
      </div>
      <p className="listpara">{publishedDate}</p>
    </li>
  )
}
export default BlogItem
