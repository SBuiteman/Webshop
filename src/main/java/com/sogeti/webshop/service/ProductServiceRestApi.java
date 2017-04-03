package com.sogeti.webshop.service;


import com.sogeti.webshop.controller.AccountManager;
import com.sogeti.webshop.controller.OrderManager;
import com.sogeti.webshop.model.Account;
import com.sogeti.webshop.model.Order;
import com.sogeti.webshop.model.Product;
import com.sogeti.webshop.controller.ProductManager;

import javax.inject.Inject;
import javax.naming.NamingException;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;
import java.util.logging.*;

/**
 * Created by pnederlo on 20-3-2017.
 */

@Path("/product")
public class ProductServiceRestApi {

    @Inject
    ProductManager productManager;

    private static final Logger LOGGER = Logger.getLogger( ProductServiceRestApi.class.getName() );

    public ProductServiceRestApi() throws NamingException {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Product> get(){

        LOGGER.fine("Handling GET request");
//        Product product = new Product();
//        product.setPrice(new BigDecimal(5.0));
//        product.setDescription("fdksajdsadonoifds");
//        product.setName("fdsdf");
//        product.setId(8);
//        List<Product> list = new ArrayList<Product>();
//        list.add(product);


        return  productManager.readAllProducts();
    }

    @Inject
    OrderManager orderManager;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postOrder(Order[] order) {
        orderManager.persistOrders(order);
    }

    @Inject
    AccountManager accountManager;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postAccount(Account account) {
        accountManager.persistAccount(account);
    }

}




