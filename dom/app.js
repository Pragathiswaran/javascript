const app = [
    {
        name: 'app1',
        id: 1,
        description: 'This is app1'
    },
    {
        name: 'app2',
        id: 2,
        description: 'This is app2'
    },
    {
        name: 'app3',
        id: 3,
        description: 'This is app3'
    }
] 

const strApp = JSON.stringify(app)
const display = JSON.parse(strApp)
// display.map((item,index)=>(index === 2 ? item.description = 'success' : item.description = 'failed'))

// console.log(typeof(display))

