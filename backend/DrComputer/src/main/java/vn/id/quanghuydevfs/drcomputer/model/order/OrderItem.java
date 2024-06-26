package vn.id.quanghuydevfs.drcomputer.model.order;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import lombok.*;
import vn.id.quanghuydevfs.drcomputer.model.product.Product;


@Builder
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class OrderItem {
    @EmbeddedId
    private OrderItemPK id;

    @ManyToOne
    @MapsId("orderId")
    @JsonBackReference
//    @JsonIgnore
    @ToString.Exclude
    private Order order;

    @ManyToOne
    @MapsId("productId")
    private Product product;

    private long price;
    private int quantity;
}
