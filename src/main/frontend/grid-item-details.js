var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import '@vaadin/form-layout';
import '@vaadin/grid';
import '@vaadin/text-field';
import { html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { gridRowDetailsRenderer } from '@vaadin/grid/lit.js';
import { applyTheme } from 'Frontend/generated/theme';
let GridItemDetails = class GridItemDetails extends LitElement {
    constructor() {
        super(...arguments);
        this.items = [];
        this.detailsOpenedItem = [];
    }
    createRenderRoot() {
        const root = super.createRenderRoot();
        applyTheme(root);
        return root;
    }
    set data(jsonData) {
        try {
            const parsedData = JSON.parse(jsonData);
            console.log('Parsed Data:', parsedData); // Debug log to see raw data
            if (Array.isArray(parsedData)) {
                this.items = parsedData;
                this.requestUpdate();
                console.log('Data successfully set:', this.items); // Debug log after setting data
            }
            else {
                console.error('Data format incorrect:', parsedData);
            }
        }
        catch (e) {
            console.error('Error parsing data:', e);
        }
    }
    render() {
        return html `
            <style>
                vaadin-grid {
                    height: 100%;
                }
                .custom-table {
                    width: 100% !important;
                    border-collapse: collapse;
                    border: 3px solid #ddd;
                    margin: 20px 0;
                    padding: 0;
                    font-family: Arial, sans-serif;
                }
                .custom-table th,
                .custom-table td {
                    padding: 12px;
                    text-align: left;
                }
                .custom-table th {
                    background-color: #858383;
                    color: white;
                }
                .custom-table tr {
                    border-bottom: 1px solid #ddd;
                }
                .custom-table tr:nth-child(even) {
                    background-color: #f2f2f2;
                }
            </style>

            <vaadin-grid
                    theme="row-stripes"
                    .items="${this.items}"
                    .detailsOpenedItems="${this.detailsOpenedItem}"
                    @active-item-changed="${(event) => {
            const crop = event.detail.value;
            this.detailsOpenedItem = crop ? [crop] : [];
            // Log all child data when a row is selected
            if (crop) {
                console.log('Child Data:', crop.child_data);
            }
        }}"
                    ${gridRowDetailsRenderer((crop) => html `
                        <vaadin-form-layout .responsiveSteps="${[{ minWidth: '0', columns: 3 }]}">
                            <table class="custom-table">
                                <thead>
                                <tr>
                                    <th>Source of Pollution (English)</th>
                                    <th>Crop Acre</th>
                                    <th>Crop Type (English)</th>
                                    <th>Source of Pollution (Urdu)</th>
                                    <th>Crop Type (Urdu)</th>
                                    <th>Multiple Crops Allowed</th>
                                </tr>
                                </thead>
                                <tbody>
                                ${crop.child_data.map(item => html `
                                    <tr>
                                        <td>${item.source_of_pollution_eng}</td>
                                        <td>${item.crop_acre}</td>
                                        <td>${item.crop_type_eng}</td>
                                        <td>${item.source_of_pollution_urdu}</td>
                                        <td>${item.crop_type_urdu}</td>
                                        <td>${item.is_multiple_crop_allowed ? 'Yes' : 'No'}</td>
                                    </tr>
                                `)}
                                </tbody>
                            </table>
                        </vaadin-form-layout>
                    `, [])}
            >
                <vaadin-grid-column
                        path="contamination_source"
                        header="Contamination Source"
                ></vaadin-grid-column>
                <vaadin-grid-column
                        path="contamination_crop_condition"
                        header="Condition"
                ></vaadin-grid-column>
                <vaadin-grid-column
                        path="contamination_prevention"
                        header="Prevention"
                ></vaadin-grid-column>
                <vaadin-grid-column
                        path="contamination_control"
                        header="Control"
                ></vaadin-grid-column>
                <vaadin-grid-column
                        path="hive_oid"
                        header="OID"
                ></vaadin-grid-column>
            </vaadin-grid>
        `;
    }
};
__decorate([
    state()
], GridItemDetails.prototype, "items", void 0);
__decorate([
    state()
], GridItemDetails.prototype, "detailsOpenedItem", void 0);
__decorate([
    property({ type: String })
], GridItemDetails.prototype, "data", null);
GridItemDetails = __decorate([
    customElement('grid-item-details')
], GridItemDetails);
export { GridItemDetails };
//# sourceMappingURL=grid-item-details.js.map