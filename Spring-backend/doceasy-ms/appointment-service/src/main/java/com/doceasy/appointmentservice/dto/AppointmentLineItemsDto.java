package com.doceasy.appointmentservice.dto;


import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentLineItemsDto {
	private Long id;
    private String dCode;
    private BigDecimal price;
    private Integer quantity;
}
