package com.sogeti.webshop.service;

import com.sogeti.webshop.common.JsonConverter;
import com.sogeti.webshop.common.Product;
import com.sogeti.webshop.common.ProductManager;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.json.JsonArray;


/**
 * Created by pnederlo on 20-3-2017.
 */
@Path("/")
public class ProductServiceJSON {

    private static final Logger LOGGER = Logger.getLogger( ProductServiceJSON.class.getName() );
    @GET
    public Response get(){

        // Get list of products from database.
        List<Product> list = ProductManager.readAllProducts();


        // Turn list into JSONarray.
        JsonArray response = JsonConverter.buildFromList(list);


        System.out.println(response.toString());
        LOGGER.log(Level.FINE,response.toString());

        return Response.status(200).entity(response).build();
    }

//    public static void main(String [] args) {
//        ProductServiceJSON productServiceJSON = new ProductServiceJSON();
//        System.out.println(productServiceJSON.get());
//    }
}
