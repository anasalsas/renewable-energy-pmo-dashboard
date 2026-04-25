**Renewable Energy PMO Dashboard (Excel)**

**Objective**

To design and implement a dynamic PMO dashboard in Excel that enables monitoring, planning, and analysis of renewable energy projects (Solar, Wind, Hydrogen, Storage), supporting data-driven decision-making.

Key Features
- Automated task scheduling based on project duration
- Technology-driven task logic (Solar, Wind, H2, Storage)
- Dynamic Gantt chart with timeline visualization
- KPI dashboard (CAPEX, Capacity, ROI, Project Status)
- Workload and risk analysis
- Interactive filters (slicers)


**Data Model**

The model is structured into three main layers:
- Projects → high-level project data
- Tasks → detailed execution plan
- Task Logic (Lists) → rules for task sequencing and duration


**Process Logic**
- Projects define start and end dates
- Tasks are generated and aligned per project
- Task timing is calculated using:
- Priority
- Technology type
- Relative duration (%)

**Output feeds:**
- Gantt chart
- Dashboard KPIs

**Business Value**
- Improves visibility of project timelines
- Enables early identification of delays and risks
- Supports resource and workload management
- Provides a scalable framework for PMO operations

**Use Cases**
- PMO reporting
- Portfolio management
- Renewable energy planning
- Scenario analysis


## PMO Workflow Automation

### Objective

To extend the Excel-based PMO dashboard by introducing an automated task approval workflow, reducing manual coordination and improving execution efficiency.
The goal is to shift the PMO from administrative work to value-added analysis.

### Current Challenge

While the Excel dashboard provides strong planning and monitoring capabilities, task approval and status updates are still manual, leading to:

* Time-consuming follow-ups
* Risk of outdated information
* Limited real-time coordination

### Proposed Solution

Implement a workflow automation layer using Microsoft Power Automate:

1. Task created or updated in Excel (Planned)
2. Automatic trigger for approval request
3. PM receives notification (Outlook / Teams)
4. Approval or rejection action
5. Task status automatically updated (Complete)
6. Team notified automatically

### Conceptual Prototype

A front-end prototype (HTML/CSS/JavaScript) was developed to simulate this workflow and validate the process logic before implementation.

### Expected Impact

*  Reduced manual coordination
*  Improved visibility of task status
*  Standardized approval process
  
Manual Process (Estimated)

- Excel updates → ~10 min/day  
- Email communication → ~10 min/day  
- Follow-ups → ~10 min/day  

 Total: ~30 min/day  

With Automation  (Estimated)

- Minimal manual intervention (~0–5 min/day)

Time Savings (Estimated)

- ~25 min/day  
- ~2 hours/week  
- ~8 hours/month  
- ~96 hours/year (~12 working days)

This reduction allows PMOs to focus on higher-value activities such as analysis, risk management, and stakeholder communication.


### Real-World Implementation

In a real business environment, this workflow would be implemented using Microsoft Power Automate integrated with Excel (OneDrive/SharePoint) and Teams or Outlook.

Due to GitHub limitations (static environment), this repository includes a front-end prototype to simulate the workflow logic.

### Future Integration

* Power BI dashboard connection
* Real-time updates
* Automated reporting
  
