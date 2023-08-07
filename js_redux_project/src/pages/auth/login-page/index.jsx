import React, { useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import useApi from "../../../hooks/useApi";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../../redux/authSlice";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const api = useApi();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {})();
  }, []);

  async function onFormSubmit(e) {
    e.preventDefault();
    /* 
    formdan bilgiyi doğrudan alıp json haline çevirme 
    yöntemini kullnacağız bu yöntem sayesinde
    her input için onchange eventleri yazmaya 
    gerek yok ve componentler gereksiz render
     olmucak ve proje performansı artıcak

     ! İlk Adım Olarak inputlara name propertylerini set ediyoruz
     ! "e" parametresinden (event) formun kendisine ulaşıp bu formu jsona çeviriyoruz
    */
    /*
   ilk olarak bir html elementi içindeki verileri toplmak için
   formData nesnesi oluşturulur  formData formdaki tğm giriş
   alanlarının (input,select vb) değerleri toplamak için kullanılabilir
   bu nedenle e.targer üzerinde alınan form elementi içindeki
   verileri temsil eder
   */
    const data = new FormData(e.target);
    /*
    daha sonra FormData nesnesinin içeriğini bir json nesnesine 
    dönüştürmek için "Object.formEntries()"  yöntemi kullanilir

    ve daha sonra ".entries" kullanimi ise bir diziye dönüştürmesin
    sağlar
    */
    const formJson = Object.fromEntries(data.entries());
    console.warn("🚀  formJson:", formJson);

    const loginResult = await api.post("auth/login", formJson);
    console.warn("🚀 loginResult ~ onFormSubmit ~ loginResult:", loginResult);

    if (loginResult.data.status === "success") {
      dispatch(setToken(loginResult.data.data.token));
      dispatch(setUser(loginResult.data.data.userData));
      navigate("/user");
    } else {
      alert("Lütfen bilgileri Kontrol Ediniz");
    }
  }
  return (
    <>
      <Row className="justify-content-center">
        <Col sm="12" md="12" lg="6">
          <Form onSubmit={onFormSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="*****"
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Button type="submit" variant="primary" className="w-100 mt-3">
                <i className="fa-solid fa-right-to-bracket" />
                &nbsp; Login
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </>
  );
};

export default LoginPage;
