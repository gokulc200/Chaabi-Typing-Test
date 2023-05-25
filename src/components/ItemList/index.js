import React from 'react'

const ItemList = ({ name, data, percentage, ...rest }) => {
	return (
		<li className="list-item my-1 py-4 border rounded" {...rest}>
			{name}
			<span className="d-block display-4">
				{data}
				{percentage && data > 0 ? <small>{percentage}</small> : ''}
			</span>
		</li>
	)
}

export default ItemList