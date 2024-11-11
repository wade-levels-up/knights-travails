# knights-travails

This is a project I undertook as part of The Odin Project.

The objective of this project was to create a knightMoves function that would take a start position such as x, y and an end position x, y - which represent coordinates on an 8x8 chess board. Using the movement pattern of a Knight, the function would output the shortest path possible from the start position to the end position, as well as a list of the pathway taken.

Overall another challenging project! This one was fun and I would've completed it sooner had I not chosen to try and solve it using a depth first search algorithm first instead of a breadth first. The idea of traversing a graph data structure with vertices and edges was new to me and it slowly started to make sense that by implementing the rules of the board and not allowing the Knight to move beyond a certain range I'd implicitily created a graph.

I'm proud of not leaning on co-pilot too much throughout this project, just using it to give me clues and point me in the right the direction when I was scratching my head. After working out the movement pattern for the Knight and creating a depth first search co-pilot was able to tell me I should've been using breadth first, so I worked away at building knightMoves() into a breadth-first search function. It was tough switching my brain from thinking in recursive functions to implementing a First In First Out queue to consider the vertices and all possible edges for each.
