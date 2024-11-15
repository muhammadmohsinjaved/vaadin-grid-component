package com.example.application.views;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.dom.Element; // Use this import for Element
import com.vaadin.flow.component.notification.Notification;

@Route("custom-button-view")
@JsModule("./loading-button/my-custom-button.js")


public class CustomButtonView extends Div {

    public CustomButtonView() {
        // Create the custom button element
        Element customButton = new Element("my-custom-button");
        customButton.setProperty("label", "Click Me I am ");

        // Add an event listener to handle clicks from the custom button
        customButton.addEventListener("button-click", e -> {
            Notification.show("Button clicked Talal!");
        });

        // Attach the button to the view
        getElement().appendChild(customButton);
    }
}
