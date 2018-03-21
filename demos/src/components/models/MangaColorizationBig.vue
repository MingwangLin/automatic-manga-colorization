<template>
    <div class="demo">
        <manga
                hasWebGL="hasWebGL"
                :modelFilePath="modelFilePath"
                :modelSelectList="modelSelectList"
                :modelLabel="上色模型列表"
                :imageURLSelectList="imageURLSelectList"
                :srcMaxWidth="400"
                :srcMaxHeight="400"
                :patchSize="400"
                :patchStride="400"
                :downsamplingRatio="0.5"
        ></manga>
    </div>
</template>

<script>

    import Manga from '../common/Manga'
    import {IMAGE_URLS} from '../../data/sample-image-urls'

    export default {
        props: ['hasWebGL'],

        data() {
            const modelFilePath = '/demos/data/manga_colorization_big/'
            const modelSelectList = [
                {text: 'gray-valley(7.9MB)', value: 'tf_GA_weights607000'},
                {text: 'orange-desert(7.9MB)', value: 'tf_GA_weights688500'},
                {text: 'blue-forest(7.9MB)', value: 'tf_GA_weights666500'},
                {text: 'red-sunset(7.9MB)', value: 'tf_GA_weights593000'},
            ]
            return {
                modelFilePath: modelFilePath,
                modelSelectList: modelSelectList,
                imageURLSelectList: IMAGE_URLS,

            }
        },

        components: {Manga}


    }
</script>

<style scoped lang="postcss">

</style>



