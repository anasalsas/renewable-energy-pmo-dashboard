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

**Future Improvements**
- Integration with Power BI
- Real-time data updates
- Advanced dependency modeling
- Resource allocation optimization
