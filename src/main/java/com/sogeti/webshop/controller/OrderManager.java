package com.sogeti.webshop.controller;

import com.sogeti.webshop.model.Order;

import javax.ejb.Stateless;
import javax.enterprise.context.RequestScoped;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by pnederlo on 18-4-2017.
 */

@Stateless(name = "ordermanager")

public class OrderManager {

    @PersistenceContext(unitName = "webshopPU")
    EntityManager entityManager;

    public void persistOrder(Order order) {

        entityManager.persist(order);

        }
    }

