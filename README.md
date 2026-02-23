
 github repo link - https://github.com/man-sol/shoppyglobe

# ShoppyGlobe E-commerce React App 🛒



ShoppyGlobe is a **modern e-commerce application** built using **React.js** and **Vite**.  
It allows users to browse products, view product details, add items to the cart, and complete a dummy checkout form.

The app features a **premium black & yellow theme**, responsive design, lazy loading of components and images, smooth hover effects, and proper error handling for a professional e-commerce experience.

---

##  Features

- Browse products fetched from the public API [dummyjson.com](https://dummyjson.com/products)
- View detailed product information with images, description, and price
- Add products to the cart from **Product List** or **Product Detail** pages
- Update item quantity or remove items directly from the cart
- Checkout form with dummy user information
- Place Order button that clears the cart and redirects to Home
- Proper error handling and 404 Not Found page
- Product search functionality using Redux
- Lazy loading for components and images for better performance
- Fully responsive layout for mobile, tablet, and desktop

---

##  Tech Stack

- **Frontend:** React.js, Vite  
- **State Management:** Redux Toolkit  
- **Routing:** React Router (CreateBrowserRouter)  
- **Data Fetching:** `useEffect`, Fetch API, custom hooks  
- **Styling:** CSS with black & yellow theme, hover effects, responsive design  
- **Other Features:** Lazy loading of components and images  

---


---

##  Approach to make the Project

- Project Setup  
  - Created a new React project using Vite for faster development and optimized build.  
  - Installed Redux Toolkit for state management and React Router for routing.  

- Component Planning
  - Planned a modular component structure: Header, ProductList, ProductItem, ProductDetail, Cart, CartItem, Checkout, NotFound.  
  - Used props to pass data from parent to child components for reusability.  

- Data Fetching  
  - Created a custom hook (`useFetchProducts`) to fetch products from `https://dummyjson.com/products` using `useEffect`.  
  - Implemented error handling for API requests to show user-friendly messages if fetch fails.  
  - Fetched product details dynamically based on the `id` route parameter in `ProductDetail`.  

- State Management  
  - Implemented Redux to manage the cart state globally.  
  - Created actions and reducers for:
    - `addToCart(product)`  
    - `removeFromCart(productId)`  
    - `updateQuantity({ id, quantity })`  
    - `clearCart()`  
  - Used Redux state to implement **search/filter functionality** for products.  

- Event Handling
  - Added Add to Cart buttons in ProductList and ProductDetail pages.  
  - Implemented quantity controls (+/-) and remove buttons in CartItem.  
  - Ensured minimum quantity is 1 to prevent negative or zero quantity.  

- Routing
  - Used React Router (CreateBrowserRouter)** for routing.  
  - Created dynamic route for product details `/product/:id`.  
  - Added pages for Home, Product Detail, Cart, Checkout, and NotFound (404).  

- Checkout Implementation
  - Created a dummy checkout form to collect user details.  
  - Displayed cart summary and total price.  
  - On Place Order, the cart is cleared and user is redirected to Home with a confirmation alert.  

- Performance Optimization 
  - Implemented lazy loadingfor components using `React.lazy` and `Suspense`.  
  - Added lazy loading for images to improve page load performance.  

- Styling and UX  
  - Applied black & yellow theme for premium look.  
  - Added hover effects and button animations for better UX.  
  - Ensured responsive designfor mobile, tablet, and desktop screens.  

- Error Handling & 404 Page
  - Displayed proper error messages when product fetch fails.  
  - Implemented a stylish NotFound page for unknown routes.  

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/man-sol/shoppyglobe.git
cd shoppyglobe

then
 npm install 

 then 
 npm run dev

 github repo link - https://github.com/man-sol/shoppyglobe