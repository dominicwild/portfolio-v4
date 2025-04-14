# Distributed Auction System

A **distributed fault-tolerant auction system** made with *Java*. Featured a *dynamic replication server*,
*authentication mechanism*, *encrypted data transmission*, and a *5-step challenge-response protocol*.

The project made strong use of *Java RMI (Remote Method Invocation)* for communication between clients and servers.
There were *distributed auction servers* that had to keep up-to-date with the system as a whole to function correctly.
*JGroups* was used as a *group server communication protocol library* to ensure *atomic interactions*, *guarantee packet
arrival*, *manage dead connections*, etc.

The project concluded with a **robust and simple distributed auction system**, giving me lots of experience in the
*challenges associated with design, architecture, and programming distributed systems*.
