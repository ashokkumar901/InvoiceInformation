import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-consolidation-definition',
  templateUrl: './consolidation-definition.component.html',
  styleUrls: ['./consolidation-definition.component.scss']
})
export class ConsolidationDefinitionComponent implements OnInit {
  invoiceList: any;

  constructor() {

  }

  ngOnInit(): void {
    this.invoiceList = [
      {
        's_customer_id': 'Cassiopae Ltd', 'd_effective_date': '21-Jan-21', 's_billing_type': 'FPP',
        's_fin_id_attribute': 'INV', 's_sow_id_attribute': 'INV',
        's_po_ref_attribute': 'NO', 's_custom_field1_attribute': '1 - NO',
        's_custom_field2_attribute': 'NA', 's_custom_field3_attribute': 'NA',
        's_custom_field4_attribute': 'NA', 's_custom_field5_attribute': 'NA',
        's_custom_field6_attribute': 'NA', 's_billing_cycle_attribute': 'NA',
        's_billing_entity_attribute': 'INV', 's_execution_model': 'NA',
        's_profile': 'NA', 's_employee_id': 'NA', 's_milestone_attribute': 'INV',
        's_current_status': 'SENT FOR APPROVAL', 'action': 'action1'
      },
      {
        's_customer_id': 'Cassiopae Ltd', 'd_effective_date': '21-Jan-21', 's_billing_type': 'FPP',
        's_fin_id_attribute': 'INV', 's_sow_id_attribute': 'INV',
        's_po_ref_attribute': 'NO', 's_custom_field1_attribute': '1 - NO',
        's_custom_field2_attribute': 'NA', 's_custom_field3_attribute': 'NA',
        's_custom_field4_attribute': 'NA', 's_custom_field5_attribute': 'NA',
        's_custom_field6_attribute': 'NA', 's_billing_cycle_attribute': 'NA',
        's_billing_entity_attribute': 'INV', 's_execution_model': 'NA',
        's_profile': 'NA', 's_employee_id': 'NA', 's_milestone_attribute': 'INV',
        's_current_status': 'SENT FOR APPROVAL', 'action': 'action1'
      },
      {
        's_customer_id': 'Cassiopae Ltd', 'd_effective_date': '21-Jan-21', 's_billing_type': 'FPP',
        's_fin_id_attribute': 'INV', 's_sow_id_attribute': 'INV',
        's_po_ref_attribute': 'NO', 's_custom_field1_attribute': '1 - NO',
        's_custom_field2_attribute': 'NA', 's_custom_field3_attribute': 'NA',
        's_custom_field4_attribute': 'NA', 's_custom_field5_attribute': 'NA',
        's_custom_field6_attribute': 'NA', 's_billing_cycle_attribute': 'NA',
        's_billing_entity_attribute': 'INV', 's_execution_model': 'NA',
        's_profile': 'NA', 's_employee_id': 'NA', 's_milestone_attribute': 'INV',
        's_current_status': 'SENT FOR APPROVAL', 'action': 'action1'
      },
      {
        's_customer_id': 'Cassiopae Ltd', 'd_effective_date': '21-Jan-21', 's_billing_type': 'FPP',
        's_fin_id_attribute': 'INV', 's_sow_id_attribute': 'INV',
        's_po_ref_attribute': 'NO', 's_custom_field1_attribute': '1 - NO',
        's_custom_field2_attribute': 'NA', 's_custom_field3_attribute': 'NA',
        's_custom_field4_attribute': 'NA', 's_custom_field5_attribute': 'NA',
        's_custom_field6_attribute': 'NA', 's_billing_cycle_attribute': 'NA',
        's_billing_entity_attribute': 'INV', 's_execution_model': 'NA',
        's_profile': 'NA', 's_employee_id': 'NA', 's_milestone_attribute': 'INV',
        's_current_status': 'SENT FOR APPROVAL', 'action': 'action1'
      },
      {
        's_customer_id': 'Cassiopae Ltd', 'd_effective_date': '21-Jan-21', 's_billing_type': 'FPP',
        's_fin_id_attribute': 'INV', 's_sow_id_attribute': 'INV',
        's_po_ref_attribute': 'NO', 's_custom_field1_attribute': '1 - NO',
        's_custom_field2_attribute': 'NA', 's_custom_field3_attribute': 'NA',
        's_custom_field4_attribute': 'NA', 's_custom_field5_attribute': 'NA',
        's_custom_field6_attribute': 'NA', 's_billing_cycle_attribute': 'NA',
        's_billing_entity_attribute': 'INV', 's_execution_model': 'NA',
        's_profile': 'NA', 's_employee_id': 'NA', 's_milestone_attribute': 'INV',
        's_current_status': 'SENT FOR APPROVAL', 'action': 'action1'
      }
    ]
  }

}
