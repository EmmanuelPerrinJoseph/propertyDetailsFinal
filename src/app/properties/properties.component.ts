import { Component, OnInit } from '@angular/core';
import { PROPERTIES } from '../mock-properties';
import { Property } from '../property';
@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties = PROPERTIES;
  selectedProperty : Property;
  constructor() { }
  ngOnInit(): void {
  }
  
  onSelect(property: Property) : void {

    this.selectedProperty = property;

  }


}
