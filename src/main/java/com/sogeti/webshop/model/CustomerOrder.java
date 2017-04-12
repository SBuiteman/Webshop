package com.sogeti.webshop.model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by pnederlo on 12-4-2017.
 */
@Entity
@Table(name="customer_order")
public class CustomerOrder {

    @Id
    @GeneratedValue
    private int id;

    @ManyToOne
    private Customer customer;

    @OneToMany
    private List<OrderLine> order_lines;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
