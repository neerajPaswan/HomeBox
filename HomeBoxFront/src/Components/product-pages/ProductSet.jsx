import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { baseUrl } from '../../App';
import HomeCard from '../ui-cards/HomeCard';
import Pagination from './Pagination';
import Loading from '../loading-compoent/Loading';

function ProductSet() {
  const navigate = useNavigate();
  const productType = useLocation().state.type;

  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 12;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const paginate = (number)=>setCurrentPage(number);

  useEffect(() => {
    const getData = async () => {
      setLoading(true); 
      setCurrentPage(1);
      try {
        const data = await axios
          .get(`${baseUrl}/product/item?cat=${productType}`)
          .then((res) => res.data);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        navigate('/server-error');
      }
    };
    getData();
  }, [productType, navigate]);

  useEffect(() => {
    
    if (products.length > itemsPerPage) {
      setCurrentItems(products.slice(firstItemIndex, lastItemIndex));
    } else {
      setCurrentItems(products);
    }
  }, [products, currentPage, itemsPerPage, firstItemIndex, lastItemIndex]);

  if (loading) {
    return(   <Loading/>) 
  }
  // if (currentItems) {
    return (
      <>
        <div className="class-name grid my-4 mx-4 mb-16 ">
          <div className=" grid ls:grid-cols-2 sm:grid-cols-3 lgb:grid-cols-4  gap-y-12 gap-x-8">
            {currentItems.length > 0 ? (
              currentItems.map((value, idx) => (
                <HomeCard key={value._id} data={value} />
              ))
            ) : (
              <h3>Products Not Available</h3>
            )}
          </div>
          <div className=" flex justify-center my-8">
            {products.length > 11 && <Pagination 
            itemsPerPage={itemsPerPage}
            paginate = {paginate}
            totalItem = {products.length}
            currentPage = {currentPage}
             />}
          </div>
        </div>
      </>
    );
  // }
 
}

export default ProductSet

// const jewelery = [
//   {
//     "id": 1,
//     "title": "Gold Necklace",
//     "price": 150.00,
//     "description": "Elegant gold necklace with intricate design, perfect for special occasions.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/717D5RtGPFL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 200
//     }
//   },
//   {
//     "id": 2,
//     "title": "Silver Bracelet",
//     "price": 75.00,
//     "description": "Stylish silver bracelet with a sleek finish, ideal for everyday wear.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/61meC2jaEzL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 150
//     }
//   },
//   {
//     "id": 3,
//     "title": "Diamond Ring",
//     "price": 1200.00,
//     "description": "Exquisite diamond ring with a brilliant cut, perfect for engagements.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/61nKv+YTgVL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.9,
//       "count": 300
//     }
//   },
//   {
//     "id": 4,
//     "title": "Pearl Earrings",
//     "price": 200.00,
//     "description": "Classic pearl earrings with a timeless design, suitable for any occasion.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/71mYHZzSPiL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 180
//     }
//   },
//   {
//     "id": 5,
//     "title": "Gold Bangle",
//     "price": 250.00,
//     "description": "Elegant gold bangle with a modern design, perfect for adding a touch of luxury.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/51iszhAlVkL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 120
//     }
//   },
//   {
//     "id": 6,
//     "title": "Silver Pendant",
//     "price": 60.00,
//     "description": "Delicate silver pendant with a minimalist design, ideal for daily wear.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/61rStaSHOnL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.4,
//       "count": 140
//     }
//   },
//   {
//     "id": 7,
//     "title": "Ruby Necklace",
//     "price": 800.00,
//     "description": "Stunning ruby necklace with an elegant setting, perfect for special events.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/71FRJRgUQ-L._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 110
//     }
//   },
//   {
//     "id": 8,
//     "title": "Emerald Ring",
//     "price": 950.00,
//     "description": "Beautiful emerald ring with a vintage design, perfect for making a statement.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/81pPQ4zayYL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 130
//     }
//   },
//   {
//     "id": 9,
//     "title": "Sapphire Earrings",
//     "price": 400.00,
//     "description": "Elegant sapphire earrings with a timeless design, suitable for formal occasions.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/71YUNbCsNWL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 100
//     }
//   },
//   {
//     "id": 10,
//     "title": "Gold Chain",
//     "price": 300.00,
//     "description": "Stylish gold chain with a modern design, perfect for everyday wear.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/71iOoLgCrEL._AC_UL320_.jpg  ",
//     "rating": {
//       "rate": 4.5,
//       "count": 90
//     }
//   },
//   {
//     "id": 11,
//     "title": "Platinum Band",
//     "price": 1100.00,
//     "description": "Elegant platinum band with a sleek design, perfect for weddings.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/81nHiyg-XTL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.9,
//       "count": 210
//     }
//   },
//   {
//     "id": 12,
//     "title": "Amethyst Bracelet",
//     "price": 150.00,
//     "description": "Beautiful amethyst bracelet with a unique design, ideal for special occasions.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/619R+sH+ymL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 80
//     }
//   },
//   {
//     "id": 13,
//     "title": "Topaz Pendant",
//     "price": 120.00,
//     "description": "Delicate topaz pendant with a minimalist design, perfect for daily wear.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/718HwAjw-jL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 60
//     }
//   },
//   {
//     "id": 14,
//     "title": "Turquoise Ring",
//     "price": 220.00,
//     "description": "Stunning turquoise ring with a vintage design, perfect for making a statement.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/711ZldF8GQL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 140
//     }
//   },
//   {
//     "id": 15,
//     "title": "Opal Earrings",
//     "price": 180.00,
//     "description": "Elegant opal earrings with a timeless design, suitable for any occasion.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/71WEDh64jhL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 170
//     }
//   },
//   {
//     "id": 16,
//     "title": "Gold Anklet",
//     "price": 130.00,
//     "description": "Stylish gold anklet with a modern design, perfect for everyday wear.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/71ooQyvpGCL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.4,
//       "count": 110
//     }
//   },
//   {
//     "id": 17,
//     "title": "Diamond Studs",
//     "price": 600.00,
//     "description": "Exquisite diamond studs with a brilliant cut, perfect for adding a touch of elegance.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/41k+QCHsYaL._AC_SR250,250_QL65_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 90
//     }
//   },
//   {
//     "id": 18,
//     "title": "Silver Cufflinks",
//     "price": 80.00,
//     "description": "Classic silver cufflinks with a sleek design, ideal for formal occasions.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/41RyJALPlpL._AC_SR250,250_QL65_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 60
//     }
//   },
//   {
//     "id": 19,
//     "title": "Gold Brooch",
//     "price": 250.00,
//     "description": "Elegant gold brooch with intricate details, perfect for special events.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/81iXOJtgIbL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 70
//     }
//   },
//   {
//     "id": 20,
//     "title": "Pearl Necklace",
//     "price": 350.00,
//     "description": "Classic pearl necklace with a timeless design, suitable for any occasion.",
//     "category": "jewelery",
//     "image": "https://m.media-amazon.com/images/I/81iXOJtgIbL._AC_UL320_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 160
//     }
//   }
// ]


