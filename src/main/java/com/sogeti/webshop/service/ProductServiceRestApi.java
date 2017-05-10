package com.sogeti.webshop.service;

import com.sogeti.webshop.controller.CustomerManager;
import com.sogeti.webshop.controller.OrderLineManager;
import com.sogeti.webshop.controller.OrderManager;
import com.sogeti.webshop.controller.ProductManager;
import com.sogeti.webshop.model.Customer;
import com.sogeti.webshop.model.CustomerOrder;
import com.sogeti.webshop.model.Order;
import com.sogeti.webshop.model.OrderLine;
import com.sogeti.webshop.model.Product;
import org.apache.log4j.Logger;

import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import java.util.List;

/**
 * Created by pnederlo on 20-3-2017.
 */

@Path("/product")
public class ProductServiceRestApi {

    final static Logger logger = Logger.getLogger(ProductServiceRestApi.class);

    @Inject
    ProductManager productManager;

    @Inject
    OrderLineManager orderLineManager;

    @Inject
    OrderManager orderManager;

    @Inject
    CustomerManager customerManager;
//    public ProductServiceRestApi() throws NamingException {
//    }
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Product> getAllProduct(){
//        logger.error("Getting all products");
        return  productManager.readAllProducts();
    }

    @GET
    @Path("/category/allCategories/")
    @Produces(MediaType.APPLICATION_JSON)
    public List<String> getAllCategories(){
        return productManager.getAllCategories();
    }


    @Path("{category}")
    @GET
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public List<Product> getProductsByCategory(@PathParam("category") String category) {

        return productManager.getProductsByCategory(category);

    }

    @Path("/order")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postOrderLine(CustomerOrder customerOrder) {
        logger.error("POSTING AN ORDER");
        Customer customer = customerOrder.getCustomer();

        customerManager.persistCustomer(customer);

        Order order = new Order();
        order.setCustomer(customer);
        orderManager.persistOrder(order);


        List<OrderLine> orderLines = customerOrder.getOrder_lines();

        for (OrderLine orderLine : orderLines){
            logger.debug(orderLine.toString());
        }

        for (OrderLine orderLine : orderLines) {
            int id = orderLine.getOrdered_product_id();
            Product product = productManager.getProductById(id);
            orderLine.setProduct(product);
            orderLine.setOrder(order);
            orderLineManager.persistOrderLine(orderLine);
        }
    }
}




