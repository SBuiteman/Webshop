package com.sogeti.webshop.service;


import com.sogeti.webshop.controller.*;
import com.sogeti.webshop.model.*;

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
    OrderLineManager orderLineManager;

    @Inject
    OrderManager orderManager;

    @Inject
    CustomerManager customerManager;

    @Path("/order")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postOrderLine(CustomerOrder customerOrder) {

        Order order = new Order();
        Customer customer = customerOrder.getCustomer();
        //order.setCustomer_name("Test");
        customerManager.persistCustomer(customer);

        for (OrderLine orderLine : customerOrder.getOrder_lines()) {
            int id = orderLine.getOrdered_product_id();
            Product product = productManager.getProductById(id);
            orderLine.setProduct(product);
            orderLine.setOrder(order);
            orderManager.persistOrders(order);
            orderLineManager.persistOrderLine(orderLine);
        }
    }
}




