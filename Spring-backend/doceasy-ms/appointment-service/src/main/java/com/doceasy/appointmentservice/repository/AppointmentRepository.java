package com.doceasy.appointmentservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.doceasy.appointmentservice.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

}
