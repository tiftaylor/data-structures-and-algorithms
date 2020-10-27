# Implement a PseudoQueue with 2 stacks

<!-- Short summary or background information -->

## Challenge

Create a class for a PseudoQueue that uses 2 stacks and their methods to define the enqueue and dequeue methods of the new class

## Approach & Efficiency

- Created new class with a constractor that initiates two new stacks
- Used stack methods like pop and push between the two stacks
- Before enqueue or dequeue all items have to be shifted from stack to another to access the right nodes

Big O:

- Time: O(n)
- Space: O(1)

## Whiteboard for Challenge 11
<!-- Embedded whiteboard image -->
#### CC11
![whiteboard](../../../assets/cc11.jpg)