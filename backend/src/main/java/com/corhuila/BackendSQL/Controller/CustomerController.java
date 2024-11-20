package com.corhuila.BackendSQL.Controller;

import com.corhuila.BackendSQL.Entity.Client;
import com.corhuila.BackendSQL.IService.ICustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/customer")
@CrossOrigin(origins = "*")
public class CustomerController {
    @Autowired
    private ICustomerService customerService;

    @GetMapping
    public List<Client> getAll() {
        return customerService.getAll();
    }

    @GetMapping("/{id}")
    public Client findById(@PathVariable Long id) {
        return customerService.findById(id);
    }

    @PostMapping
    public Client save(@RequestBody Client client) {
        return customerService.save(client);
    }

    @PutMapping("/{id}")
    public Client update(@PathVariable Long id, @RequestBody Client client) {
        return customerService.update(id, client);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        customerService.delete(id);
    }
}