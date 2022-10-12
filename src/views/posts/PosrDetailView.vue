<template>
  <div>
    <h2>{{ posts.title }}</h2>
    <p>{{ posts.contents }}</p>
    <p class="text-muted">{{ posts.createdAt }}</p>

    <hr class="my-4" />

    <div class="row g-2">
      <div class="col-auto">
        <button class="btn btn-outline-dark">이전글</button>
      </div>

      <div class="col-auto">
        <button class="btn btn-outline-dark">다음글</button>
      </div>

      <div class="col-auto me-auto"></div>

      <div class="col-auto">
        <button class="btn btn-outline-dark" @click="goListPage">목록</button>
      </div>

      <div class="col-auto">
        <button class="btn btn-outline-primary" @click="goEditPage">
          수정
        </button>
      </div>

      <div class="col-auto">
        <button class="btn btn-outline-danger" @click="remove">삭제</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { getPostById, deletePost } from '@/api/posts';
import { ref } from 'vue';

const props = defineProps({
  id: String,
});

const router = useRouter();
const posts = ref({});

const fetchPost = async () => {
  try {
    const { data } = await getPostById(props.id);
    posts.value = { ...data };
  } catch (error) {
    console.error(error);
  }
};
fetchPost();

const goListPage = () => {
  router.push('/posts');
};
const goEditPage = () => {
  router.push(`/posts/${props.id}/edit`);
};

const remove = async () => {
  try {
    if (confirm('삭제?') === false) {
      return;
    }

    await deletePost(props.id);
    router.push('/posts');
  } catch (error) {
    console.error(error);
  }
};
</script>

<style lang="scss" scoped></style>
