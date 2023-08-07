import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./pages/main-page";
import AboutUsPage from "./pages/about-us/about-us-page";
import ContactUsPage from "./pages/about-us/contact-us/index";
import PrivacyPolicy from "./pages/about-us/privacy-policy";
import VissionMission from "./pages/about-us/vision-mission";
import LoginPage from "./pages/auth/login-page/index";
import RegisterPage from "./pages/auth/register-page/index";
import { useDispatch, useSelector } from "react-redux";
import useApi from "./hooks/useApi";
import { useEffect } from "react";
import { setCategories } from "./redux/categorieSlice";
import CategoryDetail from "./pages/catefory-detail-page";
import { setUser } from "./redux/authSlice";
import UserDashboardPage from "./pages/user/user-dashboard-page";

function App() {
  /*
  useSelctor bizden bir fonksiyon ister
  */
  const categoryState = useSelector((state) => state.categoryState);
  const authState = useSelector((state) => state.authState);
  const api = useApi();
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      /*
      response değişkeni axiosResponse türünden bir objedir dolayısıyla
      apidan gelen json datasını kendisi değildir.
      */
      const response = await api.get("public/categories/listMainCategories");
      console.warn("🚀 ~ file: App.jsx:32 ~ response:", response);
      dispatch(setCategories(response.data.data));
      /*
      eğer token varsa ama user yoksa API dan user bilgisini al ve 
      dispatch yap
      */
      if (authState.token && !authState.user) {
        const userResponse = await api.get("user/appData");
        console.warn("🚀 ~ file: App.jsx:40 ~ userResponse:", userResponse);
        dispatch(setUser(response.data.data.user));
      }
    })();
  }, []);

  /*
  routları şua urlere göre oluşturulmalıdır

  /category/:slug
  /services/:slug
  /auth/register
  /user
  */
  return (
    <>
      <div className="container py-3">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />

          <Route path="/auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Route>
          <Route path="/user">
            <Route index element={<UserDashboardPage />} />
          </Route>

          <Route path="/category/:slug" element={<CategoryDetail />} />

          <Route path="/about-us">
            <Route index element={AboutUsPage} />
            <Route path="/about-us/contact-us" element={<ContactUsPage />} />
            <Route
              path="/about-us/privacy-policy"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/about-us/vision-mission"
              element={<VissionMission />}
            />
          </Route>
        </Routes>

        <Footer />
      </div>
    </>
  );
}

export default App;
