let http = new XMLHttpRequest()
http.open('get', '/JSON/data.json', true)

http.send()

http.onload = function renderData(){
    let data = JSON.parse(this.responseText)
   
    data.map(item => {
        const objCard = new FormSend(item)
        
    })
}

class FormSend{
    elem = document.createElement('div');
    
    constructor(item){
        this.id = item.id
        this.title = item.title
        this.name = item.name
        this.tel = item.tel
        this.old= item.old
        this.birthday = item.birthday
        this.adress = item.adress
        this.text = item.text
        this.selectData = item.selectData
        console.log(this.id);
    }
    create(){
        

    }
}
