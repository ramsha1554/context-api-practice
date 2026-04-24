# week 9 reflection

I finally finished the context api stuff. It was super confusing on Tuesday when I tried it the first time, but building the counter app helped.

What clicked:
- The Provider is basically a container that holds the data. If you don't wrap your app with it, useContext will crash or return undefined. I forgot this once and got stuck for like an hour.
- You don't need props anymore if components are nested deep. It's nice not seeing props passed everywhere.
- The theme toggle is really clean. I just toggled a string between light/dark and put it as a className on the main div wrapper.

What I'm still confused about:
- I'm still not sure if wrapping providers inside other providers like I did in App.jsx is the right way. It looks kinda messy.
- I read online that people use useReducer instead of useState for complex state inside Context. I don't really know how useReducer works yet. I should look into that if I have time, but next week I have to build a multi-page app.
- When does Context cause too many re-renders? I saw some warnings about performance online, but my counter is fast enough so I guess it doesn't matter for simple things yet.
