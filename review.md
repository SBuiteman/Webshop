com.sogeti.webshop.service.ProductServiceRestApi.get():
Probeer code achter comments te vermijden,  je gebruikt versiebeheer, dus dit is niet nodig.


com.sogeti.webshop.service.ProductServiceRestApi:
Onnodige contructor, ongebruikte exceptie

    public ProductServiceRestApi() throws NamingException {
    }

com.sogeti.webshop.controller.ProductManager:
Gebruik geen afkortingen:

       EntityManager em;


productoverview.js:
Is deze regel niet overbodig:  angular.module('ProductOverview',[]);

productservice.js:

De url is hardcoded opgenomen in de js file, als je de service op een server deployed, werkt dit niet meer.
return $resource('http://localhost:8080/webshop/api/product', {}, {
