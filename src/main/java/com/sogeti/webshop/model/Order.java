package com.sogeti.webshop.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

/**
 * Created by SBUITEMA on 31-3-2017.
 */
@Entity
@Table(name = "orders")
public class Order implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int order_id;

    private String customer_name;

    @OneToMany
    private List<OrderLine> order_lines;

    public List<OrderLine> getOrder_lines() {
        return order_lines;
    }

    public void setOrder_lines(List<OrderLine> order_lines) {
        this.order_lines = order_lines;
    }

    public int getOrder_id() {
        return order_id;
    }

    public void setOrder_id(int order_id) {
        this.order_id = order_id;
    }

    public String getCustomer_name() {
        return customer_name;
    }

    public void setCustomer_name(String customer_name) {
        this.customer_name = customer_name;
    }

    public List<OrderLine> getOrderline_list() {
        return orderline_list;
    }

    public void setOrderline_list(List<OrderLine> orderline_list) {
        this.orderline_list = orderline_list;
    }

    @OneToMany
//    @JoinColumn(name = "order_line_id")
    private List<OrderLine> orderline_list;

}
