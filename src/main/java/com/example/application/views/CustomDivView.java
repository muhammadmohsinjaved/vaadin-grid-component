package com.example.application.views;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.dom.Element; // Use this import for Element
import com.vaadin.flow.component.notification.Notification;

@Route("custom-div-view")
@JsModule("./my-custom-div.js") // Make sure this is the correct path to your custom element JS file
public class CustomDivView extends Div {

    public CustomDivView() {
        // Create the custom div element
        Element customDiv = new Element("my-custom-div");
        customDiv.setProperty("imageUrl", "https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80");
        customDiv.setProperty("heading", "Toyota Supra");
        customDiv.setProperty("subheading", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");

        // Add an event listener to handle any clicks (optional, or you can add any other event listener)
        customDiv.addEventListener("click", e -> {
            Notification.show("Div clicked!");
        });

        // Attach the custom div to the view
        getElement().appendChild(customDiv);
    }
}
