// state
var workers = [{
        name: 'Adilet',
        salary: 23000
    },
    {
        name: 'Syimyk',
        salary: 59000
    },
    {
        name: 'Meerim',
        salary: 38000
    },
    {
        name: 'Nurdin',
        salary: 15000
    },
    {
        name: 'Aktashka',
        salary: 31000
    }
]

var list = document.querySelector('.list')
var total = document.getElementById('total')
var sum = workers.reduce((sum, worker) =>{
    return sum + worker.salary
}, 0) 
total.innerText += sum

list.style.backgroundColor = '#212121'
list.style.color = '#fff'

function render(workers) {
    workers.map(function (worker) {
        list.innerHTML += `
        <div class="worker">
            <div class="avatar"></div>
            <div class="desc">
                <h3>${worker.name}</h3>
                <p>${worker.salary}сом</p>
            </div>
        </div>
        `
    })
}

function filter(){
    var filtered = workers.filter(worker => {
        if (worker.salary < 30000) return false
        return true
    })
    render (filtered)
}
filter()

