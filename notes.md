# context notes

Okay so React has this thing called Context API. I spent today reading about it because props drilling is a huge pain. 

## What is it actually?
Basically, normally in React you pass data from parent to child using props. But if you have like a parent, and then a child, and then a grandchild, and you need data in the grandchild, you have to pass the prop all the way down through the middle child even if the middle child doesn't use it. This is called prop drilling and it is super annoying. It makes the code messy and if you rename a prop you have to change it in like five files.

Context solves this. It's like a global cloud of data that any component can just grab from directly without asking its parent.

## How do you use it?
It seems there are three main parts:
1. React.createContext() - this creates the actual "context" object. It's like setting up the radio station.
2. The Provider - this wraps around your components. You pass a "value" prop to it. Anything inside this provider can now listen to that value. It's like the broadcasting tower.
3. useContext() hook - this is how a component listens to the value. You just pass the context you created into this hook, and it gives you the data. 

## My confusions
Honestly, I'm still not 100% sure when to use this over normal props. If I just have one child, props is way faster. If I use Context for everything, does it make the app slow? I guess I will figure out as I go. Tomorrow I'm going to try building a counter app with it to see if it makes sense in code.
