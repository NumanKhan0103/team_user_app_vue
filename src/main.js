import { createApp } from 'vue';

import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue';

import TeamList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMember from './components/teams/TeamMembers.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            redirect: '/teams',
        },
        {
            path: '/teams',
            component: TeamList,
        },
        {
            path: '/users',
            component: UsersList,
        },{
            path: '/teams/:teamId',
            component: TeamMember,
            props: true,
        },{
            path: '/:notFound(.*)',
            redirect: '/teams',
        }
    ],
    linkActiveClass: 'active',
});


const app = createApp(App)

app.use(router);

app.mount('#app');
