# Distributed Storage Worker

A system developed where simple jobs could be submitted via a web interface. Simple jobs such as encryption, text
analysis
and hashing were available. The results of these jobs were available to download asynchronously from the browser on
completion.

The distributed system was developed entirely in Java, using a Java servlet to send/receive REST API calls. Data was
stored
on the backend using a Distributed Hash Table (DHT), using a robust architectural topology with nodes arranged in a
ring.

This project stressed by OO design capabilities, making nodes that could function as works, storage nodes or both, using
inheritance to achieve this feature. Along with experience of developing concurrent applications, processes and
implementing
abstract algorithms into code.

Conclusion of the project involved a fault tolerant system able to keep track of stored files, their status, manage node
or
operation failures and handle collisions.