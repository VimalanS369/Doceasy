# Doceasy
FSD project - react js, spring boot, hibernate, microservice

THINGS IMPLEMENTED
-React UI      : Frontend is Developed with React UI
-Microservice  :  Has 3 MicroService 
  -Doctor
  -Appointment
  -Availability
  
-Hibernate JPA :  Each Microservice is connected to A Separate Database
  -Doctor       - MongoDb
  -Appointment  - MySQL
  -Availability - MySQL
  
-MicroService Communication :Appointment ms & Availability ms Communicate With Each other to Know if There is Availability for a Doctor if true then Appointment is booked & details stored in Database

-Docker : Dockerised React, Microservices & Databases Individually 

THINGS THAT ARE YET TO BE IMPLEMENTED
-Login SignUp Page : as SpringBoot has Features like ThymeLeaf & Oauth have to Research on it and Implement Login Signup

-Unit Testing : Unit Test with help of JUnit Needs to be Implemented 


THINGS THAT CAN BE IMPLEMENTED TO ADD MORE FEATURES
-Role Based Login : Role Based Login For Doctor to Input their Availability
-Admin Panel : Admin panel for an Admin to Verify and Add or Edit Doctors

