<template>
  <div>
    <h2>게시글 등록</h2>
    <hr class="my-4" />

    <PostForm
      v-model:title="form.title"
      v-model:contents="form.contents"
      @submit.prevent="save"
    >
      <template #actions>
        <button
          type="button"
          class="btn btn-outline-dark me-2"
          @click="goListPage"
        >
          목록
        </button>

        <button class="btn btn-primary">저장</button>
      </template>
    </PostForm>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createPost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';

const router = useRouter();

const form = ref({
  title: '',
  contents: '',
});

const goListPage = () => {
  router.push(`/posts`);
};

const save = () => {
  try {
    const data = {
      ...form.value,
      createdAt: Date.now(),
    };
    createPost(data);
    router.push('/posts');
  } catch (err) {
    console.log(err);
  }
};
</script>

<style lang="scss" scoped></style>
