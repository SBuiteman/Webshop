package com.sogeti.webshop.controller;

import com.sogeti.webshop.model.OrderLine;

import javax.ejb.Stateless;
import javax.enterprise.context.RequestScoped;
import javax.enterprise.context.SessionScoped;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.Serializable;

/**
 * Created by SBUITEMA on 31-3-2017.
 */
@Stateless(name = "orderlinemanager")

public class OrderLineManager implements Serializable{

    @PersistenceContext(unitName = "webshopPU")
    EntityManager entityManager;

    public void persistOrderLine(OrderLine orderLine) {

        entityManager.persist(orderLine);

    }
}