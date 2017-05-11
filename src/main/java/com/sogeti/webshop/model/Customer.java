package com.sogeti.webshop.model;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by pnederlo on 12-4-2017.
 */
@NamedQueries(
        @NamedQuery(
                name = "selectCustomerIdByEmail",
                query = "select customer.customerId from Customer customer where customer.email = :email")
)
    @Entity
    @Table(name = "customer")
    public class Customer implements Serializable {

        @Id
        @GeneratedValue
        @Column(name = "customer_id")
        private int customerId;

        @Column(name = "first_name")
        private String clientFirstName;

        @Column(name = "last_name")
        private String clientLastName;

        @Column(name = "address")
        private String address;

        @Column(name = "postal_code")
        private String postalCode;

        @Column(name = "city")
        private String city;

        @Column(name = "email")
        private String email;

        public int getCustomerId() {
            return customerId;
        }

        public void setCustomerId(int customerId) {
            this.customerId = customerId;
        }

        public String getClientFirstName() {
            return clientFirstName;
        }

        public void setClientFirstName(String clientFirstName) {
            this.clientFirstName = clientFirstName;
        }

        public String getClientLastName() {
            return clientLastName;
        }

        public void setClientLastName(String clientLastName) {
            this.clientLastName = clientLastName;
        }

        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }

        public String getPostalCode() {
            return postalCode;
        }

        public void setPostalCode(String postalCode) {
            this.postalCode = postalCode;
        }

        public String getCity() {
            return city;
        }

        public void setCity(String city) {
            this.city = city;
        }

        public String getEmail() {
            return email;
        }

        public void setEmail(String email) {
            this.email = email;
        }
    }

