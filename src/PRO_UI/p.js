import React from 'react'
import './P.css'

const p = () => {
  return (
    <>
  <div className="container">
    <div className="images">
      <img src="http://mistillas.cl/wp-content/uploads/2018/04/Nike-Epic-React-Flyknit-%E2%80%9CPearl-Pink%E2%80%9D-01.jpg" />
    </div>
    <div className="slideshow-buttons">
      <div className="one" />
      <div className="two" />
      <div className="three" />
      <div className="four" />
    </div>
    <p className="pick">choose size</p>
    <div className="sizes">
      <div className="size">5</div>
      <div className="size">6</div>
      <div className="size">7</div>
      <div className="size">8</div>
      <div className="size">9</div>
      <div className="size">10</div>
      <div className="size">11</div>
      <div className="size">12</div>
    </div>
    <div className="product">
      <p>Women's Running Shoe</p>
      <h1>Nike Epic React Flyknit</h1>
      <h2>$150</h2>
      <p className="desc">
        The Nike Epic React Flyknit foam cushioning is responsive yet
        light-weight, durable yet soft. This creates a sensation that not only
        enhances the feeling of moving forward, but makes running feel fun, too.
      </p>
      <div className="buttons">
        <button className="add">Add to Cart</button>
        <button className="like">
          <span>♥</span>
        </button>
      </div>
    </div>
  </div>
  <footer>
    <p>
      made by <a href="https://codepen.io/juliepark"> julie</a> ♡
    </p>
  </footer>
</>

  )
}

export default p