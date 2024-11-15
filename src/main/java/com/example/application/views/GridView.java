//package com.example.application.views;
//
//import com.vaadin.flow.component.grid.Grid;
//import com.vaadin.flow.component.orderedlayout.VerticalLayout;
//import com.vaadin.flow.router.Route;
//import com.vaadin.flow.component.textfield.TextField;
//
//import java.util.List;
//
//@Route("grid-view")
//public class GridView extends VerticalLayout {
//
//    private Grid<Person> grid;
//    private TextField searchField;
//
//    public GridView() {
//        // Initialize grid with Person class
//        grid = new Grid<>(Person.class);
//        grid.setColumns("firstName", "lastName", "email", "profession");
//
//        // Add details renderer for grid rows
//        grid.setDetailsVisibleOnClick(true);
//        grid.setRowDetailsRenderer(person -> {
//            Div details = new Div();
//            details.setText("Email: " + person.getEmail() + ", Phone: " + person.getPhone());
//            return details;
//        });
//
//        // Search field to filter grid data
//        searchField = new TextField();
//        searchField.setPlaceholder("Search");
//        searchField.addValueChangeListener(e -> filterList(e.getValue()));
//
//        // Add grid and search field to layout
//        add(searchField, grid);
//
//        // Load data
//        loadData();
//    }
//
//    private void loadData() {
//        // Hardcoded data
//        List<Person> people = List.of(
//                new Person("John", "Doe", "john.doe@example.com", "Engineer", "123-456-7890"),
//                new Person("Jane", "Smith", "jane.smith@example.com", "Designer", "098-765-4321"),
//                new Person("Michael", "Johnson", "michael.johnson@example.com", "Manager", "111-222-3333"),
//                new Person("Emily", "Davis", "emily.davis@example.com", "Developer", "444-555-6666")
//        );
//        grid.setItems(people);
//    }
//
//    private void filterList(String query) {
//        // Filter data based on the search query
//        grid.setItems(loadData().stream()
//                .filter(person -> person.getFirstName().toLowerCase().contains(query.toLowerCase()))
//                .toList());
//    }
//
//    // Sample Person class (you can replace it with a proper DTO or entity)
//    public static class Person {
//        private String firstName;
//        private String lastName;
//        private String email;
//        private String profession;
//        private String phone;
//
//        // Constructor, getters and setters
//
//        public Person(String firstName, String lastName, String email, String profession, String phone) {
//            this.firstName = firstName;
//            this.lastName = lastName;
//            this.email = email;
//            this.profession = profession;
//            this.phone = phone;
//        }
//
//        public String getFirstName() {
//            return firstName;
//        }
//
//        public String getLastName() {
//            return lastName;
//        }
//
//        public String getEmail() {
//            return email;
//        }
//
//        public String getProfession() {
//            return profession;
//        }
//
//        public String getPhone() {
//            return phone;
//        }
//    }
//}
