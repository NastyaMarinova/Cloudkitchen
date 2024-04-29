import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  //fooddetaild

  foodDetails = [
    {
      id: 1,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 200,
      foodImg: "https://static.toiimg.com/thumb/60043279.cms?imgsize=195460&width=800&height=800"
    },
    {
      id: 2,
      foodName: "Veggie Supreme",
      foodDetails: "Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice: 369,
      foodImg: "https://www.nordicware.com/wp-content/uploads/2021/05/46400_traditional_pizza_pan_02_e.jpg"
    },
    {
      id: 3,
      foodName: "Paneer Burger",
      foodDetails: "panner",
      foodPrice: 149,
      foodImg: "https://www.dishbyrish.co.uk/wp-content/uploads/2023/08/DSC00019-720x720.jpg"
    },
    {
      id: 4,
      foodName: "Veg Masala Roll In Naan",
      foodDetails: "A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice: 140,
      foodImg: "https://ministryofcurry.com/wp-content/uploads/2019/10/kathi-roll_.jpg"
    },
    {
      id: 5,
      foodName: "Indulgence Brownie",
      foodDetails: "(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice: 105,
      foodImg: "https://i0.wp.com/cookingwithbry.com/wp-content/uploads/chocolate-brownies-recipe.png?fit=1080%2C1080&ssl=1"
    },
    {
      id: 6,
      foodName: "Oreo Cheesecake Ice Cream",
      foodDetails: "Oreo ice cream",
      foodPrice: 219,
      foodImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs9ue1Cn2Xwg3on-HYKhQWD_zZgJ9_DSc-YF7muWuq9g&s"
    }
  ]


}
