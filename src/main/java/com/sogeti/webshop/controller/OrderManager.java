package com.sogeti.webshop.controller;

import com.sogeti.webshop.model.Order;
import javax.ejb.Stateless;
import javax.jms.Session;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by SBUITEMA on 31-3-2017.
 */
@Stateless(name = "ordermanager")
public class OrderManager {

    @PersistenceContext(unitName = "webshopPU")
    EntityManager em;

    public void persistOrders() {

        Order order = new Order();
        order.setProductName("test");
        order.setProductAmount(1);
        order.setClientFirstName("test");
        order.setClientLastName("test");
        order.setAddress("test");
        order.setPostalCode("test");
        order.setCity("test");
        order.setEmail("test");

        em.persist(order);

    }

}
