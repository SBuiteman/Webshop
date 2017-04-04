package com.sogeti.webshop.model;

import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

/**
 * Created by SBUITEMA on 4-4-2017.
 */
@StaticMetamodel(Product.class)
public class Product_ {

    public static volatile SingularAttribute<Product, Integer> id;
    public static volatile SingularAttribute<Product, String> name;
    public static volatile SingularAttribute<Product, String> description;
    public static volatile SingularAttribute<Product, Integer> price;
    public static volatile SingularAttribute<Product, String> category;
}
