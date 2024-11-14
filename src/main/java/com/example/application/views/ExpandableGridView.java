import com.vaadin.flow.component.dependency.JsModule;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.component.Tag;

@Route("expandable-grid-view")  // Defines the route
@Tag("expandable-grid")         // Matches the tag name of the LitElement component
@JsModule("./expandable-grid.js")  // Path to the JavaScript file
public class ExpandableGridView extends Div {

    public ExpandableGridView() {
        // Optionally, you can add additional styling or layout configuration here
        setSizeFull(); // Makes the component fill the view
    }
}
