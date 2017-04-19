package com.sogeti.webshop.controller;

import com.sogeti.webshop.model.CustomerOrder;
import com.sogeti.webshop.model.Order;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by pnederlo on 18-4-2017.
 */

    @Stateless(name = "ordermanager")
    public class OrderManager {

        @PersistenceContext(unitName = "webshopPU")
        EntityManager em;

        public boolean persistOrder(Order order) {

            try {
                em.persist(order);
                return true;
            } catch (Exception e) {
                return false;
            }
        }
    }
