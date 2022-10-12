<template>
  <div>
    <h2>게시글 수정</h2>

    <hr class="my-4" />

    <PostForm
      v-model:title="form.title"
      v-model:contents="form.contents"
      @submit.prevent="edit"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-danger"
          @click="goDetailPage"
        >
          취소
        </button>

        <button class="btn btn-primary">수정</button>
      </template>
    </PostForm>

    <AppAlert :items="alerts"></AppAlert>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

const route = useRoute();
const router = useRouter();

const form = ref({
  title: '',
  contents: '',
});

const setForm = data => {
  form.value.title = data.title;
  form.value.contents = data.contents;
};

const fetchPost = async () => {
  try {
    const { data } = await getPostById(route.params.id);
    setForm(data);
  } catch (error) {
    console.error(error);
    vAlert('데이터를 불러올 수 없습니다.');
  }
};
fetchPost();

const goDetailPage = () => {
  router.push(`/posts/${route.params.id}`);
};

const edit = async () => {
  try {
    await updatePost(route.params.id, { ...form.value });
    vAlert('수정이 완료되었습니다!', 'success');
  } catch (error) {
    console.error(error);
    vAlert(error.message);
  }
};

const alerts = ref([]);

const vAlert = (message, type = 'error') => {
  alerts.value.push({ message, type });

  setTimeout(() => {
    alerts.value.shift();
  }, 2000);
};
</script>

<style scoped></style>
