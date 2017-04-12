package com.sogeti.webshop.service;

import com.sogeti.webshop.controller.AccountManager;
import com.sogeti.webshop.controller.ProductManager;
import com.sogeti.webshop.model.Account;
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

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    public void postAccount(Account account) {
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
