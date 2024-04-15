package vn.id.quanghuydevfs.drcomputer.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import vn.id.quanghuydevfs.drcomputer.model.order.Order;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    List<Order> findAllByUserEmail(String email);
}
