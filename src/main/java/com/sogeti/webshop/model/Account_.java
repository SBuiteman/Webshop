package com.sogeti.webshop.model;

import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

/**
 * Created by sbuitema on 18-4-2017.
 */
@StaticMetamodel(Account.class)
public class Account_ {
    public static volatile SingularAttribute<Account, Integer> id;
    public static volatile SingularAttribute<Account, String> password;
    public static volatile SingularAttribute<Account, Customer> customer;
}
