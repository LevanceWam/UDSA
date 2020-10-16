<h1 id=home>Ultimate Data Structures & Algorithms Course</h1>
<p>Welcome to the Ultimate Data Structures & Algorithms Tutorial!</p>

<p>This is part 1 of a series. In this part we are going to talk about linear data structures such as arrays, linked list, stacks, queues and hash tables. This is awesome for people who didn't get the concept or preparing for a job interview.</p>

<p>Big companies will ask you these questions to see if you can think like a programmer. In this course the materials in this series will change how we think about coding. It will teach us gow to think like a programmer and design fast and scalable algorithm in this series the code will be written in Java so it will be our job to convert this to Javascript or Python. </p>

<p>In this course we are going to solve a lot of problem like a lot of problems. This is going to help us learn the art of problem solving. All of the questions here are popular interview questions. </p>

<h2>Table of Contents</h2>
<li><a href='#section1'>The Big O Notation</a></li>
<li><a href='#section2'>Arrays</a></li>
<li><a href='#section3'>Linked List</a></li>
<li><a href='#section4'>Stacks</a></li>
<li><a href='#section5'>Queues</a></li>
<li><a href='#section6'>Hash Tables</a></li>

<h2 id=section1>The Big O Notation</h2>

<h3>What is Big O</h3>

<p>The Big O Notation is a mathimatical notation that describes the limiting behavior of a function when the argument tends towards a particular value or infinity.</p>

<p>The Big O Notation is used to describe the performance of an algorithm and this helps is determine of a given algorithm is scalable or not. Which basically means is an algorithm going to scale well as the input grows really large. Just because the code executes quickly on our computer doesn't mean it's going to perform well when you give it a large data set. Big companies are always asking about Big O, they want to know if we really understand how scalable an algorithm really is.</p>

<h3>Growth Rates</h3>

<p>These growth rates are used to define our algoritm's run time complexity. Depending on the notation it tells us about the behavior of our function. These are a few of the different kind of growth rates out there.</p>

<ul>
    <li>Constant O(1)</li>
    <li>Logarithimc O(log n)</li>
    <li>Linear O(n)</li>
    <li>Quadratic O(n^2)</li>
    <li>Exponential O(2^n)</li>
</ul>

<a href="#home">Top</a>

<h2 id=section2>Arrays</h2>

<p>Arrays are data structures that are built into most programming languages and we use them to store a list of items sequentially. We are going to look at the various strengths and weakness of arrays. We are going to see how to use them and build a array class from scratch. </p>

<a href="#home">Top</a>

<h2 id=section3>Linked List</h2>

<h3>What are Linked Lists</h3>

<p>Linked List are the second most used data structures after arrays. Unlike arrays they grow and shrink automatically with out wasting memory. But require a little bit more memory because each node should have a reference to the next or previous node </p>

<p>We use linked list to keep a list of objects in sequence. But unlike arrays linked lists grow and shrink automatically. A linked list consist of a group of nodes in sequence. Each node holds 2 pieces of data one is a value and the other is the address of the next node in the list. So each node points or references the next node. This is why we refer to these structures as linked list because the nodes are linked together.</p>

<p>The First node is called a head and the last one is called a tail.</p>

<h3>Types of Linked Lists</h3>

<p>We have 2 kinds of linked list singly and doubly. Singly list are everything we have worked with so far every node has a reference or a pointer to the next node. In doubly every node also has a reference to the previous node, what is the benefit to this? Well remember when we had to delete an item from the end of the list and we had to travese it to find the previous node before the last this is a O(n) operation. Well doubly list solves this problem because it already references the previous node this makes it a O(1). Now there is a cost with a doubly. this cost is that doubly takes more space than a singly linked list but this can be negligible for performance gain when we are removing an item at the end.</p>

<p> Now both singly and doubly list can be circular which means the last node will reference the first node so we get a circle. Now what would be the benefit from this we can user these list when we need a circle for example imaginge we want to build a music player. We give it a playslist and it plays each song in the list after it reaches the last song it starts over this is a circle.</p>

<h4>Simple Version</h4>
<ul>
    <li>Simple Linked List − Item navigation is forward only.</li>
    <li>Doubly Linked List − Items can be navigated forward and backward.</li>
    <li>Circular Linked List − Last item contains link of the first element as next and the first element has a link to the last element as previous</li>
</ul>

<h3>Run Time Complexities of Linked list Operations:</h3>

<h4>Looking up</h4>

