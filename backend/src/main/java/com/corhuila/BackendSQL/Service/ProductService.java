package com.corhuila.BackendSQL.Service;

import com.corhuila.BackendSQL.Entity.Product;
import com.corhuila.BackendSQL.IRepository.IProductRepository;
import com.corhuila.BackendSQL.IService.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;

import java.util.List;

@Service
public class ProductService implements IProductService {

    @Autowired
    private IProductRepository iProductRepository;

    @Override
    public List<Product> getAll() {
        List<Product> products = iProductRepository.findAll();
        for (Product product : products) {
            product.setDiscountedPrice(product.getDiscountedPrice());
        }
        return products;
    }

    @Override
    public Product findById(Long id) {
        Product product = iProductRepository.findById(id).orElse(null);
        if (product != null) {
            product.setDiscountedPrice(product.getDiscountedPrice());
        }
        return product;
    }

    @Override
    public Product save(Product product) {
        if (product.getDiscountPercentage() == null) {
            product.setDiscountPercentage(BigDecimal.ZERO); // Sin descuento por defecto
        }
        return iProductRepository.save(product);
    }

    @Override
    public Product update(Long idLong, Product product) {
        Product existingProduct = iProductRepository.findById(idLong).orElse(null);
        if (existingProduct != null) {
            existingProduct.setName(product.getName());
            existingProduct.setDescription(product.getDescription());
            existingProduct.setPrice(product.getPrice());
            existingProduct.setDiscountPercentage(product.getDiscountPercentage());
            return iProductRepository.save(existingProduct);
        }
        return null; // O lanzar una excepción
    }

    @Override
    public void delete(Long id) {
        iProductRepository.deleteById(id);
    }
}