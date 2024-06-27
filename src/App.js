import { RecursiveComponent } from "./RecursiveComponent";
//import { DangerButton, SuccessButton } from "./composition";
import { DangerButton, SuccessButton } from "./partiallyApply";

const nestedObject = {
	a: 1,
	b: {
		b1: 4,
		b2: {
			b23: 'Hello',
		},
		b3: {
			b31: {
				message: 'Hi',
			},
			b32: {
				message: 'Hi',
			}
		}
	},
	c: {
		c1: 2,
		c2: 3,
	}
}

function App() {
	return (
    <>
      {/* <DangerButton size="large" text="Delete" />
      <SuccessButton text="Save" /> */}
      <DangerButton text="not safe" />
      <SuccessButton text="safe!" />
    </>
	);
}

export default App;