<li>by Value O(n)</li>
<li>by index O(n)</li>

<p>This is because they both traverse the List</p>

<h4>Insert</h4>

<li>Beginning/end O(1)</li>
<li>middle O(n)</li>

<p>The beginning/end are O(1) because we have to simply change the links. The middle requires us to involve the look up </p>

<h4>Delete</h4>

<li>Beginning O(1)</li>
<li>Middle O(n)</li>

<li>End singly O(n) doubly(1)</li>

<p>The beginning is a O(1)because we are deleting a link. The middle is a O(n) because we have to traverse the list (or lookup) Deleting from the end can be O(n)for singly because we have to find the link before the last and doubly is O(1) because we already have the link to the previous node so it will make it easy to find.</p>

<a href="#home">Top</a>

<h2 id=section4>Stacks</h2>

<h3>What are Stacks</h3>

<p>Stacks are powerful data structures that helps us solve a lot of complex programming problems. We can use them to implement the undo feature. We can use them to build compliers(ex syntax checking). We can also use stacks to evaluate arithmetic expressions. If we wanted to build a calculator and the user wanted to typr a expression like this: (1+2*3) with stacks we can evaluate the expression</p>

<p>We can also use them to build navigation in our applications. For example web browers and andriod devices have a forward and backward button. We can implement these buttons using stacks.</p>

<p>Now what is the structure of a stack. Well lets use the example of a stack of books. We can stack a bunch of books on top of each other, But we can only view or remove the top book. If we want to get to the bottom then we would have to remove the other books one by one. We call this Last in First out (LIFO principle) this is why we can implement stacks for our applications for our undo feature.</p>

<p>Imagine each object in a stack represents an action that the user performed in a text editior. So lets say we have a action 1 & 2. So we have actions 1, 2, 3 now to undo these actions we start with the last action the last action that was performed is the first one to be undone. We take this object out of the list and use one of the methods of the stack to remove it.<p>

<p>Internally we use an array or a linked list to store object in a stack. So basically a stack in a wrapper that is wrapped around either one of the data structures that gives us a different way of storing and accessing objects.</p>

<h4>Stack Operations & Runtime Complexities</h4>

<p>Stacks have 4 operations:</p>

<ul>
<li>Push (item) - This adds an item on top of the stack<li>
<li>Pop() - This removes the last item on the stack<li>
<li>Peek() - This returns the item on the top without removing the item from the stack.<li>
<li>isEmpty() - This tells us if the stack is empty or not.<li>
</ul>

<p>Stacks do not have a look up because they were not meant for that. So we don't use stacks to store products, customers, and so on. So all of the operations in a stack are O(1).</p>

<a href="#home">Top</a>

<h2 id=section5>Queues</h2>

<p>Queues have a lot of applications in the real world. They are used by printers, operating systems, web servers basically anywhere we want to process jobs based on how we recieve them.</p>

<h3>What are Queues</h3>

<p>A queue is a data structure that is similar to a stack. Expect the first item that is added is the first one that can be removed. This is what we call First In First Out (FIFO). Remember that stacks are LIFO. One Example of a queue is a line of people. People join from the back and leave from the front. Here's a example of using a queue in a application. We can use them in situation where we have a resource and the resource musted be shared among many customers. The customers have to line up one by one to use the resources.</p>

<p>Some examples include: Printers, printers uses queues to manage jobs it prints these jobs in the order they are submitted. Operating systems uses queues to manage processes, these processes wait in a queue for their turn to run. Web servers use them to manage incoming request these request go in a queue and are processed in the order they are recieved. Another application of this is when we are using live support systems. Let's say that we have a problem with a web host or product and we go to their customer support. now there will be someone there taking peoples request but they can not work with everyone at the same time. So the people are put into a queue.</p>

<h4>Priority Queues</h4>

<p>Priority Queues are where our items are processed based on their priority and we should note that adding new items to a prioroty list is a O(n) operation because items may have to be shifted. </p>

<h4>Queues Operations & Runtime Complexities</h4>

<ul>
<li>Enqueue - for adding a item to the back of the queue.</li>
<li>Dequeue - for removing a item from the front of the queue.</li>
<li> Peek -to view an item from from the front with out removing it.</li>
<li>isEmpty</li>
<li>isFull</li>
</ul>

<p>Similar to stacks all of these operations run in O(1) or in constant time because these operations are very fast.</p>

<a href="#home">Top</a>

<h2 id=section6>Hash Tables</h2>