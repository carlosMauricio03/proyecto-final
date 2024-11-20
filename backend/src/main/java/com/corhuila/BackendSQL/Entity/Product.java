package com.corhuila.BackendSQL.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "product")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(length = 255)
    private String description;

    @Column(nullable = false, precision = 10, scale = 2)
    private BigDecimal price;

    @Column(nullable = true, precision = 5, scale = 2)
    private BigDecimal discountPercentage;

    @Transient // Este campo no se almacenará en la base de datos
    private BigDecimal discountedPrice;

    // Método para calcular el precio con descuento
    public BigDecimal getDiscountedPrice() {
        if (discountPercentage != null && price != null) {
            return price.subtract(price.multiply(discountPercentage).divide(BigDecimal.valueOf(100)));
        }
        return price; // Devuelve el precio original si no hay descuento
    }
}