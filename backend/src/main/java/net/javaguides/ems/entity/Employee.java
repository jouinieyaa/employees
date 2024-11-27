package net.javaguides.ems.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity // Missing annotation for marking it as a JPA entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName; // Renamed to match Java naming conventions (camelCase)

    @Column(name = "last_name")
    private String lastName; // Renamed to match Java naming conventions (camelCase)

    @Column(name = "email_id", nullable = false, unique = true)
    private String email;
}
