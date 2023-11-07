import React from "react";
import "./Home.css";
import Category from "./Category";

function Home() {
  return (
    <div className="home-page">
      <div className="container">
        <img
          className="home-image"
          src="https://m.media-amazon.com/images/I/71cvRGs+pPL._SX3000_.jpg"
          alt=""
        />
        <div className="home-row">
          <Category
            title={"Discover Women's Trends"}
            image={
              "https://ke.jumia.is/cms/2023/BlackFriday/Userneeds/Fashion/WonsFashion/Categories/Dress.png"
            }
            category={"womens-dresses"}
          />
          <Category
            title={"Top Women's Shoes"}
            image={
              "https://ke.jumia.is/cms/2023/BlackFriday/Userneeds/Fashion/WonsFashion/Categories/Shoes.png"
            }
            category={"womens-shoes"}
          />
          <Category
            title={"Women's Watches"}
            image={
              "https://ke.jumia.is/cms/2023/BlackFriday/Userneeds/Fashion/WonsFashion/Categories/Watch.png"
            }
            category={"womens-watches"}
          />
          <Category
            title={"Women's Jewelry"}
            image={
              "https://ke.jumia.is/cms/2023/BlackFriday/Userneeds/Fashion/WonsFashion/Categories/Jewelry.png"
            }
            category={"womens-jewellery"}
          />
        </div>
        <div className="home-row">
          <Category
            title={"Trending Men's Shirts"}
            image={
              "https://ke.jumia.is/cms/2023/BlackFriday/Userneeds/Fashion/MensFashion/Categories/Shirts_.jpg"
            }
            category={"mens-shirts"}
          />
          <Category
            title={"Men's Fashion Sneakers"}
            image={
              "https://ke.jumia.is/cms/2023/BlackFriday/Userneeds/Fashion/MensFashion/Categories/Sneakers.jpg"
            }
            category={"mens-shoes"}
          />
          <Category
            title={"Watches for Men"}
            image={
              "https://ke.jumia.is/cms/2023/BlackFriday/Userneeds/Fashion/MensFashion/Categories/Watch.jpg"
            }
            category={"mens-watches"}
          />
          <Category
            title={"Fragrances"}
            image={
              "https://ke.jumia.is/cms/2023/BlackFriday/Userneeds/Beauty/Categories/MensPerfumes.png"
            }
            category={"fragrances"}
          />
        </div>

        <div className="home-row">
          <Category
            title={"Laptops for every need"}
            image={
              "https://images.unsplash.com/photo-1629757509637-7c99379d6d26?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8"
            }
            category={"laptops"}
          />
          <Category
            title={"Smart Phones Top Deals"}
            image={
              "https://images.unsplash.com/photo-1574678720375-897c87118486?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnRwaG9uZXN8ZW58MHx8MHx8fDA%3D"
            }
            category={"smartphones"}
          />
        </div>
        <div className="home-row">
          <Category
            title={"Sunglasses"}
            image={
              "https://images.unsplash.com/photo-1559070081-648fb00b2ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D"
            }
            category={"sunglasses"}
          />
          <Category
            title={"Skin Care"}
            image={
              "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            category={"skincare"}
          />
          <Category
            title={"Tops"}
            image={
              "https://plus.unsplash.com/premium_photo-1671198905435-20f8d166efb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D"
            }
            category={"tops"}
          />
        </div>
        <div className="home-row">
          <Category
            title={"Home Decor"}
            image={
              "https://m.media-amazon.com/images/I/918GJmTDb2L._AC_UL320_.jpg"
            }
            category={"home-decoration"}
          />
          <Category
            title={"Lighting"}
            image={
              "https://m.media-amazon.com/images/I/71fwzuuUFNL._AC_UL320_.jpg"
            }
            category={"lighting"}
          />
          <Category
            title={"Furniture"}
            image={
              "https://m.media-amazon.com/images/I/71BduDhj56L._AC_UL320_.jpg"
            }
            category={"furniture"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
