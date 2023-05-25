package com.doceasy.doctorservice.dto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor

public class DoctorRequest {
	private String did;
	private String name;
    private String description;
    private String department;
    private BigDecimal fee;
}
