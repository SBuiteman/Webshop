package com.sogeti.webshop.model;

import java.util.List;

/**
 * Created by pnederlo on 12-4-2017.
 */

public class CustomerOrder {

    private int id;

    private Customer customer;

    private List<OrderLine> order_lines;

    public int getId() {
        return id;
    }

    public void setId(int customer_order_id) {
        this.id = customer_order_id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<OrderLine> getOrder_lines() {
        return order_lines;
    }

    public void setOrder_lines(List<OrderLine> order_lines) {
        this.order_lines = order_lines;
    }
}
