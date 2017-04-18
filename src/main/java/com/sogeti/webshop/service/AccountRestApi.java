package com.sogeti.webshop.service;

import com.sogeti.webshop.controller.*;
import com.sogeti.webshop.model.*;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

/**
 * Created by pnederlo on 4-4-2017.
 */
@Path("/account")
public class AccountRestApi {

    @Inject
    AccountManager accountManager;
    @Inject
    ProductManager productManager;
    @Inject
    OrderLineManager orderLineManager;
    @Inject
    CustomerOrderManager orderManager;
    @Inject
    CustomerManager customerManager;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postAccount(Account account) {
        Customer customer = account.getCustomer();
        customerManager.persistCustomer(customer);
//        List<OrderLine> orderLineList = account.getOrder_lines();
//        Order order = new Order();
//        customerOrderManager.persistOrders(order);
//        for (OrderLine orderLine : orderLineList) {
//            int id = orderLine.getOrdered_product_id();
//            Product product = productManager.getProductById(id);
//            orderLine.setProduct(product);
//            orderLine.setOrder(order);
//            orderLineManager.persistOrderLine(orderLine);
//        }
        accountManager.persistAccount(account);

}

    @Path("{password}/{username}")
    @GET
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Account getAccount(@QueryParam("password") String password, @QueryParam("username") String username) {

        return new Account();

    }
}
