import React from "react";
import axios from "axios";
const useApi = () => {
  const api = axios.create();
  api.defaults.baseURL = "https://api.adoptez1artisan.com";

  /*
  axios sadece 200 201 2xx kodlarını kabul eder bizde bütün
  status kodlarını kabul etmesini istiyoruz ve aşağıdaki kodları yazıyoruz

   */
  api.defaults.validateStatus = (status) => {
    return status >= 200 && status <= 599;
  };
  api.defaults.headers.common = {
    /*
    obj propertyleri özel karakter içermiyosa tırnaksız yazılaabilir 
    eğer özel karakter içeriyosa tırnak şçerisinde yazılabilir
    */

    //özel karakter içerdiği için tırnak içerisinde yazılır  çünki aralarında tırtnak var
    "content-type": "application/jspn; charset=UTF-8",
  };
  /*
  eğer localstoragada token varsa bu tokeni her requestte 
  göndermemiz gerekiyor
  api dökümanına baktığımızda bu 
  tokeni http headerları içerisinde eklememiz gerekiyor
  */
  const authToken = localStorage.getItem("authToken");
  if (authToken) {
    /*
    yine api dökümanına baktığımızda tokenimizi  tam olarak şu şekilde 
    set etmemiz gerekir
    Bearer [token bilgisi]

    burda "Bearer" ifadesinden sonra bir adet boşluk olduğuna dikkat edelim 
    eğer bu boşluk hiç olmazsa veya birden fazla olursa API hata verecektir
    !Çok önemli dikkat edin
    */
    api.defaults.headers.common["Authorization"] = "Bearer " + authToken;
         /*
        Api isteğinde bulunduğumuzda request headerları tam olarak şu şekildedir:
        Burada bearer ifadesinin içeriğine dikkat edin.
        
        Accept-Encoding: gzip, deflate, br
        Accept-Language: en-US,en;q=0.9,tr;q=0.8
        Authorization: Bearer 8291481789c029304e85aec3d7d8cb5f
        Cache-Control: no-cache
        Origin: http://localhost:5173
        Pragma: no-cache
        Referer: http://localhost:5173/
        */
  }
  return api;
};

export default useApi;
