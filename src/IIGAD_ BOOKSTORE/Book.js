import React from 'react'
import './Book.css';

const Book = () => {
  return (
    <main className="main">
  <section>
    <div className="container">
      <header>
        <div className="columns is-navigation is-marginless">
          <div className="column is-4 is-paddingless">
            <button className="goDark">
              <i className="fa fa-moon-o" aria-hidden="true" />
            </button>
          </div>
          <div className="column is-4 is-centered is-paddingless">
            <div className="nav-menu is-centered">
              <svg
                enableBackground="new 0 0 30 30"
                height="30px"
                version="1.1"
                viewBox="0 0 48 48"
                width="30px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="#DFDDFC"
              >
                <g id="Expanded">
                  <g>
                    <g>
                      <path d="M23,48.049c-0.147,0-0.294-0.032-0.43-0.097l-21-10C1.222,37.786,1,37.435,1,37.049v-31c0-0.343,0.176-0.662,0.466-0.846     C1.755,5.02,2.12,4.999,2.43,5.146L23,14.941l20.57-9.796c0.31-0.146,0.673-0.126,0.963,0.058C44.824,5.387,45,5.706,45,6.049v31     c0,0.386-0.222,0.737-0.57,0.903l-21,10C23.294,48.017,23.147,48.049,23,48.049z M3,36.417l20,9.524l20-9.524V7.633l-19.57,9.319     c-0.271,0.129-0.588,0.129-0.859,0L3,7.633V36.417z" />
                    </g>
                    <g>
                      <path d="M23,12.204L5.567,3.903C5.068,3.665,4.857,3.068,5.094,2.57c0.238-0.499,0.834-0.708,1.333-0.474L23,9.989l16.573-7.893     c0.5-0.234,1.095-0.025,1.333,0.474c0.237,0.498,0.026,1.095-0.473,1.333L23,12.204z" />
                    </g>
                    <g>
                      <rect height={31} width={2} x={22} y="16.049" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="column is-4 is-paddingless">
            <div className="nav-menu is-right">
              <div className="nav-item">
                <img src="https://1.bp.blogspot.com/-JtED2x_7XAw/UfhHlD-TXmI/AAAAAAAAD9Q/lugUa6id_9Y/s1600/-Teen-Vogue-by-Barrett-Sweger-2013-emma-watson-34892202-1063-1440.jpg" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="columns is-full is-left is-marginless">
        <div className="column is-12">
          <h4 className="is-bold has-fancy-border">
            <span className="is-pink">Feataured</span>
          </h4>
        </div>
      </div>
      <div className="columns has-horizontal-scroll is-marginless has-auto-scroll">
        <div className="is-scroll-wrapper">
          <div className="column is-4">
            <div className="card is-showcase is-blue">
              <div className="card-content">
                <div className="card-image" />
                <div className="card-description">
                  <h5> A Teaspoon of Earth and Sea </h5>
                  <h6> by: Dina Nayeri </h6>
                  <div className="stars">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <div className="avatars">
                    <img
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt="alt"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=73a9df4b7bd1b330db1e903e08575ec1"
                      alt="alt"
                    />
                    <img
                      src="https://pbs.twimg.com/profile_images/1047883546508058626/wNaJpr1O.jpg"
                      alt="alt"
                    />
                    <div className="avatar-plus">+ 24</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-showcase is-purple">
              <div className="card-content">
                <div className="card-image" />
                <div className="card-description">
                  <h5> The worls of abstract art </h5>
                  <h6> by: Emily robbins </h6>
                  <div className="stars is-three-star">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <div className="avatars">
                    <img
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt="alt"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=73a9df4b7bd1b330db1e903e08575ec1"
                      alt="alt"
                    />
                    <img
                      src="https://pbs.twimg.com/profile_images/1047883546508058626/wNaJpr1O.jpg"
                      alt="alt"
                    />
                    <div className="avatar-plus">+ 20</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-showcase is-pink">
              <div className="card-content">
                <div className="card-image" />
                <div className="card-description">
                  <h5> Me mam me dad me </h5>
                  <h6> by: malcolm duffy </h6>
                  <div className="stars is-four-star">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <div className="avatars">
                    <img
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt="alt"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=73a9df4b7bd1b330db1e903e08575ec1"
                      alt="alt"
                    />
                    <img
                      src="https://pbs.twimg.com/profile_images/1047883546508058626/wNaJpr1O.jpg"
                      alt="alt"
                    />
                    <div className="avatar-plus">+ 50</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-showcase is-green">
              <div className="card-content">
                <div className="card-image" />
                <div className="card-description">
                  <h5> before she was harriet </h5>
                  <h6> by: Lesa Cline-Ransome </h6>
                  <div className="stars">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <div className="avatars">
                    <img
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt="alt"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=73a9df4b7bd1b330db1e903e08575ec1"
                      alt="alt"
                    />
                    <img
                      src="https://pbs.twimg.com/profile_images/1047883546508058626/wNaJpr1O.jpg"
                      alt="alt"
                    />
                    <div className="avatar-plus">+ 14</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-showcase is-orange">
              <div className="card-content">
                <div className="card-image" />
                <div className="card-description">
                  <h5> The Martian </h5>
                  <h6> by: Andy Weir </h6>
                  <div className="stars">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <div className="avatars">
                    <img
                      src="https://randomuser.me/api/portraits/women/65.jpg"
                      alt="alt"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=73a9df4b7bd1b330db1e903e08575ec1"
                      alt="alt"
                    />
                    <img
                      src="https://pbs.twimg.com/profile_images/1047883546508058626/wNaJpr1O.jpg"
                      alt="alt"
                    />
                    <div className="avatar-plus">+ 44</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="columns is-full is-marginless">
        <div className="column is-8">
          <div className="columns is-full is-left is-multiline is-relative has-no-overflow">
            <h4 className="is-bold has-fancy-border">
              <span className="is-purple"> Browse </span>
            </h4>
            <div className="column is-4">
              <figure className="card is-recommended is-mario">
                <div className="card-content">
                  <div className="card-image" />
                  <div className="card-description">
                    <h5> Super Mario </h5>
                    <h6> by: Jeff Ryan </h6>
                    <div className="stars is-three-star">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
            <div className="column is-4">
              <div className="card is-recommended is-boy-erased">
                <div className="card-content">
                  <div className="card-image" />
                  <div className="card-description">
                    <h5> Boy Erased </h5>
                    <h6> by: Garrart Conley </h6>
                    <div className="stars is-four-star">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card is-recommended is-crow-vow">
                <div className="card-content">
                  <div className="card-image" />
                  <div className="card-description">
                    <h5> The Crows Vow </h5>
                    <h6> by: Susan Briscoe </h6>
                    <div className="stars is-four-star">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card is-recommended is-all-we-wanted">
                <div className="card-content">
                  <div className="card-image" />
                  <div className="card-description">
                    <h5> All we ever wanted </h5>
                    <h6> by: Emily Giffin</h6>
                    <div className="stars is-four-star">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card is-recommended is-million-miles">
                <div className="card-content">
                  <div className="card-image" />
                  <div className="card-description">
                    <h5> A million miles in a thousand yearz </h5>
                    <h6> by: Donald Miller </h6>
                    <div className="stars is-three-star">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-4">
              <div className="card is-recommended is-harry-potter">
                <div className="card-content">
                  <div className="card-image" />
                  <div className="card-image-reverse" />
                  <div className="card-description">
                    <h5> The prisoner of Azkaban </h5>
                    <h6> by: Jk Rowling </h6>
                    <div className="stars is-five-star">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column is-12 has-fixed-height">
              <button className="button has-margin-top is-semi-circle is-absolute is-bottom is-right is-orange">
                <i className="fa fa-arrow-right" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="column is-12">
            <h4 className="is-bold has-fancy-border">
              <span className="is-pink">Book Clubs</span>
            </h4>
            <ul className="list-items is-column is-relative has-no-overflow has-counter">
              <li>
                <a href="#">
                  <h5> Best Books Ever </h5>
                  <div className="is-list-item-menu">
                    <div className="is-list-item-menu-item">
                      <i className="fa fa-book" />
                      <span> 2050 </span>
                    </div>
                    <div className="is-list-item-menu-item">
                      <i className="fa fa-pencil" />
                      <span> 50 </span>
                    </div>
                    <div className="is-list-item-menu-item">
                      <i className="fa fa-user" />
                      <span> 300 </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <h5> Books turned into movies </h5>
                  <div className="is-list-item-menu">
                    <div className="is-list-item-menu-item">
                      <i className="fa fa-book" />
                      <span> 700 </span>
                    </div>
                    <div className="is-list-item-menu-item">
                      <i className="fa fa-pencil" />
                      <span> 1750 </span>
                    </div>
                    <div className="is-list-item-menu-item">
                      <i className="fa fa-user" />
                      <span> 200 </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <h5>Best Fiction</h5>
                  <div className="is-list-item-menu">
                    <div className="is-list-item-menu-item">
                      <i className="fa fa-book" />
                      <span> 250 </span>
                    </div>
                    <div className="is-list-item-menu-item">
                      <i className="fa fa-pencil" />
                      <span> 750 </span>
                    </div>
                    <div className="is-list-item-menu-item">
                      <i className="fa fa-user" />
                      <span> 3000 </span>
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="#">
                  <h5> What to read next </h5>
                  <div className="is-list-item-menu">
                    <div className="is-list-item-menu-item">
                      <i className="fa fa-book" />
                      <span> 250 </span>
                    </div>
                    <div className="is-list-item-menu-item">
                      <i className="fa fa-pencil" />
                      <span> 750 </span>
                    </div>
                    <div className="is-list-item-menu-item">
                      <i className="fa fa-user" />
                      <span> 3000 </span>
                    </div>
                  </div>
                </a>
              </li>
              <li className="is-list-item is-marginless has-button has-no-count">
                <button className="button is-semi-circle is-absolute is-bottom is-right is-purple">
                  <i className="fa fa-arrow-right" aria-hidden="true" />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="column is-12">
        <h4 className="is-bold has-fancy-border">
          <span className="is-green">Quotes</span>
        </h4>
      </div>
      <div className="columns has-horizontal-scroll is-marginless is-transparent">
        <div className="column is-4">
          <div className="card is-quote is-viscious-stance">
            <div className="card-content">
              <div className="card-bio">
                <div className="avatars">
                  <img
                    src="https://images.gr-assets.com/authors/1218295974p2/165858.jpg"
                    alt="alt"
                  />
                </div>
                <h6> Salvador Dalí </h6>
                <i className="fa fa-bookmark" />
              </div>
              <div className="card-description">
                <h5 className="is-quote">
                  {" "}
                  You have to systematically create confusion, it sets
                  creativity free. Everything that is contradictory creates life{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card is-quote is-slick-carbon">
            <div className="card-content">
              <div className="card-bio">
                <div className="avatars">
                  <img
                    src="https://images.gr-assets.com/authors/1379017377p2/3503.jpg"
                    alt="alt"
                  />
                </div>
                <h6> Maya Angelou </h6>
                <i className="fa fa-bookmark" />
              </div>
              <div className="card-description">
                <h5 className="is-quote">
                  {" "}
                  I've learned that people will forget what you said, people
                  will forget what you did, but people will never forget how you
                  made them feel
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card is-quote is-winter">
            <div className="card-content">
              <div className="card-bio">
                <div className="avatars">
                  <img
                    src="https://images.gr-assets.com/authors/1207771636p2/25241.jpg"
                    alt="alt"
                  />
                </div>
                <h6> Bob Marley </h6>
                <i className="fa fa-bookmark" />
              </div>
              <div className="card-description">
                <h5 className="is-quote">
                  {" "}
                  Me only have one ambition, y'know. I only have one thing I
                  really like to see happen. I like to see mankind live together
                  - black, white, Chinese, everyone - that's all.{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card is-quote is-purp">
            <div className="card-content">
              <div className="card-bio">
                <div className="avatars">
                  <img
                    src="https://images.gr-assets.com/authors/1198590177p2/43244.jpg"
                    alt="alt"
                  />
                </div>
                <h6> Groucho Marx </h6>
                <i className="fa fa-bookmark" />
              </div>
              <div className="card-description">
                <h5 className="is-quote">
                  {" "}
                  Outside of a dog, a book is man's best friend. Inside of a dog
                  it's too dark to read
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card is-quote is-greeny">
            <div className="card-content">
              <div className="card-bio">
                <div className="avatars">
                  <img
                    src="https://images.gr-assets.com/authors/1517863935p2/5144.jpg"
                    alt="alt"
                  />
                </div>
                <h6> James Joyce </h6>
                <i className="fa fa-bookmark" />
              </div>
              <div className="card-description">
                <h5 className="is-quote">
                  {" "}
                  Jesus was a bachelor and never lived with a woman. Surely
                  living with a woman is one of the most difficult things a man
                  has to do, and he never did it.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card is-quote is-redy">
            <div className="card-content">
              <div className="card-bio">
                <div className="avatars">
                  <img
                    src="https://images.gr-assets.com/authors/1393555704p2/12080.jpg"
                    alt="alt"
                  />
                </div>
                <h6> Ralph Waldo Emerson </h6>
                <i className="fa fa-bookmark" />
              </div>
              <div className="card-description">
                <h5 className="is-quote">
                  {" "}
                  I hate quotations. Tell me what you know.
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

  )
}

export default Book