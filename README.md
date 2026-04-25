# Renewable Energy PMO Dashboard + Workflow Automation

**Live Demo:** [[pmo-task-approval-demo](link-github-pages)](https://anasalsas.github.io/renewable-energy-pmo-dashboard/)

<img width="1903" height="867" alt="image" src="https://github.com/user-attachments/assets/9369a61d-dc94-4ef0-b79a-99898732ec32" />

## Objective

To design an integrated PMO solution combining Excel-based portfolio monitoring with an automated task approval workflow, enabling improved planning, execution efficiency, and data-driven decision-making in renewable energy projects (Solar, Wind, Hydrogen, Storage).

## Key Features

- Automated task scheduling based on project duration and technology logic  
- Dynamic Gantt chart for timeline visualization  
- KPI dashboard (CAPEX, Capacity, ROI, Project Status)  
- Workload and risk analysis  
- Interactive filtering (slicers)  
- Automated approval workflow concept (Power Automate)  

## Data Model

- Projects → high-level portfolio structure  
- Tasks → execution-level planning  
- Task Logic → rules for sequencing and duration  

## Workflow Automation (Conceptual)

### Challenge
Task approvals and status updates are still manually managed, leading to delays and inconsistent tracking.

### Solution
A workflow automation layer using Microsoft Power Automate:

1. Task created/updated in Excel  
2. Automatic approval trigger  
3. PM approval via Outlook/Teams  
4. Status updated automatically  
5. Team notification sent  

## Business Value

- Improved visibility of project execution  
- Reduced manual coordination effort  
- Standardized approval process  
- Enhanced portfolio control  

## Expected Impact

| Manual Process | Automated Process | Time Savings |
|----------------|------------------|--------------|
| 30 min/day     | 5 min/day        | 25 min/day   |
| 2.5 hours/week | 0.5 hours/week   | 2 hours/week |
| 10 hours/month | 2 hours/month    | 8 hours/month |
| 120 hours/year | 24 hours/year    | 96 hours/year (~12 working days) |


## Real-World Implementation

In a production environment, this solution would be implemented using:
- Microsoft Excel (OneDrive/SharePoint)
- Microsoft Power Automate
- Microsoft Teams / Outlook notifications
- Power BI for reporting and analytics

## Key Insight

This project demonstrates how PMO processes can evolve from manual tracking to an integrated digital workflow combining planning, execution, and automation layers.
