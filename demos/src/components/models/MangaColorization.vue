<template>
    <div class="demo">
        <manga
                hasWebGL="hasWebGL"
                :modelFilePath="modelFilePath"
                :modelSelectList="modelSelectList"
                :srcMaxWidth="256"
                :srcMaxHeight="256"
                :patchSize="256"
                :patchStride="256"
                :downsamplingRatio="0.8"
        ></manga>
    </div>
</template>

<script>

    import Manga from '../common/Manga'

    export default {
        props: ['hasWebGL'],

        data() {
            const modelFilePath = '/demos/data/manga_colorization/'
            const modelSelectList = [
                {text: 'gray-valley(7.9MB)', value: 'tf_GA_weights607000'},
                {text: 'orange-desert(7.9MB)', value: 'tf_GA_weights688500'},
                {text: 'blue-forest(7.9MB)', value: 'tf_GA_weights666500'},
                {text: 'red-sunset(7.9MB)', value: 'tf_GA_weights593000'},
            ]
            return {
                modelFilePath: modelFilePath,
                modelSelectList: modelSelectList,
            }
        },

        components: {Manga}


    }
</script>

<style scoped lang="postcss">

</style>




