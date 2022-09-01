## React Click Away Event Listener

This is a react component that listens for click events outside of the component's bounds and calls a callback.

<img 
src="https://thuc.tech/img/ype1B03"
width="200"
height="200"
style="object-fit: contain;"
alt="Illustration"
draggable="false"
/>

## Installation

```bash
npm i click-away-event-listener
```

or

```bash
yarn add click-away-event-listener
```

or

```bash
pnpm add click-away-event-listener
```

## Usage

```jsx
import ClickAwayEventListener from "click-away-event-listener";

const MyComponent = () => {
	const [open, setOpen] = useState(false);

	const handleClickAway = () => {
		setOpen(false);
	};
	return (
		<ClickAwayEventListener onClickAway={handleClickAway}>
			<div>
				<button onClick={() => setOpen(true)}>Open</button>
				{open && (
					<div>
						<button>Close</button>
					</div>
				)}
			</div>
		</ClickAwayEventListener>
	);
};
```

NOTE: Children must be a single element and can be given ref.
