package com.sogeti.webshop.service;

import com.sogeti.webshop.common.JsonConverter;
import com.sogeti.webshop.common.Product;
import com.sogeti.webshop.common.ProductManager;


import javax.ejb.EJB;
import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.logging.*;
import javax.json.JsonArray;


/**
 * Created by pnederlo on 20-3-2017.
 */
@Path("/products")
public class ProductServiceRestApi {

    @EJB
    ProductManager pm;
//    ProductManager pm = (ProductManager) new InitialContext().lookup("java:comp/env/productmanager");

    private static final Logger LOGGER = Logger.getLogger( ProductServiceRestApi.class.getName() );

    public ProductServiceRestApi() throws NamingException {
    }

    @GET
    public Response get(){
        Handler ch = new ConsoleHandler();
        LOGGER.fine("Handling GET request");
        // Get list of products from database.
        List<Product> list = pm.readAllProducts();


        // Turn list into JSONarray.

        JsonArray response = JsonConverter.buildFromList(list);


        System.out.println(response.toString());
        LOGGER.log(Level.FINE,response.toString());

        return Response.status(200).entity(response).build();
    }

//    public static void main(String [] args) {
//        ProductServiceRestApi productServiceJSON = new ProductServiceRestApi();
//        System.out.println(productServiceJSON.get());
//    }
}
