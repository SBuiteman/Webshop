package com.sogeti.webshop.controller;

import com.sogeti.webshop.model.*;
import com.sogeti.webshop.service.ProductServiceRestApi;
import org.apache.log4j.Logger;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;
import javax.validation.constraints.Null;

/**
 * Created by SBUITEMA on 3-4-2017.
 */
@Stateless(name = "accountmanager")

public class AccountManager {

    @PersistenceContext(unitName = "webshopPU")
    EntityManager entityManager;

    private int customerId;
    private String currentPassword;

    final static Logger logger = Logger.getLogger(AccountManager.class);

    public void persistAccount(Account account) {
        entityManager.persist(account);
    }

    public Customer getAccountByPasswordAndId(String password, String emailAddress) {


//        customerId = entityManager.createNamedQuery("selectCustomerIdByEmail", Integer.class)
//                .setParameter("email", emailAddress).getSingleResult();
//
//        logger.error("CustomerId: "+customerId);
//
//        currentPassword = entityManager.createNamedQuery("getAccountByCustomerId", String.class)
//                .setParameter("id", customerId).getSingleResult();
//
//        logger.info("Password: "+currentPassword);
       try{
           customerId = entityManager.createNamedQuery("selectCustomerIdByEmail", Integer.class)
                   .setParameter("email", emailAddress).getSingleResult();
       } catch (NullPointerException e) {
           logger.info("Emailadress doesn't exist");
           return null;
       }

       try {
           currentPassword = entityManager.createNamedQuery("getAccountByCustomerId", String.class)
                   .setParameter("id", customerId).getSingleResult();
       } catch (NullPointerException e){
           logger.info("Password incorrect");
           return null;
       }

//        return entityManager.find(Customer.class, customerId);


//        try {
//
//            logger.error("Getting customer by password and id");
//
//
//            logger.error("CustomerId: "+customerId);
//
//
//
//            logger.error("Password: "+currentPassword);
//
//        } catch (Exception e) {
//            logger.error("Catching exception");
//            e.printStackTrace();
//            return new Customer();
//        }
//
//
        if (currentPassword.equals(password)){
            return entityManager.find(Customer.class, customerId);
        }
        return null;


//        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
//        CriteriaQuery<Customer> cq = cb.createQuery(Customer.class);
//        Root<Customer> rootEntry = cq.from(Customer.class);
//        cq.where(cb.equal(rootEntry.get(Customer_.email), emailAddress));
//        TypedQuery<Customer> customerTypedQuery = entityManager.createQuery(cq);
//
//        Customer customer = customerTypedQuery.getSingleResult();
//
//        //int id = customer.getCustomerId();
//
//        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
//        CriteriaQuery<Account> criteriaQuery = criteriaBuilder.createQuery(Account.class);
//        Root<Account> re = criteriaQuery.from(Account.class);
//        criteriaQuery.where(criteriaBuilder.and(criteriaBuilder.equal(re.get(Account_.customer), customer),
//                criteriaBuilder.equal(re.get(Account_.password), password)));
//        TypedQuery<Account> accountTypedQuery = entityManager.createQuery(criteriaQuery);
//
//        if (accountTypedQuery.getSingleResult() != null) {
//            return customer;
//        }
//
//        return null;
    }


    public void createDummyAccount(Customer customer){

        Account account = new Account();
        account.setPassword("admin");
        account.setCustomer(customer);
        persistAccount(account);
    }
}
