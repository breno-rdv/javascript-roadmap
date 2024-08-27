# Execution context
When you run JS, a special environment is created, called *execution context*.

This EC is executed twice in two phases, which are:

1. Memory creation phase;
- Creation of global object (window, global)
- Creation of this object and bind it to global
- Memory heap setup
- Storage of functions and variables, setting it to undefined

2. Execution phase;
- Line-by-line execution
- New execution context creation for each function call