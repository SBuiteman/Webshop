package com.sogeti.webshop.controller;

import com.sogeti.webshop.model.Product;
import com.sogeti.webshop.model.Product_;

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
    EntityManager entityManager;


    public  List<Product> readAllProducts() {

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Product> cq = cb.createQuery(Product.class);
        Root<Product> rootEntry = cq.from(Product.class);
        CriteriaQuery<Product> all = cq.select(rootEntry);
        TypedQuery<Product> allQuery = entityManager.createQuery(all);

        return allQuery.getResultList();
    }

    public List<Product> getProductsByCategory(String category) {

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Product> cq = cb.createQuery(Product.class);
        Root<Product> rootEntry = cq.from(Product.class);
        cq.where(cb.equal(rootEntry.get(Product_.category), category));
        TypedQuery<Product> catQuery = entityManager.createQuery(cq);

        return catQuery.getResultList();
    }

    public Product getProductById(int id){
        List<Product> productList = readAllProducts();


        for (Product product : productList){
            if (product.getId() == id){
                return product;
            }
        }

//        Product product = new Product();
//        product.setId(999);

        return null;
    }

    public void createProduct(int id, String name, String description, BigDecimal price) {
        Product prod = new Product();
        prod.setId(id);
        prod.setName(name);
        prod.setDescription(description);
        prod.setPrice(price);

        // persist the product in the database
        entityManager.persist(prod);

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