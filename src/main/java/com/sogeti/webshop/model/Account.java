package com.sogeti.webshop.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by sbuitema on 18-4-2017.
 */
@NamedQueries(
        @NamedQuery(
                name = "getAccountByCustomerId",
                query = "select account.password from Account account where account.customer.customerId = :id"
        )
)
@Entity
@Table(name = "accounts")
public class Account implements Serializable {

    @Id
    @GeneratedValue
    @Column(name = "id")
    private int id;

    @Column(name = "password")
    private String password;

    @OneToOne
    @JoinColumn(name = "customer_customer_id")
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
