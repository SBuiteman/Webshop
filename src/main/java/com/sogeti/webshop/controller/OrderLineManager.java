package com.sogeti.webshop.controller;

import com.sogeti.webshop.model.OrderLine;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by SBUITEMA on 31-3-2017.
 */
@Stateless(name = "orderlinemanager")
public class OrderLineManager {

    @PersistenceContext(unitName = "webshopPU")
    EntityManager entityManager;

    public void persistOrderLine(OrderLine orderLine) {

        entityManager.persist(orderLine);

    }
}