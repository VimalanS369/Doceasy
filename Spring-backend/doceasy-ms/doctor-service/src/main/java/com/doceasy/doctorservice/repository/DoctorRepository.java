package com.doceasy.doctorservice.repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.doceasy.doctorservice.model.Doctor;


public interface DoctorRepository extends MongoRepository<Doctor, String> {


}
