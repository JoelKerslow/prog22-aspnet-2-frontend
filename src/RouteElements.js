import { Routes, Route } from "react-router-dom"
import Welcome from './components/views/Welcome'
import Onboarding from './components/views/Onboarding'
import Home from './components/views/Home'
import VerificationCode from './components/views/VerificationCode'
import SearchProducts from './components/views/SearchProducts'
import Signup from './components/views/Signup'
import Signin from './components/views/Signin'
import ProfilePage from './components/views/ProfilePage'
import EditProfile from './components/views/EditProfile'
import ProductReviewForm from './components/views/ProductReviewForm'
import OrderReviewForm from './components/views/OrderReviewForm'
import Products from './components/views/Products'
import PaymentMethod from './components/views/PaymentMethod'
import ProductReview from './components/views/ProductReview'
import ForgotPassword from './components/views/ForgotPassword'
import PasswordResetConfirmation from "./components/views/PasswordResetConfirmation"
import ResetPassword from "./components/views/ResetPassword"
import UserAddresses from "./components/views/UserAddresses"
import AddressForm from "./components/views/AddressForm"
import OrderHistory from "./components/views/OrderHistory"
import Wishlist from "./components/views/Wishlist"
import MyPromocodes from "./components/views/MyPromocodes"
import MyPromocodesEmpty from "./components/views/MyPromocodesEmpty"
import ProductDetails from "./components/views/ProductDetails"
import OrderResult from "./components/views/OrderResult"
import Cart from "./components/views/Cart"
import AddressCheckoutCard from "./components/partials/AddressCheckoutCard"

const RouteElements = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/Onboarding' element={<Onboarding />} />
      <Route path='/Verification' element={<VerificationCode />} />
      <Route path='/SearchProducts' element={<SearchProducts />} />
      <Route path='/Signup' element={<Signup />} />
      <Route path='/Signin' element={<Signin />} />
      <Route path='/ForgotPassword' element={<ForgotPassword />} />
      <Route path='/PasswordResetConfirmation' element={<PasswordResetConfirmation />} />
      <Route path='/ResetPassword' element={<ResetPassword />} />
      <Route path='/Profile' element={<ProfilePage />} />
      <Route path='/EditProfile' element={<EditProfile />} />
      <Route path='/Product/:productId' element={<ProductDetails />} />
      <Route path='/ProductReview/:productId' element={<ProductReviewForm />} />
      <Route path='/OrderReview/:orderId' element={<OrderReviewForm />} />
      <Route path='/Products/:type/:value' element={<Products />} />
      <Route path='/Profile/PaymentMethods' element={<PaymentMethod />} />
      <Route path='/Profile/Addresses' element={<UserAddresses />} />
      <Route path='/Profile/Addresses/Manage' element={<AddressForm />} />
      <Route path='/MyPromocodes' element={<MyPromocodes />} />
      <Route path='/MyPromocodesEmpty' element={<MyPromocodesEmpty />} />
      <Route
        path='/ProductSubmitedReviews/:productId'
        element={<ProductReview />}
      />
      <Route path='/Profile/Addresses' element={<UserAddresses />} />
      <Route path='/OrderHistory' element={<OrderHistory />} />
      <Route path="/Wishlist" element={<Wishlist/>} />
      <Route path='/orderresult/:outcome' element={<OrderResult />} />
      <Route path='/Cart' element={<Cart />} />
      <Route path='/AddressCheckOut' element={<AddressCheckoutCard/>} />
      <Route path='*' element={<Home />} />
    </Routes>
  )
}

export default RouteElements