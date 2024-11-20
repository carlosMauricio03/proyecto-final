package com.corhuila.BackendSQL.Service;

import com.corhuila.BackendSQL.Entity.Client;
import com.corhuila.BackendSQL.IRepository.ICustomerRepository;
import com.corhuila.BackendSQL.IService.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomerService implements ICustomerService {

    @Autowired
    private ICustomerRepository iCustomerRepository;

    @Override
    public List<Client> getAll() {
        return iCustomerRepository.findAll();
    }

    @Override
    public Client findById(Long id) {
        return iCustomerRepository.findById(id).orElse(null);
    }

    @Override
    public Client save(Client client) {
        return iCustomerRepository.save(client);
    }

    @Override
    public Client update(Long idLong, Client client) {
        Client existingClient = iCustomerRepository.findById(idLong).orElse(null);
        if (existingClient != null) {
            existingClient.setLastName(client.getLastName());
            existingClient.setEmail(client.getEmail());
            existingClient.setPhone(client.getPhone());
            return iCustomerRepository.save(existingClient);
        }
        return null;
    }

    @Override
    public void delete(Long id) {
        iCustomerRepository.deleteById(id);
    }
}