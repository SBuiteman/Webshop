package com.sogeti.webshop.model;

import javax.persistence.*;

/**
 * Created by pnederlo on 10-4-2017.
 */

@Entity
@Table(name = "order_line")
//@SecondaryTable(name="assortment")
public class OrderLine {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int order_line_id;

    private int amount_ordered;

    @Transient
    private int ordered_product_id;

    @ManyToOne
    @JoinColumn(name="product_id", foreignKey=@ForeignKey(name="product_id"))
    private Product product;


    @ManyToOne
    @JoinColumn(name="order_id", foreignKey=@ForeignKey(name="order_id"))
    private Order order;


    public int getOrder_line_id() {
        return order_line_id;
    }

    public void setOrder_line_id(int order_line_id) {
        this.order_line_id = order_line_id;
    }

    public int getAmount_ordered() {
        return amount_ordered;
    }

    public void setAmount_ordered(int amount_ordered) {
        this.amount_ordered = amount_ordered;
    }

    public int getOrdered_product_id() {
        return ordered_product_id;
    }

    public void setOrdered_product_id(int ordered_product_id) {
        this.ordered_product_id = ordered_product_id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
        order.addOrderLine(this);
    }
}
