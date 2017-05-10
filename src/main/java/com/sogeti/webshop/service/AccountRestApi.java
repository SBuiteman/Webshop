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
    CustomerManager customerManager;


    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postAccount(CreateAccount createAccount) {
        Customer customer = createAccount.getCustomer();
        customerManager.persistCustomer(customer);

        Account account = new Account();
        account.setCustomer(customer);
        account.setPassword(createAccount.getPassword());
        accountManager.persistAccount(account);
    }


    @Path("{username}/{password}")
    @GET
//    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Customer getAccount(@PathParam("password") String password, @PathParam("username") String username) {

        try{
            Customer  customer = accountManager.getAccountByPasswordAndId(password, username);
            return customer;
        } catch (Exception e){
            return null;
        }


    }
}
