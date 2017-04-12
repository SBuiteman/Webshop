package com.sogeti.webshop.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

import static javax.persistence.CascadeType.ALL;

/**
 * Created by SBUITEMA on 3-4-2017.
 */
@Entity
@Table(name = "accounts")
public class Account implements Serializable{

    @Id
    @GeneratedValue
    private int id;

    private String password;

    @OneToOne
    private Customer customer;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }
}
