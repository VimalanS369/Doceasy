package com.doceasy.appointmentservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AppointmentServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppointmentServiceApplication.class, args);
	}

	/*
	{ "appointmentLineItemsDtoList":[
	                                 {"dcode" : "cardio",
	                                 "price" : 1200,
	                               "quantity" : 1
	                               
	                                 }
	                                ]

	                             }

   */
}
