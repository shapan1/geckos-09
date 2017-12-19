##Team: 
Geckos-09


##Task: 
Each member to create their initial commit to the repo by adding their name to the list below.

##Members:

	* Seth Barthen
	* Shapan Dashore
	* Joe Astuccio
	* Jordan Leslie
	* Andrew Knox

Boilerplate and Dependencies: The boilerplate is a copy of Stephen Grider's Simple Redux Starter

Use axios for making ajax requests
	const request = axios.get(queryURL)
	
React, ReactDOM, Redux, react-redux, react-router, redux-promise, loddash, babel, webpack, chai

##Learning Notes: 

Iterate through object props: 

After the appropriate props are mapped to a component,
use lodash's _.map function to iterate through the object

Example:
```
<div> List: {_.map(this.props.lists, list => list.name)} </div>
```

