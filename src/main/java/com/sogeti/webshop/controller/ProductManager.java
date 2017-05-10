package com.sogeti.webshop.controller;

import com.sogeti.webshop.model.Product;

import javax.ejb.Stateless;
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
//        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
//        CriteriaQuery<Product> cq = cb.createQuery(Product.class);
//        Root<Product> rootEntry = cq.from(Product.class);
//        CriteriaQuery<Product> all = cq.select(rootEntry);
//        TypedQuery<Product> allQuery = entityManager.createQuery(all);

//        return allQuery.getResultList();
        return entityManager.createNamedQuery("getAllProducts", Product.class).getResultList();
//        return entityManager.createQuery("from Product", Product.class).getResultList();
    }

    public List<String> getAllCategories(){

        return entityManager.createNamedQuery("getAllCategories", java.lang.String.class).getResultList();

//        return entityManager.createQuery("select distinct category from Product", Product.class).getResultList();
    }

    public List<Product> getProductsByCategory(String category) {

//        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
//        CriteriaQuery<Product> cq = cb.createQuery(Product.class);
//        Root<Product> rootEntry = cq.from(Product.class);
//        cq.where(cb.equal(rootEntry.getAllProduct(Product_.category), category));
//        TypedQuery<Product> catQuery = entityManager.createQuery(cq);
//
//        return catQuery.getResultList();
        return entityManager.createNamedQuery("getProductsByCategory", Product.class).setParameter("category", category).getResultList();
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