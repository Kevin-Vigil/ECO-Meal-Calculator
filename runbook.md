# ECO Diet Food Calculator Runbook

### Overview
This book will explain the thought processs and give understanding behind the code in the ECO Diet Food Calculator

Please keep in mind, this book is more for me, so from here on out, I will type how I will understand it best.

## Section I: Creating the Calculator

>While I would love to just start coding, I really like looking at everything at a higher level, so I should stick to that. No matter how long it takes, I should just sit and break it down top down so I can understand what I need to do, and mostly understand how to implement it.
>This does come with issues, such as not having started coded, so keep in mind not to try to get too nitty gritty to the point of creating vars. Just make it happen first, even if its bad code at first. Refine after.

I spent a lot of time understanding how the food system worked in ECO, which prompted me to start an excel sheet to start creating something that would be accessible for everyone. I am not an excel beast, so I went to JS

This is where I came to first creating the website to just start creating the UI/UX, which immediately led me to the crisis of not knowing what I really need to do for the calculator to work.

So I started with the calculator, as I shouldve from the start.

### What to learn and how to think (For Kevin)

- Whiteboard the algorithm down, and understand how you will implement it. no psuedocode, overview idea

- breakdown to psuedocode to start thinking about the data that needs to be passed in, how the algo will be implmented, etc.

- Identify any immediate red flags in terms of runtime or complexity, but do not refine until you created your initial algo

### What I did

- Couldn't sleep, got up and thought the algorithm through in state of excitment. questioned how I would make a fast algorithm other than brute force.
- Realize there are heuristics, with the goal of optimizing star multiplier. Can implement version of CSP without real constraints apart from finding most optimized multiplier from food
- Sort of like A* and CSP put together (they are close to the same thing just CSP works on constrains and A* goes off best possible move
- This issue is more of an A* algo with CSP traits. I just realized that writing this out.

