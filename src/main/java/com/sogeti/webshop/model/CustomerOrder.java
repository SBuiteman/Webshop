package com.sogeti.webshop.model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by pnederlo on 12-4-2017.
 */
@Entity
//@Table(name="customer_order")
public class CustomerOrder {

    @Id
    @GeneratedValue
    private int customer_order_id;

    @ManyToOne
    @JoinColumn(name = "customer_id")
    private Customer customer;

    @OneToMany
//    @JoinColumn(name="order_line_id")
    private List<OrderLine> order_lines;

    public int getCustomer_order_id() {
        return customer_order_id;
    }

    public void setCustomer_order_id(int customer_order_id) {
        this.customer_order_id = customer_order_id;
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
