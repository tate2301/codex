# Codex - A cross-platform app that helps students learn programming with metacognitive learning strategies

## Project Overview
In this project, we explored how CS students acquire knowledge in the context of self-regulated learning including in preparation for technical interview preparation which is a specialized process testing computer science candidates' coding skills.

#### THE CHALLENGE
### The coding interview learning experience is currently heavily platform-based, tedious, stressful, and lacks reflective components.
Preparing for a coding interview indicates self-regulated learning activities like setting goals and reviewing systematic knowledge. Existing platforms such as Leetcode typically support practicing problems with less reflective affordance. Notably, the approach could incur extraneous cognitive load when the interview is imminent, and there's a lack of a tool to assist in the "last mile" preparation.

#### THE SOLUTION
### A cross-platform code learning system that implements Parsons Problem to effectively teach programming

### A lightweight code learning experience through mobile Parsons Problem
An effective and less stressful exercise that simply asks users to rearrange a set of code snippets to get the program right.

A tool that facilitates the learning of programming by providing a mobile application for Parsons problems. These are small assignments where learners build programs by ordering and indenting fragments of code. Parsons problems are well-suited to the mobile context as the assignments form small chunks of learning content that individually require little time to go through and may be freely divided across multiple learning sessions. Furthermore, in response to previous analysis of students using a web environment for Parsons problems, we describe improvements to the automatic feedback given in these assignments.

### Parson’s Problems
A Parson's Problem is a task that involves giving learners all of the lines of code required to solve a problem, but with the lines jumbled.

The main benefit of Parson’s Problems is that the learner is focusing on code structure rather than syntax. The process lowers the cognitive load, allowing learners to practise sequencing and the meaning of the code. Particularly in the early stages of learning to program, this saves time for the learner as they don’t need to spend hours writing out code and making common mistakes such as missed brackets, commas, and colons.

The example below shows three lines of code that would cause errors if kept in this order. The task is to rearrange the lines to make a working program.
Have a go at this yourself!

``` python
    print(food + " is a good choice ")
    food = input("What is your favourite food? " + name+”?”)
    name = input("Please enter your name: ")
```
The code above wouldn’t work because variables are being used before they have been declared. It is the job of the learner to put these lines of code into the correct order to make a working program.
Extra layers of complexity can be added to make Parson’s Problems more suitable to the increasing ability of the learners. For example, when teaching concepts such as selection and loops in Python, indentation is important. These are known as a 2D Parson’s Problem. You could begin with scaffolding the indentation for the learners by using a block-based editor such as Scratch or EduBlocks in which the learners have to connect the blocks together but the indention is already provided. 