package com.corhuila.BackendSQL.IService;

import com.corhuila.BackendSQL.Entity.Client;
import java.util.List;

public interface ICustomerService {
    List<Client> getAll();
    Client findById(Long id);
    Client save(Client client);
    Client update(Long idLong, Client client);
    void delete(Long id);
}