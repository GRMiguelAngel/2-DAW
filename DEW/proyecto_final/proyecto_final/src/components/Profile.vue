<script setup lang="ts">
</script>

<template>
    <div class="row">
        <form class="p-3 m-1 login">
            <h3 class="text-center">Login</h3>
            <div class="form-group p-2">
                <label for="InputEmailLogin">Correo electrónico</label>
                <input type="email" class="form-control" id="InputEmailLogin" aria-describedby="emailHelp" placeholder="example@domain.com">
            </div>
            <div class="form-group p-2">
                <label for="InputPasswordLogin">Contraseña</label>
                <input type="password" class="form-control" id="InputPasswordLogin" placeholder="Contraseña">
            </div>

            <button type="submit" class="btn btn-primary">Iniciar sesión</button>
        </form>
        <form class="p-3 m-1 register">
            <h3 class="text-center">Sign up</h3>
            <div class="form-group p-2">
                <label for="InputEmailRegister">Correo electrónico</label>
                <input type="email" class="form-control" id="InputEmailRegister" aria-describedby="emailHelp" placeholder="example@domain.com">
            </div>
            <div class="form-group p-2">
                <label for="InputPasswordRegister">Contraseña</label>
                <input type="password" class="form-control" id="InputPasswordRegister" placeholder="Contraseña">
            </div>
            <div class="form-group p-2">
                <label for="InputPassword">Confirmar Contraseña</label>
                <input type="password" class="form-control" id="InputPassword" placeholder="Contraseña">
            </div>
            <button type="submit" class="btn btn-primary">Registrar</button>
        </form>
    </div>
    
</template>

<style>
div .login, .register {
    border: 1px solid black;
    border-radius: 10px;


}
</style>