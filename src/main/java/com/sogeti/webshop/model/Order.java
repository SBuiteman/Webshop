package com.sogeti.webshop.model;

import javax.persistence.*;
import java.util.List;

/**
 * Created by pnederlo on 18-4-2017.
 */
@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue
    @Column(name = "order_id")
    private int id;

    @ManyToOne
//    @JoinColumn(name = "customer_id")
    private Customer customer;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
//    @JoinColumn(name="order_line_id")
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

    public void addOrderLine(OrderLine orderLine){
        order_lines.add(orderLine);
    }
}


