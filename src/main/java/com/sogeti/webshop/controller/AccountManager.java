package com.sogeti.webshop.controller;

import com.sogeti.webshop.model.*;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

/**
 * Created by SBUITEMA on 3-4-2017.
 */
@Stateless(name = "accountmanager")
public class AccountManager {

    @PersistenceContext(unitName = "webshopPU")
    EntityManager entityManager;

    public void persistAccount(Account account) {
        entityManager.persist(account);
    }

    public Customer getAccountByPasswordAndId(String password, String emailAddress) {

        CriteriaBuilder cb = entityManager.getCriteriaBuilder();
        CriteriaQuery<Customer> cq = cb.createQuery(Customer.class);
        Root<Customer> rootEntry = cq.from(Customer.class);
        cq.where(cb.equal(rootEntry.get(Customer_.email), emailAddress));
        TypedQuery<Customer> customerTypedQuery = entityManager.createQuery(cq);

        Customer customer = customerTypedQuery.getSingleResult();

        //int id = customer.getCustomerId();

        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();
        CriteriaQuery<Account> criteriaQuery = criteriaBuilder.createQuery(Account.class);
        Root<Account> re = criteriaQuery.from(Account.class);
        criteriaQuery.where(criteriaBuilder.and(criteriaBuilder.equal(re.get(Account_.customer), customer),
                criteriaBuilder.equal(re.get(Account_.password), password)));
        TypedQuery<Account> accountTypedQuery = entityManager.createQuery(criteriaQuery);

        if (accountTypedQuery.getSingleResult() != null) {
            return customer;
        }

        return null;
    }

    public void createDummyAccount(Customer customer){

        Account account = new Account();
        account.setPassword("admin");
        account.setCustomer(customer);
        persistAccount(account);
    }
}
