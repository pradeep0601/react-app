const Book = (props) => {
    const clickHandler = (title) => {
        alert(`${title} got added into the cart!!`);
    }
  const {img, title, author} = props; 
  return (
    <article className = "book">
      <img src = {img} alt = ''/>
      <h4>{title}</h4>
      <h5>{author}</h5>
      <button className = 'add-to-cart-btn' onClick = {()=>clickHandler(title)}>Add To Cart</button>
    </article>
  );
}

export default Book;