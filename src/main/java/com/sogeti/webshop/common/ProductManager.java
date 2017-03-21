package com.sogeti.webshop.common;

import com.mysql.cj.xdevapi.JsonArray;
import org.codehaus.jackson.map.util.JSONPObject;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import java.math.BigDecimal;
import java.util.List;

/**
 * Created by pnederlo on 20-3-2017.
 */
public class ProductManager {
    // create EntityManagerFactory, mus always be closed

    public static final EntityManagerFactory ENTITY_MANAGER_FACTORY =
            Persistence.createEntityManagerFactory("webshopPU");

    public static List<Product> readAllProducts () {

        List<Product> products = null;

        // create an entitymanager
        EntityManager manager = ENTITY_MANAGER_FACTORY.createEntityManager();

        // create a transaction
        EntityTransaction transaction = null;

        try {
            // get a transaction
            transaction = manager.getTransaction();

            // begin transaction
            transaction.begin();

            // get a list of products
            products = manager.createQuery("SELECT p from Product p, Product.class").getResultList();

            // commit transaction
            transaction.commit();

        } catch (Exception e){
            // if there is a transaction
            if (transaction!= null){
                transaction.rollback();
            }
            e.printStackTrace();

        } finally {
            // close the entitymanager
            manager.close();
        }

        // Gets a JSON formatted String for each object.
        for(Product product : products) {
            product.toString();
            JSONPObject jsonpObject = (JSONPObject) product.toString();
            JsonArray jsonArray
        }

        return products;
    }

    public static void createProduct (int id, String name, String description, BigDecimal price){
        // create an entitymanager
        EntityManager manager = ENTITY_MANAGER_FACTORY.createEntityManager();

        // create a transaction
        EntityTransaction transaction = null;

        try {
            // get a transaction
            transaction = manager.getTransaction();

            // begin a transaction
            transaction.begin();

            // create a product
            Product prod = new Product();
            prod.setId(id);
            prod.setName(name);
            prod.setDescription(description);
            prod.setPrice(price);

            // persist the product in the database
            manager.persist(prod);

            // commit transaction
            transaction.commit();


        } catch (Exception e){
            // if there are transactions rollback the changes
            if (transaction != null){
                transaction.rollback();
            }
            e.printStackTrace();

        } finally {
            //close the EntityManager
            manager.close();
        }



    }

    public static void main (String[] args){
        createProduct(1,"Hondebrokken","Heerlijke malse hondenbrokken", new BigDecimal(5.65));
        createProduct(2,"Kattenbrokken","Heerlijke malse kattenbrokken", new BigDecimal(10.65));
        createProduct(3,"Kleine Muizen","Uw slang gaat er van smullen!", new BigDecimal(15.65));

        ENTITY_MANAGER_FACTORY.close();
    }
}
