<template>
     <nav class="navbar navbar-light navbar-expand-lg fixed-top" id="mainNav">
        <div class="container"><a class="navbar-brand">V8</a><button data-toggle="collapse" data-target="#navbarResponsive" class="navbar-toggler" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><i class="fa fa-bars"></i></button>
            <div
                class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="nav navbar-nav ml-auto">
                     <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
                    <li class="nav-item" role="presentation"><router-link :to="{name: 'inicio'}">portada</router-link></li>
                     <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA NOMBRADA -->
                    <li class="nav-item" role="presentation"><router-link :to="{name: 'sobremi'}">sobre mí</router-link></li>
                     <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA ESTATICA -->
                    <li class="nav-item" role="presentation"><router-link to="/contacto">Contacto</router-link></li>
                     <!-- REEMPLAZAR CON ELEMENTO ROUTER LINK A CON RUTA DINAMICA -->
                    <li class="nav-item" role="presentation"><router-link to="/post/1">último post</router-link></li>
                </ul>
        </div>
        </div>
    </nav>
</template>