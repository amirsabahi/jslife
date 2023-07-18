function getItems() {
  return [{
      id: 1,
      name: 'Fish n\' Chips'
    },
    {
      id: 2,
      name: 'Burger'
    }
  ]

}

function addOrder(itemId) {
  return new Promise((resolve, reject) => {
  	const items = getItems()
  	const hasItem = items.find((item)=> item.id == itemId)
		if (hasItem) {
    console.log('Order Added')
    resolve()
    } else {
    	console.log('Worng item Id!')
    	reject()
    }
  })
}
