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

    public ProductServiceRestApi() throws NamingException {
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Product> get(){

        return  productManager.readAllProducts();
    }

    @Path("{category}")
    @GET
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<Product> getProductsByCategory(@PathParam("category") String category) {

        return productManager.getProductsByCategory(category);

    }

    @Inject
    OrderManager orderManager;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postOrder(Order order) {
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




