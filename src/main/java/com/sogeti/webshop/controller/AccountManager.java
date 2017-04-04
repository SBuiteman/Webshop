package com.sogeti.webshop.controller;

import com.sogeti.webshop.model.Account;
import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

/**
 * Created by SBUITEMA on 3-4-2017.
 */
@Stateless(name = "accountmanager")
public class AccountManager {

    @PersistenceContext(unitName = "webshopPU")
    EntityManager em;

    public boolean persistAccount(Account account) {

        try {
            em.persist(account);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
