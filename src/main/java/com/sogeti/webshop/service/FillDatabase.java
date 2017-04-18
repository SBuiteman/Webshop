package com.sogeti.webshop.service;

import com.sogeti.webshop.controller.AccountManager;
import com.sogeti.webshop.controller.CustomerManager;
import com.sogeti.webshop.controller.ProductManager;
import com.sogeti.webshop.model.Customer;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import java.math.BigDecimal;

/**
 * Created by pnederlo on 18-4-2017.
 */
@Path("/database")
public class FillDatabase {
    @Inject
    ProductManager productManager;

    @Inject
    CustomerManager customerManager;

    @Inject
    AccountManager accountManager;

    @GET
    public void loadProducts(){
        productManager.createDummyProduct("Hondebrokken","Heerlijke malse hondenbrokken", new BigDecimal(5.65), "Eten");
        productManager.createDummyProduct("Kattenbrokken","Heerlijke malse kattenbrokken", new BigDecimal(10.65), "Drinken");
        productManager.createDummyProduct("Kleine Muizen","Uw slang gaat er van smullen!", new BigDecimal(15.65), "Eten");

        Customer customer = customerManager.createDummyCustomer();
        accountManager.createDummyAccount(customer);
    }
}
