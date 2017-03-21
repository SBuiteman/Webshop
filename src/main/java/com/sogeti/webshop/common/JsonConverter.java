package com.sogeti.webshop.common;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import java.util.List;

/**
 * Created by pnederlo on 21-3-2017.
 */

// Class to convert Java collections to Json and vice versa

public class JsonConverter {

    //method to convert a List of products to a Json array
    public static JsonArray buildFromList(List<Product> products){

        // create Json arraybuilder
        JsonArrayBuilder arrayBuilder = Json.createArrayBuilder();

        // loop over products in list and add to Json-arraybuilder
        for (Product p : products){
            // get product attributes
            String name = p.getName();
            String description = p.getDescription();
            String price = p.getPrice().toString();

            // add attributes to single Json-object
            JsonObject obj = Json.createObjectBuilder().add("name", name)
                    .add("description", description)
                    .add("price", price).build();

            // add Json-object to Json-arraybuilder
            arrayBuilder.add(obj);
        }
        // create JsonArray from the Json-arraybuilder
        return arrayBuilder.build();

    }

}