// const mobiles = [
//   {
//     "id": 1,
//     "title": "Apple iPhone 13",
//     "price": 799.00,
//     "description": "The latest iPhone 13 with A15 Bionic chip, 6.1-inch display, and improved camera system.",
//     "category": "mobiles",
//     "image": " https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.8,
//       "count": 300
//     }
//   },
//   {
//     "id": 2,
//     "title": "Samsung Galaxy S21",
//     "price": 699.00,
//     "description": "Samsung Galaxy S21 with Exynos 2100, 6.2-inch display, and triple camera setup.",
//     "category": "mobiles",
//     "image": "https://m.media-amazon.com/images/I/4180tJsogaL._AC_SR250,250_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 280
//     }
//   },
//   {
//     "id": 3,
//     "title": "Google Pixel 6",
//     "price": 599.00,
//     "description": "Google Pixel 6 with Google Tensor chip, 6.4-inch display, and advanced AI features.",
//     "category": "mobiles",
//     "image": "https://m.media-amazon.com/images/I/61Io5-ojWUL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 220
//     }
//   },
//   {
//     "id": 4,
//     "title": "OnePlus 9 Pro",
//     "price": 729.00,
//     "description": "OnePlus 9 Pro with Snapdragon 888, 6.7-inch display, and Hasselblad camera system.",
//     "category": "mobiles",
//     "image": "",
//     "rating": {
//       "rate": 4.5,
//       "count": 250
//     }
//   },
//   {
//     "id": 5,
//     "title": "Xiaomi Mi 11",
//     "price": 649.00,
//     "description": "Xiaomi Mi 11 with Snapdragon 888, 6.81-inch display, and 108MP camera.",
//     "category": "mobiles",
//     "image": "https://m.media-amazon.com/images/I/71VW8LmqqPL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 200
//     }
//   },
//   {
//     "id": 6,
//     "title": "Sony Xperia 1 III",
//     "price": 1199.00,
//     "description": "Sony Xperia 1 III with Snapdragon 888, 6.5-inch 4K display, and triple camera system.",
//     "category": "mobiles",
//     "image": "https://m.media-amazon.com/images/I/71d1ytcCntL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 150
//     }
//   },
//   {
//     "id": 7,
//     "title": "Oppo Find X3 Pro",
//     "price": 1099.00,
//     "description": "Oppo Find X3 Pro with Snapdragon 888, 6.7-inch display, and 50MP quad camera.",
//     "category": "mobiles",
//     "image": "https://m.media-amazon.com/images/I/51NkHXXapeL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 130
//     }
//   },
//   {
//     "id": 8,
//     "title": "Asus ROG Phone 5",
//     "price": 999.00,
//     "description": "Asus ROG Phone 5 with Snapdragon 888, 6.78-inch display, and 6000mAh battery.",
//     "category": "mobiles",
//     "image": " https://m.media-amazon.com/images/I/71ocQY+G2XL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 170
//     }
//   },
//   {
//     "id": 9,
//     "title": "Realme GT",
//     "price": 499.00,
//     "description": "Realme GT with Snapdragon 888, 6.43-inch display, and 64MP triple camera.",
//     "category": "mobiles",
//     "image": "https://m.media-amazon.com/images/I/4180tJsogaL._AC_SR250,250_QL65_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 190
//     }
//   },
//   {
//     "id": 10,
//     "title": "Vivo X60 Pro",
//     "price": 699.00,
//     "description": "Vivo X60 Pro with Snapdragon 870, 6.56-inch display, and Zeiss optics.",
//     "category": "mobiles",
//     "image": "https://m.media-amazon.com/images/I/51Zjp5fq1EL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 210
//     }
//   },
//   {
//     "id": 11,
//     "title": "Motorola Edge Plus",
//     "price": 799.00,
//     "description": "Motorola Edge Plus with Snapdragon 865, 6.7-inch display, and 108MP camera.",
//     "category": "mobiles",
//     "image": "https://m.media-amazon.com/images/I/71hj88T5aBL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 180
//     }
//   },
//   {
//     "id": 12,
//     "title": "Nokia 8.3 5G",
//     "price": 599.00,
//     "description": "Nokia 8.3 5G with Snapdragon 765G, 6.81-inch display, and 64MP quad camera.",
//     "category": "mobiles",
//     "image": "",
//     "rating": {
//       "rate": 4.4,
//       "count": 220
//     }
//   },
//   {
//     "id": 13,
//     "title": "Huawei P40 Pro",
//     "price": 899.00,
//     "description": "Huawei P40 Pro with Kirin 990, 6.58-inch display, and Leica quad camera.",
//     "category": "mobiles",
//     "image": " https://m.media-amazon.com/images/I/71nMx5PxibL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 150
//     }
//   },
//   {
//     "id": 14,
//     "title": "Xiaomi Redmi Note 10 Pro",
//     "price": 279.00,
//     "description": "Xiaomi Redmi Note 10 Pro with Snapdragon 732G, 6.67-inch display, and 108MP quad camera.",
//     "category": "mobiles",
//     "image": " https://m.media-amazon.com/images/I/51PQfSwIqyL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 230
//     }
//   },
//   {
//     "id": 15,
//     "title": "OnePlus Nord 2",
//     "price": 399.00,
//     "description": "OnePlus Nord 2 with MediaTek Dimensity 1200, 6.43-inch display, and 50MP triple camera.",
//     "category": "mobiles",
//     "image": "https://m.media-amazon.com/images/I/61B0+qQriPL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.7,
//       "count": 170
//     }
//   },
//   {
//     "id": 16,
//     "title": "Google Pixel 5a",
//     "price": 449.00,
//     "description": "Google Pixel 5a with Snapdragon 765G, 6.34-inch display, and excellent camera performance.",
//     "category": "mobiles",
//     "image": "https://m.media-amazon.com/images/I/71gm8v4uPBL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 160
//     }
//   },
//   {
//     "id": 17,
//     "title": "Samsung Galaxy A52",
//     "price": 349.00,
//     "description": "Samsung Galaxy A52 with Snapdragon 720G, 6.5-inch display, and 64MP quad camera.",
//     "category": "mobiles",
//     "image": "https://m.media-amazon.com/images/I/81Z1scL6HvL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 200
//     }
//   },
//   {
//     "id": 18,
//     "title": "Oppo Reno 6 Pro",
//     "price": 549.00,
//     "description": "Oppo Reno 6 Pro with MediaTek Dimensity 1200, 6.55-inch display, and 64MP quad camera.",
//     "category": "mobiles",
//     "image": "https://m.media-amazon.com/images/I/71hj88T5aBL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.6,
//       "count": 140
//     }
//   },
//   {
//     "id": 19,
//     "title": "Vivo V21 5G",
//     "price": 399.00,
//     "description": "Vivo V21 5G with MediaTek Dimensity 800U, 6.44-inch display, and 44MP OIS selfie camera.",
//     "category": "mobiles",
//     "image": "https://m.media-amazon.com/images/I/71ej8uLNzCL._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.4,
//       "count": 190
//     }
//   },
//   {
//     "id": 20,
//     "title": "Realme 8 Pro",
//     "price": 299.00,
//     "description": "Realme 8 Pro with Snapdragon 720G, 6.4-inch display, and 108MP quad camera.",
//     "category": "mobiles",
//     "image": "https://m.media-amazon.com/images/I/71scmEdSC2L._AC_UY218_.jpg",
//     "rating": {
//       "rate": 4.5,
//       "count": 210
//     }
//   }
// ];



// const fashione=


// const electronics =

