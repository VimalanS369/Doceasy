package com.doceasy.appointmentservice.dto;


import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class AppointmentRequest {
	private List<AppointmentLineItemsDto> appointmentLineItemsDtoList;
	

}
