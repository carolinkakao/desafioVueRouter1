import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio'
import SobreMi from './views/SobreMi'
import Contacto from './views/Contacto'
import Post from './views/Post'
import Articulo from './views/Articulo'
import NotFound from './views/NotFound'
Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: Inicio
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: SobreMi
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: Contacto
        },
        {
            /*Ruta dinamica 
            path: '/post/:id', :id= variable ddinamica,es decir, hace la ruta dinamica
            name: 'Articulo',
             component: () =>import(/* webpackChunkName: "articulo"  "../views/Articulo.vue")
              }*/
            path: '/post', 
            name: 'post',
            component: Post,
            children: [
                {
                    path: ':articulo',
                    component: Articulo,
                }
            ]
        },
        {
            path: '*',/*ruta inexistente*/
            component: NotFound
        }
    ]
})