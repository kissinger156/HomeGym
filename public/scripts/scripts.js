function register() {
    document
        .querySelector("#modalRegister")
        .classList
        .toggle("hide")

        document
            .querySelector("body")
            .classList
            .toggle("hideScroll")

        document
            .querySelector("#modalRegister")
            .classList
            .toggle("addScroll")
}

function login() {
    document
        .querySelector("#modalLogin")
        .classList
        .toggle("hide")

        document
            .querySelector("body")
            .classList
            .toggle("hideScroll")

        document
            .querySelector("#modalLogin")
            .classList
            .toggle("addScroll")
}

function checkFields(event) {
    
    const valuesToCheck = [
        "title",
        "image",
        "category",
        "description",
        "link",
    ]
    const isEmpty = valuesToCheck.find(function(value) {
        
        const checkIfIsString = typeof event.target[value].value === "string"
        const checkIfIsEmpty = !event.target[value].value.trim()

        if(checkIfIsString && checkIfIsEmpty) {
            return true
        }

        return 
    })
    
    if(isEmpty) {
        event.preventDefault()
        alert("Por favor, preencha todos os campos")
    }
}

function recoverPass() {
    const email = prompt("Insira seu e-mail de cadastro para recuperar sua senha:")
    
    //TODO criar função de validação do email informado
    if(email != "" ) {
        alert(email)
    }
    else {
        alert("Insira um email válido")
    }
}