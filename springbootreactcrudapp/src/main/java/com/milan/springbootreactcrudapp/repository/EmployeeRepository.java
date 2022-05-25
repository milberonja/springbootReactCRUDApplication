package com.milan.springbootreactcrudapp.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.milan.springbootreactcrudapp.entity.Employee;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
