package com.doceasy.appointmentservice.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.math.BigDecimal;
@Entity
@Table(name="t_appointment_line_items")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentLineItems {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String dCode;
    private BigDecimal price;
    private Integer quantity;
}
