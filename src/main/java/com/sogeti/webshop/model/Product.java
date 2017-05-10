package com.sogeti.webshop.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import java.io.Serializable;
import java.math.BigDecimal;

/**
 * Created by pnederlo on 20-3-2017.
 */
@NamedQueries({
        @NamedQuery(
                name = "getAllProducts",
                query = "from Product"
        ),
        @NamedQuery(
                name = "getProductsByCategory",
                query = "select product from Product product where product.category = :category"
        ),
        @NamedQuery(
                name = "getAllCategories",
                query = "select distinct category from Product"
        )
})

@Entity
@Table(name = "assortment")
public class Product implements Serializable {
    @Id
    @GeneratedValue
    @Column(name = "product_id")
    private int id;

    @Column(name = "product_name")
    private String name;

    @Column(name = "product_description")
    private String description;

    @Column(name = "product_price")
    private BigDecimal price;

    @Column(name = "product_category")
    private String category;

    public int getId() {
        return id;
    }

    public void setId(int product_id) {
        this.id = product_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }
}
