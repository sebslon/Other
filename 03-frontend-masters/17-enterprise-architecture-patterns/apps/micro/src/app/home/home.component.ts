import { Component } from "@angular/core";
import { Widget } from "@fem/api-interfaces";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "fem-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  price;
  mode;
  widgets: Widget[];

  reCalculateTotal(mode: string, widgets: Widget[], widget: Widget) {
    this.widgets = this.updateWidgets(mode, widgets, widget);
    this.price = this.getTotalPrice(widgets);
  }

  getTotalPrice(widgets) {
    return widgets.reduce((acc, curr) => acc + curr.price, 0);
  }

  addWidget(widgets, widget: Widget) {
    const newWidget = Object.assign({}, widget, { id: uuidv4() });
    return [...widgets, newWidget];
  }

  updateWidget(widgets: Widget[], widget: Widget) {
    return (widgets = widgets.map((_widget) =>
      widget.id === _widget.id ? Object.assign({}, widget) : _widget
    ));
  }

  updateWidgets(mode: string, widgets, widget: Widget) {
    switch (mode) {
      case "create":
        return this.addWidget(widgets, widget);
      case "update":
        return this.updateWidget(widgets, widget);
      case "delete":
        return this.deleteWidget(widgets, widget);
      default:
        break;
    }
  }

  deleteWidget(widgets, widget: Widget) {
    return (widgets = widgets.filter((_widget) => widget.id !== _widget.id));
  }
}
