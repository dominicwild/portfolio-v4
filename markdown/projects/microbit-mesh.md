# Micro:bit Mesh

Micro:bit Mesh was a mesh network protocol I developed for the BBC Micro:bit. It was a feature added with the aim to
teach kids
about the computing concept of networking, giving them a tool to play around with.

The project involved very low level C/C++ programming using the Micro:bits run time called codal. This project stressed
reading
and understanding how, at a low level, embedded systems hardware could be manipulated to achieved the desired effects,
working
a lot with the Micro:bits radio. One of the biggest challenges I faced while doing this project was debugging the Micro:
bits,
as its difficult to know what programming logic/state each system was in. To aide in this, I made use of the Micro:bits
LED's and serial I/O to print debug data.

Feasibility tests, design, implementation and evaluation of the protocol was conducted. The protocol was based off
Glossy, a
controlled packet flooding approach to mesh networks that came up in research.

The conclusion of this project was that this approach is possible, however encountered strange patterns of high packet
loss
in correlation to distance/physical network topology and therefore requires more thorough investigation from a physics
perspective.