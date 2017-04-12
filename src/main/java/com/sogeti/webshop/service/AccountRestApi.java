package com.sogeti.webshop.service;

import com.sogeti.webshop.controller.AccountManager;
import com.sogeti.webshop.controller.OrderLineManager;
import com.sogeti.webshop.controller.OrderManager;
import com.sogeti.webshop.controller.ProductManager;
import com.sogeti.webshop.model.Account;
import com.sogeti.webshop.model.Order;
import com.sogeti.webshop.model.OrderLine;
import com.sogeti.webshop.model.Product;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.Serializable;
import java.util.List;

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
    OrderManager orderManager;

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postAccount(Account account) {

        List<OrderLine> orderLineList = account.getOrder_lines();
        Order order = new Order();
        orderManager.persistOrders(order);
        for (OrderLine orderLine : orderLineList) {
            int id = orderLine.getOrdered_product_id();
            Product product = productManager.getProductById(id);
            orderLine.setProduct(product);
            orderLine.setOrder(order);
            orderLineManager.persistOrderLine(orderLine);
        }
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
