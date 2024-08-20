import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../context/CartContext";

function Navbar() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const categories = ["mobiles","fashione","laptops","electronics","jewelery","home","books",'beauty',"watches" ];
  const {totalPrice,totalItems} = useContext(cartContext);


  const onClickHanlder = (type) => {
    navigate("/home/products", { state: { type: type } });
    setSearchQuery("")
  };

  useEffect(()=>{
  
  },[searchQuery])

  return (
    <>
      <div
        data-theme="dark"
        className="navbar  sticky top-0 z-[50] flex justify-between "
      >
        <div className=" ">
        {/* <div className=" pr-4 md:hidden">
    <button className="btn btn-ghost hover:bg-primary  btn-circle ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div> */}

  <div className="drawer pr-4 md:hidden">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-ghost hover:bg-primary  btn-circle drawer-button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </label>
  </div>
  <div  className="drawer-side z-[70]">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-[70%] sm:w-80 p-4">
      {/* Sidebar content here */}
      <li className=" "><h1 className=" text-center text-white inline   font-bold  text-2xl leading-9 tracking-tight text-gray-900 ">
            <Link to="/home">HOMEBOX</Link>
          </h1></li>
     
      {categories.map((val,idx)=>(<li key={idx} onClick={() => onClickHanlder(val)}>
        
         <a className="text-white capitalize text-xl">{val}</a> 
        </li>))}
      {/* <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li> */}
    </ul>
  </div>
</div>

          <h1 className="hidden md:block text-center text-white inline   font-bold  ls:text-xl sm:text-2xl pr-2 sm:pr-4  leading-9 tracking-tight text-gray-900">
            <Link to="/home">HOMEBOX</Link>
          </h1>
        </div>

        <div className=" form-control relative ">
          <input
            value={searchQuery}
            type="text"
            placeholder="Search"
            className=" input input-bordered input-primary  w-[8rem] ls:w-[12rem]   md:w-96"
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div data-theme="light"  className={` absolute left-[0] right-[0]  rounded-box top-16 ${!searchQuery&&'hidden'} `} >
            <ul className=" w-[250px] sm:w-[350px] menu p-0">
              {searchQuery&&categories.filter((cat)=>cat.includes(searchQuery.toLowerCase())).map((val,idx)=><li className="" key={idx} onClick={() => {onClickHanlder(val);}}> <Link>{val}</Link></li>)}
              
            </ul>
          </div>
        {/* menu  dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow */}
        </div>

        <div className="flex-none pl-1">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost hover:bg-primary  btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">{totalItems }</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">{totalItems} Items</span>
                <span className="text-info">Subtotal: ₹{totalPrice}</span>
                <div className="card-actions">
                <Link className="w-full" to={"/cart"}>
                  <button  className=" w-full btn btn-primary btn-block">
                    View cart 
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost hover:bg-primary btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  className="w-full"
                  alt="profile image "
                  src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
                />
              </div>
            </div>
            {/* <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>

      <div className=" hidden md:flex  bg-neutral justify-between px-2 xl:text-xl ">
        {categories.map((val,idx)=>(<button key={idx}
          className="btn btn-sm btn-neutral my-1  2xl:text-xl  capitalize hover:border-base-100"
          onClick={() => onClickHanlder(val)}
        >
          {val}
        </button>))}
      </div>
    </>
  );
}

export default Navbar;

// const home = [
//   {
//     "id": 1,
//     "title": "Nonstick Cookware Set",
//     "price": 89.99,
//     "description": "12-piece nonstick cookware set, perfect for all your cooking needs.",
//     "category": "home",
//     "image": " https://m.media-amazon.com/images/I/61w2eRTCulL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 250
//     }
//   },
//   {
//     "id": 2,
//     "title": "Stainless Steel Knife Set",
//     "price": 59.99,
//     "description": "15-piece stainless steel knife set with wooden block, includes all essential knives.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/21HPSnzHAjL._AC_SR250,250_QL65_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 200
//     }
//   },
//   {
//     "id": 3,
//     "title": "Vacuum Cleaner",
//     "price": 129.99,
//     "description": "Powerful vacuum cleaner with HEPA filter, suitable for all floor types.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/71E6UiyfbfL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 180
//     }
//   },
//   {
//     "id": 4,
//     "title": "Air Fryer",
//     "price": 99.99,
//     "description": "4-quart air fryer with rapid air circulation, cooks food with little to no oil.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/61d8gx3IngL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 300
//     }
//   },
//   {
//     "id": 5,
//     "title": "Coffee Maker",
//     "price": 49.99,
//     "description": "Single-serve coffee maker, compatible with K-Cup pods and ground coffee.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/41kOu-XFeFL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 220
//     }
//   },
//   {
//     "id": 6,
//     "title": "Blender",
//     "price": 39.99,
//     "description": "High-speed blender with 1000-watt motor, perfect for smoothies and soups.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/41TQSn6GqtL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 150
//     }
//   },
//   {
//     "id": 7,
//     "title": "Toaster Oven",
//     "price": 69.99,
//     "description": "6-slice toaster oven with convection, bakes, broils, and toasts.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/41pwLzif59L._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 130
//     }
//   },
//   {
//     "id": 8,
//     "title": "Slow Cooker",
//     "price": 49.99,
//     "description": "6-quart slow cooker with digital timer, ideal for easy and convenient meals.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/71hhQA1kthL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 170
//     }
//   },
//   {
//     "id": 9,
//     "title": "Electric Kettle",
//     "price": 29.99,
//     "description": "1.7-liter electric kettle with auto shut-off and boil-dry protection.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/51BgScyg2qL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 190
//     }
//   },
//   {
//     "id": 10,
//     "title": "Stand Mixer",
//     "price": 199.99,
//     "description": "10-speed stand mixer with 5-quart stainless steel bowl, includes multiple attachments.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/61KejycOflL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 210
//     }
//   },
//   {
//     "id": 11,
//     "title": "Pressure Cooker",
//     "price": 79.99,
//     "description": "6-quart electric pressure cooker with multiple preset functions.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/71sg3EISXdL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 160
//     }
//   },
//   {
//     "id": 12,
//     "title": "Food Processor",
//     "price": 89.99,
//     "description": "8-cup food processor with multiple blades and discs, perfect for chopping and slicing.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/71sg3EISXdL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 140
//     }
//   },
//   {
//     "id": 13,
//     "title": "Dish Rack",
//     "price": 24.99,
//     "description": "Two-tier dish rack with draining board, ideal for small kitchens.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/61fPH47Hd0L._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.4,
//       "count": 110
//     }
//   },
//   {
//     "id": 14,
//     "title": "Bakeware Set",
//     "price": 59.99,
//     "description": "10-piece nonstick bakeware set, includes various pans and baking sheets.",
//     "category": "home",
//     "image": "",
//     "rating": {
//       "rate": 4.7,
//       "count": 150
//     }
//   },
//   {
//     "id": 15,
//     "title": "Cutting Board",
//     "price": 19.99,
//     "description": "Bamboo cutting board with juice groove, durable and eco-friendly.",
//     "category": "home",
//     "image": "",
//     "rating": {
//       "rate": 4.6,
//       "count": 120
//     }
//   },
//   {
//     "id": 16,
//     "title": "Microwave Oven",
//     "price": 89.99,
//     "description": "0.9 cu. ft. microwave oven with 900 watts of power, includes multiple cooking presets.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/61fPH47Hd0L._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 100
//     }
//   },
//   {
//     "id": 17,
//     "title": "Cast Iron Skillet",
//     "price": 29.99,
//     "description": "12-inch cast iron skillet with pre-seasoned finish, perfect for high-heat cooking.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/51OYFH+NrFS._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 180
//     }
//   },
//   {
//     "id": 18,
//     "title": "Rice Cooker",
//     "price": 49.99,
//     "description": "8-cup rice cooker with steaming tray and automatic keep-warm function.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/8139T8YbdkL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 90
//     }
//   },
//   {
//     "id": 19,
//     "title": "Hand Mixer",
//     "price": 24.99,
//     "description": "5-speed hand mixer with turbo boost, includes beaters and dough hooks.",
//     "category": "home",
//     "image": "",
//     "rating": {
//       "rate": 4.5,
//       "count": 110
//     }
//   },
//   {
//     "id": 20,
//     "title": "Electric Griddle",
//     "price": 39.99,
//     "description": "Electric griddle with nonstick surface, perfect for pancakes and grilled sandwiches.",
//     "category": "home",
//     "image": "https://m.media-amazon.com/images/I/61H1BCplO4L._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 140
//     }
//   }
// ];

// const books = [
//   {
//     "id": 1,
//     "title": "To Kill a Mockingbird",
//     "price": 10.99,
//     "description": "A novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/81gepf1eMqL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.9,
//       "count": 2000
//     }
//   },
//   {
//     "id": 2,
//     "title": "1984",
//     "price": 9.99,
//     "description": "A dystopian social science fiction novel and cautionary tale, written by the English writer George Orwell.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/31nUYcZ2MQL._AC_SR160,134_QL70_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 1500
//     }
//   },
//   {
//     "id": 3,
//     "title": "Moby Dick",
//     "price": 11.99,
//     "description": "A novel by Herman Melville, narrating the adventures of the wandering sailor Ishmael and his voyage on the whaleship Pequod.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/81mxx39SqeL._AC_SR155,154_QL70_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 900
//     }
//   },
//   {
//     "id": 4,
//     "title": "Pride and Prejudice",
//     "price": 8.99,
//     "description": "A romantic novel of manners written by Jane Austen in 1813.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/711R1mmc6ML._AC_SR160,134_QL70_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 1200
//     }
//   },
//   {
//     "id": 5,
//     "title": "The Great Gatsby",
//     "price": 10.49,
//     "description": "A 1925 novel written by American author F. Scott Fitzgerald that follows a cast of characters living in the fictional towns of West Egg and East Egg on prosperous Long Island.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/71XEsXS5RlL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 1700
//     }
//   },
//   {
//     "id": 6,
//     "title": "War and Peace",
//     "price": 12.99,
//     "description": "A novel by Leo Tolstoy, first published from 1865 to 1869.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/715qi-cIbML._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 1100
//     }
//   },
//   {
//     "id": 7,
//     "title": "The Catcher in the Rye",
//     "price": 9.49,
//     "description": "A novel by J. D. Salinger, partially published in serial form in 1945–1946 and as a novel in 1951.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/61jBLw5Bq9L._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.4,
//       "count": 1300
//     }
//   },
//   {
//     "id": 8,
//     "title": "The Hobbit",
//     "price": 8.99,
//     "description": "A children's fantasy novel by English author J. R. R. Tolkien.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/81beaZVtFML._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.9,
//       "count": 2200
//     }
//   },
//   {
//     "id": 9,
//     "title": "Fahrenheit 451",
//     "price": 10.99,
//     "description": "A dystopian novel by American writer Ray Bradbury, first published in 1953.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/719aTIkOnDL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 1800
//     }
//   },
//   {
//     "id": 10,
//     "title": "Jane Eyre",
//     "price": 9.99,
//     "description": "A novel by English writer Charlotte Brontë, published under the pen name 'Currer Bell'.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/81YZo72wUhL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 1600
//     }
//   },
//   {
//     "id": 11,
//     "title": "Brave New World",
//     "price": 11.49,
//     "description": "A dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/61V8N3EgUYL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 1400
//     }
//   },
//   {
//     "id": 12,
//     "title": "Wuthering Heights",
//     "price": 10.49,
//     "description": "A novel by Emily Brontë published in 1847 under her pseudonym 'Ellis Bell'.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/71RZBszBLkS._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 800
//     }
//   },
//   {
//     "id": 13,
//     "title": "The Odyssey",
//     "price": 12.99,
//     "description": "An ancient Greek epic poem attributed to Homer.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/81+ceFx9BcL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 900
//     }
//   },
//   {
//     "id": 14,
//     "title": "Les Misérables",
//     "price": 14.99,
//     "description": "A French historical novel by Victor Hugo, first published in 1862.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/7138zaESFhL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 1000
//     }
//   },
//   {
//     "id": 15,
//     "title": "Crime and Punishment",
//     "price": 11.99,
//     "description": "A novel by the Russian author Fyodor Dostoevsky.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/71Eko3myOEL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.9,
//       "count": 1300
//     }
//   },
//   {
//     "id": 16,
//     "title": "Anna Karenina",
//     "price": 13.49,
//     "description": "A novel by the Russian author Leo Tolstoy, first published in book form in 1878.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/61pZyTuNDYL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 1100
//     }
//   },
//   {
//     "id": 17,
//     "title": "The Brothers Karamazov",
//     "price": 12.49,
//     "description": "A novel by Fyodor Dostoevsky, first published in 1880.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/818yZAoIEsL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 1000
//     }
//   },
//   {
//     "id": 18,
//     "title": "Madame Bovary",
//     "price": 10.49,
//     "description": "A novel by French writer Gustave Flaubert, published in 1857.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/711c-uf6AFL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 900
//     }
//   },
//   {
//     "id": 19,
//     "title": "Great Expectations",
//     "price": 8.99,
//     "description": "A novel by Charles Dickens, first published in serial form in 1860.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/61Td+yd3qaL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 1700
//     }
//   },
//   {
//     "id": 20,
//     "title": "Don Quixote",
//     "price": 13.99,
//     "description": "A Spanish novel by Miguel de Cervantes, first published in two parts in 1605 and 1615.",
//     "category": "books",
//     "image": "https://m.media-amazon.com/images/I/712K3sdLlRL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 1100
//     }
//   }
// ]

// const beauty = [
//   {
//     "id": 1,
//     "title": "Moisturizing Cream",
//     "price": 24.99,
//     "description": "A daily moisturizing cream with hyaluronic acid and vitamin E.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/41LS9x7LhjL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 350
//     }
//   },
//   {
//     "id": 2,
//     "title": "Face Cleanser",
//     "price": 15.99,
//     "description": "Gentle face cleanser for all skin types with aloe vera and chamomile.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/51yRsJblpFL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 420
//     }
//   },
//   {
//     "id": 3,
//     "title": "Sunscreen SPF 50",
//     "price": 18.99,
//     "description": "Broad-spectrum sunscreen SPF 50, lightweight and non-greasy.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/51k9FNDlbyL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 270
//     }
//   },
//   {
//     "id": 4,
//     "title": "Vitamin C Serum",
//     "price": 29.99,
//     "description": "Brightening vitamin C serum with antioxidants, suitable for all skin types.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/51i4+81uMPL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.9,
//       "count": 310
//     }
//   },
//   {
//     "id": 5,
//     "title": "Lip Balm",
//     "price": 5.99,
//     "description": "Hydrating lip balm with shea butter and coconut oil.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/6191vOhdx8L._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 500
//     }
//   },
//   {
//     "id": 6,
//     "title": "Eye Cream",
//     "price": 27.99,
//     "description": "Anti-aging eye cream with retinol and peptides.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/51SufCj2KzL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 220
//     }
//   },
//   {
//     "id": 7,
//     "title": "Hair Conditioner",
//     "price": 14.99,
//     "description": "Nourishing hair conditioner with argan oil and keratin.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/51+--c5lp8L._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 380
//     }
//   },
//   {
//     "id": 8,
//     "title": "Shampoo",
//     "price": 13.99,
//     "description": "Sulfate-free shampoo with biotin for strong and healthy hair.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/51kTWF-1r1L._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.4,
//       "count": 450
//     }
//   },
//   {
//     "id": 9,
//     "title": "Facial Toner",
//     "price": 17.99,
//     "description": "Alcohol-free facial toner with witch hazel and rose water.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/61X0ZgbDFbL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 290
//     }
//   },
//   {
//     "id": 10,
//     "title": "Makeup Remover",
//     "price": 12.99,
//     "description": "Micellar water makeup remover, gentle and effective.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/61IlYQq4C3L._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 340
//     }
//   },
//   {
//     "id": 11,
//     "title": "Foundation",
//     "price": 25.99,
//     "description": "Long-lasting liquid foundation with SPF 15.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/41z4AduKXjL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 410
//     }
//   },
//   {
//     "id": 12,
//     "title": "Mascara",
//     "price": 19.99,
//     "description": "Waterproof mascara for voluminous lashes.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/81iGgyJXxpL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 330
//     }
//   },
//   {
//     "id": 13,
//     "title": "Nail Polish",
//     "price": 9.99,
//     "description": "Long-lasting nail polish in a variety of colors.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/51x8o25SlvL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.4,
//       "count": 520
//     }
//   },
//   {
//     "id": 14,
//     "title": "Blush",
//     "price": 16.99,
//     "description": "Powder blush with a natural finish, available in multiple shades.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/513jnpcecsL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 200
//     }
//   },
//   {
//     "id": 15,
//     "title": "Body Lotion",
//     "price": 11.99,
//     "description": "Hydrating body lotion with cocoa butter and vitamin E.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/51ZJ0SMz66L._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 370
//     }
//   },
//   {
//     "id": 16,
//     "title": "Face Mask",
//     "price": 14.99,
//     "description": "Detoxifying face mask with charcoal and clay.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/91MzgRMM1mL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 320
//     }
//   },
//   {
//     "id": 17,
//     "title": "Eyeliner",
//     "price": 9.49,
//     "description": "Waterproof liquid eyeliner with precise tip.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/61b3CdJBBPL._AC_SR160,134_QL70_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 390
//     }
//   },
//   {
//     "id": 18,
//     "title": "Lipstick",
//     "price": 18.99,
//     "description": "Matte finish lipstick available in various shades.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/61l0Hu7BiRL._AC_SR160,134_QL70_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 450
//     }
//   },
//   {
//     "id": 19,
//     "title": "Body Scrub",
//     "price": 13.99,
//     "description": "Exfoliating body scrub with sea salt and essential oils.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/617dfCGlPDL._AC_SR160,134_QL70_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 250
//     }
//   },
//   {
//     "id": 20,
//     "title": "Hair Serum",
//     "price": 22.99,
//     "description": "Anti-frizz hair serum with argan oil.",
//     "category": "beauty",
//     "image": "https://m.media-amazon.com/images/I/51Uu-OYN-uL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 270
//     }
//   }
// ];

// const watches = [
//   {
//     "id": 1,
//     "title": "Classic Leather Watch",
//     "price": 199.99,
//     "description": "A timeless classic leather watch with a stainless steel case.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/61LO6l4zB4L._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 150
//     }
//   },
//   {
//     "id": 2,
//     "title": "Sport Digital Watch",
//     "price": 89.99,
//     "description": "A durable sport digital watch with multiple functions.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/711NXCmUfbL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 200
//     }
//   },
//   {
//     "id": 3,
//     "title": "Luxury Gold Watch",
//     "price": 499.99,
//     "description": "A luxury gold watch with a sapphire crystal and diamond markers.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/61Szdu3CaoL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.9,
//       "count": 75
//     }
//   },
//   {
//     "id": 4,
//     "title": "Minimalist Watch",
//     "price": 129.99,
//     "description": "A minimalist watch with a clean design and mesh band.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/7151kxTCPSL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 180
//     }
//   },
//   {
//     "id": 5,
//     "title": "Diving Watch",
//     "price": 259.99,
//     "description": "A professional diving watch with a water resistance of 200 meters.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/51vSiDswk6L._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 120
//     }
//   },
//   {
//     "id": 6,
//     "title": "Smartwatch",
//     "price": 349.99,
//     "description": "A modern smartwatch with fitness tracking and notification features.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/710yuVTQdKL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 250
//     }
//   },
//   {
//     "id": 7,
//     "title": "Vintage Watch",
//     "price": 299.99,
//     "description": "A vintage watch with an antique design and mechanical movement.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/51MX3ZNMf0L._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 90
//     }
//   },
//   {
//     "id": 8,
//     "title": "Aviator Watch",
//     "price": 229.99,
//     "description": "A rugged aviator watch with chronograph and tachymeter features.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/61OYptq2ePL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 130
//     }
//   },
//   {
//     "id": 9,
//     "title": "Skeleton Watch",
//     "price": 399.99,
//     "description": "A skeleton watch with a transparent dial showcasing the intricate movement.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/61YVUOHcrqL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.9,
//       "count": 110
//     }
//   },
//   {
//     "id": 10,
//     "title": "Fashion Watch",
//     "price": 79.99,
//     "description": "A stylish fashion watch with interchangeable bands.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/61ybeKQto8L._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.4,
//       "count": 220
//     }
//   },
//   {
//     "id": 11,
//     "title": "Chronograph Watch",
//     "price": 159.99,
//     "description": "A chronograph watch with multiple sub-dials and a leather strap.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/61AHiYyu3ZL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 140
//     }
//   },
//   {
//     "id": 12,
//     "title": "Ceramic Watch",
//     "price": 219.99,
//     "description": "A ceramic watch with a scratch-resistant case and bracelet.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/714x4ko2rQL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 100
//     }
//   },
//   {
//     "id": 13,
//     "title": "Solar Powered Watch",
//     "price": 199.99,
//     "description": "An eco-friendly solar powered watch with a perpetual calendar.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/61OYptq2ePL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 160
//     }
//   },
//   {
//     "id": 14,
//     "title": "Pilot Watch",
//     "price": 269.99,
//     "description": "A pilot watch with GMT function and luminous hands.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/71Bbh67nAZL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 110
//     }
//   },
//   {
//     "id": 15,
//     "title": "Field Watch",
//     "price": 149.99,
//     "description": "A rugged field watch with a fabric strap and military time.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/71x2rHMaN+L._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 200
//     }
//   },
//   {
//     "id": 16,
//     "title": "Dress Watch",
//     "price": 179.99,
//     "description": "An elegant dress watch with a slim profile and sapphire crystal.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/71bXSoyCNIL._AC_SR160,134_QL70_.jpg",
//     "rating": {
//       "rate": 4.9,
//       "count": 190
//     }
//   },
//   {
//     "id": 17,
//     "title": "Analog-Digital Watch",
//     "price": 99.99,
//     "description": "A versatile analog-digital watch with dual time zones.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/71bXSoyCNIL._AC_SR160,134_QL70_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 230
//     }
//   },
//   {
//     "id": 18,
//     "title": "Fitness Tracker Watch",
//     "price": 139.99,
//     "description": "A fitness tracker watch with heart rate monitor and GPS.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/71Tk5OPf9BL._AC_SR160,134_QL70_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 260
//     }
//   },
//   {
//     "id": 19,
//     "title": "Digital Watch",
//     "price": 59.99,
//     "description": "A simple and reliable digital watch with backlight and alarm.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/I/71aJJQtVnoL._AC_SR160,134_QL70_.jpg",
//     "rating": {
//       "rate": 4.4,
//       "count": 300
//     }
//   },
//   {
//     "id": 20,
//     "title": "Hybrid Smartwatch",
//     "price": 219.99,
//     "description": "A hybrid smartwatch with analog looks and smart features.",
//     "category": "watches",
//     "image": "https://m.media-amazon.com/images/S/al-eu-726f4d26-7fdb/3de9de7a-dadc-48c1-a540-01c8dbd4a2c5._CR0,0,1200,628_SX507_QL70_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 140
//     }
//   }
// ];
