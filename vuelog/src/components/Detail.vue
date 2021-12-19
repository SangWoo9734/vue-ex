<template>
    <div>
        <h5>{{blog[$route.params.id].number + 1}}번글 상세 페이지</h5>
        <h3>{{blog[$route.params.id].title}}</h3>
        <p>{{blog[$route.params.id].date}}</p>
        <p>{{blog[$route.params.id].content}}</p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name : 'detail',
    props : {
        blog : Array,
    },
    data() {
        return {
            
        }
    }
}
</script>

<style>

</style>