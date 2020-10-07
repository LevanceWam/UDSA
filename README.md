<h1 id=home>Ultimate Data Structures & Algorithms Course</h1>
<p>Welcome to the Ultimate Data Structures & Algorithms Tutorial!</p>

<p>This is part 1 of a series. In this part we are going to talk about linear data structures such as arrays, linked list, stacks, queues and hash tables. This is awesome for people who didn't get the concept or preparing for a job interview.</p>

<p>Big companies will ask you these questions to see if you can think like a programmer. In this course the materials in this series will change how we think about coding. It will teach us gow to think like a programmer and design fast and scalable algorithm in this series the code will be written in Java so it will be our job to convert this to Javascript or Python. </p>

<p>In this course we are going to solve a lot of problem like a lot of problems. This is going to help us learn the art of problem solving. All of the questions here are popular interview questions. </p>

<h2>Table of Contents</h2>
<li><a href='#section1'>The Big O Notation</a></li>
<li><a href='#section2'>Arrays</a></li>
<li><a href='#section3'>Linked List</a></li>

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

<p>Linked List are the second most used data structures after arrays. Unlike arrays they grow and shrink automatically with out wasting memory. But require a little bit more memory because each node should 
have a reference to the next or previous node </p>

<h3>What are Linked Lists</h3>

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
