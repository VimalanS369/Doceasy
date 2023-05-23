package com.doceasy.availabilityservice.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AvailabilityResponse {
	//dCode used instead of dcode
	private String dcode;
	private boolean isInStock;

}
