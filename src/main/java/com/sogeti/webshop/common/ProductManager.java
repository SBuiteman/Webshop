package com.sogeti.webshop.common;

import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.boot.SessionFactoryBuilder;


import javax.ejb.Stateless;
import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import java.math.BigDecimal;
import java.util.List;

/**
 * Created by pnederlo on 20-3-2017.
 */
@Stateless(name = "productmanager")
public class ProductManager {

    @PersistenceContext(unitName = "webshopPU")
    EntityManager em;


    public  List<Product> readAllProducts() {

        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Product> cq = cb.createQuery(Product.class);
        Root<Product> rootEntry = cq.from(Product.class);
        CriteriaQuery<Product> all = cq.select(rootEntry);
        TypedQuery<Product> allQuery = em.createQuery(all);


        return allQuery.getResultList();
    }

    public void createProduct(int id, String name, String description, BigDecimal price) {
        Product prod = new Product();
        prod.setId(id);
        prod.setName(name);
        prod.setDescription(description);
        prod.setPrice(price);

        // persist the product in the database
        em.persist(prod);

    }




//    public static void main(String[] args) {
//        ProductManager pm = new ProductManager();
//        pm.createProduct(1,"Hondebrokken","Heerlijke malse hondenbrokken", new BigDecimal(5.65));
//        pm.createProduct(2,"Kattenbrokken","Heerlijke malse kattenbrokken", new BigDecimal(10.65));
//        pm.createProduct(3,"Kleine Muizen","Uw slang gaat er van smullen!", new BigDecimal(15.65));
//
//
//
//
//
//    }
}