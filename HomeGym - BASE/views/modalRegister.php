<div id="modalRegister" class="hide">
    <div class="content">
        <a class="goback" href="#" onclick="register()">Voltar</a>

        <h1>Cadastro</h1>

        <form action="/" method="POST" onsubmit="return checkFields(event)">

            <div class="input-wrapper">
                <label for="name">Nome</label>
                <input type="text" name="name">
            </div>
            
            <div class="input-wrapper">
                <label for="age">CPF</label>
                <input type="text" name="age">
            </div>

            <div class="input-wrapper">
                <label for="email">Email</label>
                <input type="text" name="email">
            </div>

            <div class="input-wrapper">
                <label for="phone">Telefone</label>
                <input type="text" name="phone">
            </div>

            <div class="input-wrapper">
                <label for="password">Senha</label>
                <input type="text" name="password">
            </div>
            
            <div class="input-wrapper">
                <label for="repeatPass">Repetir Senha</label>
                <input type="text" name="repeatPass">
            </div>
            
            <div class="input-wrapper">
                <button>Salvar</button>
            </div>

        </form>
    </div>
</div>