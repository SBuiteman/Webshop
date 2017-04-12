package com.sogeti.webshop.model;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import static javax.persistence.CascadeType.ALL;

/**
 * Created by pnederlo on 20-3-2017.
 */
@Entity
@Table(name = "assortment")
public class Product implements Serializable {
    @Id
//    @Column(name = "product_id")
    private int product_id;

    //    @Column(name = "product_name")
    private String product_name;

    //    @Column(name = "product_description")
    private String product_description;

    //    @Column(name = "product_price")
    private BigDecimal product_price;

    //    @Column(name = "product_category")
    private String product_category;


    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public String getProduct_name() {
        return product_name;
    }

    public void setProduct_name(String product_name) {
        this.product_name = product_name;
    }

    public String getProduct_description() {
        return product_description;
    }

    public void setProduct_description(String product_description) {
        this.product_description = product_description;
    }

    public BigDecimal getProduct_price() {
        return product_price;
    }

    public void setProduct_price(BigDecimal product_price) {
        this.product_price = product_price;
    }

    public String getProduct_category() {
        return product_category;
    }

    public void setProduct_category(String product_category) {
        this.product_category = product_category;
    }
}
