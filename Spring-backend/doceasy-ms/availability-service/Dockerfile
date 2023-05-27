# Use a base image with Java and Maven installed
FROM openjdk:17

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file into the container
COPY ./target/availability-service-0.0.1-SNAPSHOT.jar app.jar

# Expose the port on which your application runs
EXPOSE 8082

# Specify the command to run your application
CMD ["java", "-jar", "app.jar"]

#mvn clean package -DskipTests 
#the above command to skip test and build a jar
#DockerCommand to be executed
#docker-compose up