package com.sogeti.webshop.service;


import com.sogeti.webshop.controller.*;
import com.sogeti.webshop.model.*;

import javax.inject.Inject;
import javax.naming.NamingException;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

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
    CustomerOrderManager customerOrderManager;

    @Inject
    CustomerManager customerManager;

    @Path("/order")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postOrderLine(CustomerOrder customerOrder) {
        //customer wordt uit customerorder object gehaald
        Customer customer = customerOrder.getCustomer();

        //customer wordt gerpesisteerd
        customerManager.persistCustomer(customer);

        CustomerOrder currentOrder = new CustomerOrder();
        currentOrder.setCustomer(customer);

//        List<OrderLine> orderLines = customerOrder.getOrder_lines();
//
//        customerOrder.setCustomer(customer);
//        customerOrderManager.persistOrders(currentOrder);
//        for (OrderLine orderLine : orderLines) {
//            int id = orderLine.getOrdered_product_id();
//            Product product = productManager.getProductById(id);
//            orderLine.setProduct(product);
//            orderLine.setCustomerOrder(currentOrder);
//            orderLineManager.persistOrderLine(orderLine);
//        }



    }
}




