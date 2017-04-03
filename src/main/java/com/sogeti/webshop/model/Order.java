package com.sogeti.webshop.model;

import javax.persistence.*;
import java.io.Serializable;
import java.io.StringReader;

/**
 * Created by SBUITEMA on 31-3-2017.
 */
@Entity
@Table(name = "orders")
public class Order implements Serializable{

    @Id
    @GeneratedValue
    @Column(name = "idorders")
    private int orderId;

    @Column(name = "product_name")
    private String productName;

    @Column(name = "product_amount")
    private String productAmount;

    @Column(name = "client_mail")
    private String clientMail;

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int order_id) {
        this.orderId = order_id;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductAmount() {
        return productAmount;
    }

    public void setProductAmount(String productAmount) {
        this.productAmount = productAmount;
    }

    public String getClientMail() {
        return clientMail;
    }

    public void setClientMail(String clientMail) {
        this.clientMail = clientMail;
    }
}
