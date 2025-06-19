## nde-chatwidget-custom

Primo NDE customization for inserting the Slaask chat widget. 

For use with https://github.com/ExLibrisGroup/customModule




Edit custom1-module/customComponentMappings.ts with the two lines below (preceded by '//add this:'):
```
// add this:
import { NdeChatwidgetCustomComponent } from './nde-chatwidget-custom/nde-chatwidget-custom.component';

// Define the map
export const selectorComponentMap = new Map<string, any>([

    //add this:
    ['nde-footer-after', NdeChatwidgetCustomComponent],

]);
```
