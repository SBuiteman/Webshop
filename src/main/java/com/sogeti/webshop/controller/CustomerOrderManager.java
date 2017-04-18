package com.sogeti.webshop.controller;

import com.sogeti.webshop.model.CustomerOrder;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by SBUITEMA on 31-3-2017.
 */
@Stateless(name = "customerordermanager")
public class CustomerOrderManager {

    @PersistenceContext(unitName = "webshopPU")
    EntityManager em;

    public boolean persistOrders(CustomerOrder order) {

        try {
            em.persist(order);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
