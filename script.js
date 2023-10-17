let http = new XMLHttpRequest()
http.open('get', '/JSON/data.json', true)

http.send()

const btnArr = Array.from(document.querySelectorAll('.btnMainForm'))
const bodyVisibleForm = document.querySelector('body')

http.onload = function renderData(){
    let data = JSON.parse(this.responseText)
    btnArr.forEach(i => i.addEventListener('click', () => {
        let nameId = i.parentNode.className
        data.forEach(item => {
            if(item.id === nameId){
                const objCard = new FormSend(item)
                objCard.create()
                objCard.append()            
            }
        }
    )}))
}

class FormSend{
    elem = document.createElement('div');
    
    constructor(item){
        this.id = item.id
        this.title = item.title
        this.namePlaceholder =  item.namePlaceholder
        this.telPlaceholder = item.telPlaceholder
        this.oldPlaceholder = item.oldPlaceholder
        this.birthdayPlaceholder = item.birthdayPlaceholder
        this.adressPlaceholder = item.adressPlaceholder
        this.textPlaceholder = item.textPlaceholder
        this.selectDataPlaceholder = item.selectDataPlaceholder
        this.name = item.name
        this.tel = item.tel
        this.old= item.old
        this.birthday = item.birthday
        this.adress = item.adress
        this.text = item.text
        this.selectData = item.selectData
        this.value = item.value
    }
    create(){
        this.elem.classList.add('modalFormFullScreen')
        this.elem.innerHTML = `
        <div class="modalForm">
            <span class="closeVisibleForm"><img src="/close.png"></span>
            <h4>${this.title}</h4>
            <form method="post" id="${this.id}">
            <div class="visibleForm">
                <input name="${this.name}" class="form-control" type="text" placeholder="${this.namePlaceholder}" required="">
                <input name="${this.old}" class="form-control" type="text" placeholder="${this.oldPlaceholder}" required="">
        		<input name="${this.tel}" class="form-control" type="tel" placeholder="${this.telPlaceholder}" required="" minlength="11" maxlength="11">
		        <input name="${this.adress}" class="form-control" type="text" placeholder="${this.adressPlaceholder}" required="">
                <textarea name="${this.text}" class="form-control" placeholder="${this.textPlaceholder}" required=""></textarea> 
            </div>
            <div class="sendForm">
                <input type="submit" name="submit" class="sendmailForm" value="${this.value}">
            </div>
            </form>
        </div>
        `
        this.elem.querySelector('.closeVisibleForm').addEventListener('click', this.close.bind(this))
    }
    append(){
        bodyVisibleForm.append(this.elem)
    }
    close(){
        this.elem.remove()
        
    }
    
}



