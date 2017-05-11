package com.sogeti.webshop.controller;

import com.sogeti.webshop.model.Product;

import javax.ejb.Stateless;
import javax.enterprise.context.RequestScoped;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
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

        return entityManager.createNamedQuery("getAllProducts", Product.class).getResultList();
    }

    public List<String> getAllCategories(){

        return entityManager.createNamedQuery("getAllCategories", java.lang.String.class).getResultList();
    }

    public List<Product> getProductsByCategory(String category) {

        return entityManager.createNamedQuery("getProductsByCategory", Product.class).setParameter("category", category).getResultList();
    }

    public Product getProductById(int id){

        return entityManager.find(Product.class, id);
    }

    public void createDummyProduct(String name, String description, BigDecimal price, String category) {
        Product product = new Product();
//        prod.setId(id);
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        product.setCategory(category);

        // persist the product in the database
        entityManager.persist(product);

    }
}
//        CRITERIABUILDER EXAMPLE

//        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
//        CriteriaQuery<Product> cq = cb.createQuery(Product.class);
//        Root<Product> rootEntry = cq.from(Product.class);
//        cq.where(cb.equal(rootEntry.getAllProduct(Product_.category), category));
//        TypedQuery<Product> catQuery = entityManager.createQuery(cq);
//
//        return catQuery.getResultList();