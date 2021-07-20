import { Component } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

export interface TabType {
  label: string;
  fields: FormlyFieldConfig[];
}

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  model = {};
  tabs: TabType[] = [
    {
      label: 'Personal data',
      fields: [
        {
          key: 'firstname',
          type: 'input',
          templateOptions: {
            label: 'First name',
            required: true,
          },
        },
        {
          key: 'age',
          type: 'input',
          templateOptions: {
            type: 'number',
            label: 'Age',
            required: true,
          },
        },
      ],
    },
    {
      label: 'Investment',
      fields: [
        {
          key: 'investments',
          type: 'repeat',
          defaultValue: [{}],
          fieldArray: {
            fieldGroupClassName: 'row',
            templateOptions: {
              btnText: 'Add another investment',
            },
            fieldGroup: [
              {
                className: 'col-sm-4',
                type: 'input',
                key: 'investmentName',
                templateOptions: {
                  label: 'Name of Investment:',
                  required: true,
                },
              },
              {
                type: 'input',
                key: 'investmentDate',
                className: 'col-sm-3',
                templateOptions: {
                  type: 'date',
                  label: 'Date of Investment:',
                },
              }
            ],
          },
        }
      ]
    },
    {
      label: 'Destination',
      fields: [
        {
          key: 'country',
          type: 'input',
          templateOptions: {
            label: 'Country',
            required: true,
          },
        },
      ],
    },
    {
      label: 'Day of the trip',
      fields: [
        {
          key: 'day',
          type: 'input',
          templateOptions: {
            type: 'date',
            label: 'Day of the trip',
            required: true,
          },
        },
      ],
    }
  ];
  form = new FormArray(this.tabs.map(() => new FormGroup({})));
  formState = {}
  options = this.tabs.map(() => <FormlyFormOptions>{
    formState: this.formState,
  });

  submit() {
    alert(JSON.stringify(this.model));
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */