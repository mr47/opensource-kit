# nuka-carousel-autoscroll
Complete solution for auto scroll in nuka-carousel.

![img](http://i.imgur.com/KYT5knc.gif "nuka-carousel auto scroll")

Its simple as:
```jsx
import NukaCarousel from 'nuka-carousel';
import { NukaDecorate } from 'nuka-carousel-autoscroll';
//... React ect.
const NukaDecorated = NukaDecorate({/*options*/})(NukaCarousel);
// Some where ...
class App extends React.Component{
	render(){
		return (
			<NukaDecorated /*nuka-carousel options available*/>
				<img src="http://placehold.it/1000x400/eef2f4/&text=slide1"/>
                <img src="http://placehold.it/1000x400/eef2f4/&text=slide2"/>
			</NukaDecorated>
		);
	}
}  
```
## Running the demo
Run the demo `npm run start`
Open browser on [http://localhost:8080/webpack-dev-server](http://localhost:8080/webpack-dev-server)

# options

###duration
Duration of autoscroll.
###progressComponent(slideProgress, tickProgress)
Component that renders how its want progress of carousel. Supported two values, slideProgress and tickProgress.
slideProgress - progress of carousel,
tickProgress - progress of ticks based on duration.
Simple component already written see [demo](/demo) and [progressIconComponent](/src/autoScrollProgress.js)
###maxTickCount
Timer resolution for tickProgress.

#Internal
Inside it's using the react [context api](https://facebook.github.io/react/docs/context.html).

#Nuka-carousel options 
[Available here](https://github.com/kenwheeler/nuka-carousel#props)

#CONTRIBUTING

## Installation

Install dependencies using `npm install`.

## Building

Build the source code using `npm run build`.
