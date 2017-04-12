package com.sogeti.webshop.controller;

import com.sogeti.webshop.model.Customer;
import com.sogeti.webshop.model.OrderLine;

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
    }
