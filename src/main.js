import { createApp } from 'vue';

import {createRouter, createWebHistory} from 'vue-router';
import App from './App.vue';

import TeamList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMember from './components/teams/TeamMembers.vue';
import NotFound  from './components/nav/NotFound.vue';
import TeamFooter from './components/teams/TeamFooter.vue';
import UserFooter from './components/users/UserFooter.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            redirect: '/teams',
        },
        {
            name: 'teams',
            path: '/teams',
            components:{
                default: TeamList,
                footer: TeamFooter
            },
            children: [
                {
                    name: 'team-members',
                    path: '/teams/:teamId',
                    component: TeamMember,
                    props: true,
                }
            ],
        },
        {
            path: '/users',
            components:{
                default: UsersList,
                footer: UserFooter
            },
        },{
            path: '/:notFound(.*)',
            component: NotFound,
        }
    ],
    linkActiveClass: 'active',
});


const app = createApp(App)

app.use(router);

app.mount('#app');
