package com.doceasy.doctorservice.service;


import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import com.doceasy.doctorservice.dto.DoctorRequest;
import com.doceasy.doctorservice.dto.DoctorResponse;
import com.doceasy.doctorservice.model.Doctor;
import com.doceasy.doctorservice.repository.DoctorRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j

public class DoctorService {
	private final DoctorRepository doctorRepository;
	

public void createDoctor(DoctorRequest doctorRequest) {
    Doctor doctor = Doctor.builder()
            .name(doctorRequest.getName())
            .description(doctorRequest.getDescription())
            .fee(doctorRequest.getFee())
            .build();

    doctorRepository.save(doctor);
    log.info("Doctor {} is saved", doctor.getId());
}

public List<DoctorResponse> getAllDoctors() {
    List<Doctor> doctors = doctorRepository.findAll();

    return doctors.stream().map(this::mapToDoctorResponse).toList();
}

private DoctorResponse mapToDoctorResponse(Doctor doctor) {
    return DoctorResponse.builder()
            .id(doctor.getId())
            .name(doctor.getName())
            .description(doctor.getDescription())
            .fee(doctor.getFee())
            .build();
}
}