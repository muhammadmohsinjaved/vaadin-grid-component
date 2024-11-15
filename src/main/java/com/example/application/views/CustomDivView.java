package com.example.application.views;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.dom.Element; // Use this import for Element

@Route("custom-div-view")
@JsModule("my-div.js") // Ensure this path is correct to the custom div JS file
public class CustomDivView extends Div {

    public CustomDivView() {
        // Create the custom div element (my-custom-div)
        Element customDiv = new Element("my-custom-div");

        // Set properties (imageURL, heading, subheading)
        customDiv.setProperty("imageURL", "https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80");
        customDiv.setProperty("heading", "Toyota Supra");
        customDiv.setProperty("subheading", "Lorem ipsum dolor sit amet, consectetur adipiscing elit.");



        // Attach the custom div to the Vaadin view
        getElement().appendChild(customDiv);
    }
}
