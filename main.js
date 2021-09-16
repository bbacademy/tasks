class Task {
	title = 'Untitled'
	priority = 5
	done = false
	constructor(data = {}) {
		Object.assign(this, data)
	}
}

const renderItem = ({ title, done }) => `
<li class="item" draggable="true">
	<input type="checkbox" ${done ? 'checked': ''}>
	<input type="text" value="${title}">
	<select>
		<option>1</option>
		<option>2</option>
		<option>3</option>
	</select>
</li>
`

function renderList(listEl, items = []) {
	items.forEach((item) => {
		const itemEl = document.createElement('li')
		listEl.appendChild(itemEl)
		itemEl.outerHTML = renderItem(item)
	})
}

addEventListener('load', () => {

	const items = new Array(10)
		.fill(null)
		.map((item, index) => (new Task({ title: 'Item ' + (index+1) })))

	renderList(document.querySelector('#list1'), [...items])
	renderList(document.querySelector('#list2'), [...items])
})
