## nde-chatwidget-custom

Primo NDE customization for inserting the Slaask chat widget. 

For use with https://github.com/ExLibrisGroup/customModule

Steps:

- Download this repository to src/app/custom1-module in the NDE development environment (or naviage to that directory in Terminal and run `git clone https://github.com/jeremymcwilliams/nde-chatwidget-custom` ).

- Update `nde-chatwidget-custom.component.ts` with your javascript cdn path, or as necessary as described by your vendor to embed a chat widget.

- Edit custom1-module/customComponentMappings.ts with the two lines below (preceded by '//add this:'):
```
// add this:
import { NdeChatwidgetCustomComponent } from './nde-chatwidget-custom/nde-chatwidget-custom.component';

// Define the map
export const selectorComponentMap = new Map<string, any>([

    //add this:
    ['nde-footer-after', NdeChatwidgetCustomComponent],

]);
```

- Navigate in Terminal to the project root, and run `npm run start`