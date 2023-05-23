package com.doceasy.appointmentservice.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.doceasy.appointmentservice.dto.AppointmentRequest;
import com.doceasy.appointmentservice.service.AppointmentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/appointment")
@RequiredArgsConstructor
public class AppointmentController {
	 
	private final AppointmentService appointmentService;
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public String placeAppointment(@RequestBody AppointmentRequest appointmentRequest) {
		
		appointmentService.placeAppointment(appointmentRequest);
		return "Appointment Sucessfull";
	}

}
