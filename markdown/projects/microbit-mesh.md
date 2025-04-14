# Micro:bit Mesh

*Micro:bit Mesh* was a *mesh network protocol* I developed for the *BBC Micro:bit*. It was a feature added with the aim
to teach kids about the computing concept of *networking*, giving them a tool to *play around with*.

The project involved very *low-level C/C++ programming* using the Micro:bit's runtime called *codal*. This project
stressed *reading and understanding* how, at a *low level*, *embedded systems hardware* could be manipulated to achieve
the desired effects, working a lot with the *Micro:bit's radio*. One of the biggest challenges I faced during this
project was *debugging the Micro:bits*, as it's difficult to know what *programming logic/state* each system was in. To
aid in this, I made use of the Micro:bit's *LEDs* and *serial I/O* to print *debug data*.

*Feasibility tests*, *design*, *implementation*, and *evaluation* of the protocol were conducted. The protocol was based
on *Glossy*, a *controlled packet flooding* approach to *mesh networks* that came up during research.

The conclusion of this project was that this approach is *possible*, however it encountered *strange patterns of high
packet loss* in correlation to *distance/physical network topology* and therefore requires more *thorough investigation*
from a *physics perspective*.
