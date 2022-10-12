import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import PostCreateView from '@/views/posts/PostCreateView.vue';
import PosrDetailView from '@/views/posts/PosrDetailView.vue';
import PostEditView from '@/views/posts/PostEditView.vue';
import PostListView from '@/views/posts/PostListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';

const routes = [
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView },

  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },

  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },

  {
    path: '/posts',
    component: PostListView,
  },

  {
    path: '/posts/create',
    component: PostCreateView,
  },

  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: PosrDetailView,
    props: true,
    // props: { word: 'hello' },
    // props: route => {
    //   return {
    //     id: route.params.id,
    //   };
    // },
  },

  {
    path: '/posts/:id/edit',
    component: PostEditView,
  },

  {
    path: '/nested',
    component: NestedView,
    children: [
      { path: 'one', component: NestedOneView },
      { path: 'two', component: NestedTwoView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes: routes,
});

export default router;
