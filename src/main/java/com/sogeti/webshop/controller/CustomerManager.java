package com.sogeti.webshop.controller;

import com.sogeti.webshop.model.Customer;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by pnederlo on 12-4-2017.
 */
@Stateless(name = "customermanager")
public class CustomerManager {

        @PersistenceContext(unitName = "webshopPU")
        EntityManager entityManager;

        public void persistCustomer(Customer customer) {

            entityManager.persist(customer);

        }

        public Customer createDummyCustomer(){
            Customer customer = new Customer();
            customer.setAddress("Hullenbergweg 302");
            customer.setCity("Amsterdam");
            customer.setClientFirstName("Edo");
            customer.setClientLastName("Hendriksen");
            customer.setEmail("test@test");
            customer.setPostalCode("1022AL");
            persistCustomer(customer);
            return customer;
        }
    }
