package com.doceasy.appointmentservice.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name="t_appointment")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
   

public class Appointment {
	 @Id
	 @GeneratedValue(strategy = GenerationType.IDENTITY)
	 private Long id;
	 private String appointmentNumber;
	 @OneToMany(cascade = CascadeType.ALL)
	 private List<AppointmentLineItems> appointmentLineItemsList;

}
