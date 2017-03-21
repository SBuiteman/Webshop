package com.sogeti.webshop.service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.core.Response;


/**
 * Created by pnederlo on 20-3-2017.
 */
@Path("/")
public class ProductServiceJSON {

    @GET
    @Path("/list/")
    public Response printProduct(){

        // create list of json products met methode uit productmanager
        //List<?> list =



        return Response.status(200).entity("Hello").build();
    }
}
